import axios from "axios";
import { Linking } from 'react-native';
const URL = 'http://luvgon.kro.kr:8080';
export const googleRe = async () => {
    try {
        console.log('asd')
        await Linking.openURL('http://luvgon.kro.kr:8080/auth');
        const url = await Linking.getInitialURL();

        console.log('asdf' + url);
        const urlParams = new URLSearchParams(url);
        console.log('asdfg' + urlParams);
        const code = urlParams.get('code');
        console.log('code:' + code);

        const response = await fetch(URL + '/auth/google?code=' + code);
        const userEmail = await response.json();

        console.log(userEmail);
    }
    catch (e) {
        console.log(e);
    }

    /*
        return await axios.get(`${URL}/auth`).then((res) => {
            Linking.openURL('http://luvgon.kro.kr:8080/auth');
        }).catch(e => console.log(e))
        */
}