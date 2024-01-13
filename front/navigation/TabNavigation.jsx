
import React from "react";// 아이콘 추가할거면 모듈 추가후 추가해주시면 되요
import Home from './stack/Home';
import Login from './stack/Login';
import Friend from './stack/Friend';
import { Tab } from "./option";
import { Image, WithLocalSvg } from "react-native-svg";
import Ihome from '../assets/icon/i_home.svg';
import Ilogin from '../assets/icon/i_login.svg';
import Ifriend from '../assets/icon/i_friend.svg';
const TabNavigator = ({ navigation }) => {

    return (
        <Tab.Navigator
            initialRouteName="로그인"
            screenOptions={({ route }) => ({
                tabBarLabelStyle: {
                    fontSize: 17,
                    fontFamily: 'Bazzi',
                },
                tabBarStyle: {
                    backgroundColor: '#eeeeee',
                },
                tabBarInactiveTintColor: '#1A1A1A',
                tabBarActiveTintColor: '#2288FF'
            })}
        >
            <Tab.Screen
                name="친구"
                component={Friend}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <WithLocalSvg asset={Ifriend} width={27} height={27} />
                    ),
                }}

            />
            <Tab.Screen
                name="홈"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <WithLocalSvg asset={Ihome} width={50} height={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="로그인"
                component={Login}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <WithLocalSvg asset={Ilogin} width={30} height={30} />
                    ),
                })}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;