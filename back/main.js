/**
 *
 *  main.js
 *  Back-end server
 *
 *  Created: 2024-01-12
 *  Last modified: -
 *
 */

const DEBUG = true;

const express = require('express');
const axios = require('axios');
const { authConfig } = require('./config/config');
const { sql, poolPromise } = require('./config/server');
const { SqlConnector } = require('./db');
const { default_goals } = require('./default_goals');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
/**
 * @type {SqlConnector}
 */
let sqlConn;

// Enable CORS for all routes
app.use(bodyParser.json());
app.use(async (_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Run server
app.listen(PORT, async () => {
    sqlConn = new SqlConnector(await poolPromise);
    if (DEBUG) sqlConn.setUser('test@gmail.com');
    console.log('Connected to TastyNav database.');
    console.log(`Listening to port ${PORT}...`);
});

//루트 페이지
//로그인 버튼을 누르면 GET /login으로 이동
app.get('/', (_, res) => {
    res.send(`<a href="/auth">Log in</a>
  <a href="/signup">Sign up</a>`);
});

// 로그인 버튼을 누르면 도착하는 목적지 라우터
// 모든 로직을 처리한 뒤 구글 인증서버인 https://accounts.google.com/o/oauth2/v2/auth
// 으로 redirect 되는데, 이 url에 첨부할 몇가지 QueryString들이 필요
app.get('/auth', (_, res) => {
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';
    url += `?client_id=${authConfig.clientID}`;
    url += `&redirect_uri=${authConfig.redirectUri}`;
    url += '&response_type=code';
    url += '&scope=email profile';
    console.log('Client redirected to: ' + url);
    res.redirect(url);
});

app.get('/auth/google', async (req, res) => {
    const { code } = req.query;
    console.log(`code: ${code}`);

    const resp = await axios.post(authConfig.tokenUrl, {
        code,
        client_id: authConfig.clientID,
        client_secret: authConfig.clientSecret,
        redirect_uri: authConfig.redirectUri,
        grant_type: 'authorization_code',
    });
    console.log('token is: : ' + resp.data.access_token);

    const resp2 = await axios.get(authConfig.userinfoUrl, {
        headers: { Authorization: `Bearer ${resp.data.access_token}` },
    });
    sqlConn.setUser(resp2.data['email']);
    res.send(resp2.data['email']);
    
    try {
        for (let i = 1; i < 13; i++) {
            await sqlConn.addGoal(i, 1, default_goals[i]);
        }
    } catch (err) {
        res.status(500).send();
    }
});

app.get('/signup', (req, res) => {
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';
    url += `?client_id=${authConfig.clientID}`;
    url += `&redirect_uri=${authConfig.signupUri}`;
    url += '&response_type=code';
    url += '&scope=email profile';
    res.redirect(url);
});

// 회원가입
app.get('/signup/google', async (req, res) => {
    const { code } = req.query;
    console.log(`code: ${code}`);

    const resp = await axios.post(authConfig.tokenUrl, {
        code,
        client_id: authConfig.clientID,
        client_secret: authConfig.clientSecret,
        redirect_uri: authConfig.signupUri,
        grant_type: 'authorization_code',
    });

    const resp2 = await axios.get(authConfig.userinfoUrl, {
        headers: {
            Authorization: `Bearer ${resp.data.access_token}`,
        },
    });
    res.json(resp2.data);
});

//목록에 추가
app.post('/addgoal', async (req, res) => {
    try {
        const add_info = req.body;
        await sqlConn.addGoal(add_info.month, add_info.id, add_info.goal);
        res.status(200).send();
    } catch (err) {
        res.status(500).send(req.body);
    }
});

//목록 수정
app.post('/editgoal', async (req, res) => {
    try {
        const edit_info = req.body;

        await sqlConn.modifyGoal(
            edit_info.month,
            edit_info.id,
            edit_info.newGoal
        );
        res.status(200).send();
    } catch (err) {

        res.status(500).send();

    }
});

//목록 삭제
app.delete('/deletegoal/:month/:id', async (req, res) => {
    try {
        let { id, month } = req.params;

        await sqlConn.deleteGoal(month, id);

        res.status(200).send();
    } catch (err) {
        res.status(500).send();
    }
  });

//목록 읽기
app.get('/getgoal/:month', async (req, res) => {
    try {
        let { month } = req.params;
        const result = await sqlConn.getGoals(sqlConn.user, month);
        res.send(result);
    } catch (err) {
        res.status(500).send();
    }
});

app.get('/user/search/:query', async (req, res) => {
    try {
        let { query } = req.params;
        const friends = await sqlConn.searchFriends(query);
        if (friends.length === 0) res.status(404).send();
        else res.send(friends);
    } catch (err) {
        res.status(500).send();
    }
});

app.post('/user/follow', async (req, res) => {
    try {
        const user_info = req.body;

        await sqlConn.addFollowing(user_info.user);
        res.status(200).send();
    } catch (err) {
        res.status(500).send();
    }
});

app.get('/user/followings', async (req, res) => {
    try {
        // getFollowerings 함수를 이용
        const friendsList = await sqlConn.getFollowings();
        // 프론트엔드에 목록을 응답
        res.send(friendsList);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
