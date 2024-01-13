import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "white",
    },
    tabBarShowLabel: false,
    headerShown: false,
    headerShadowVisible: false, // 헤더 border 제거

};
export const Stack = createNativeStackNavigator();
export const HomeStack = createNativeStackNavigator();
export const FriendStack = createNativeStackNavigator();
export const LoginStack = createNativeStackNavigator();
export const Tab = createBottomTabNavigator();