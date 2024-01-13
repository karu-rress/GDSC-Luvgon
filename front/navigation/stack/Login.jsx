import React from 'react'

import LoginScreen from '../screen/LoginScreen'
import { LoginStack, Stack, screenOptionStyle } from '../option';

function Login() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <LoginStack.Screen
                name="Login"
                component={LoginScreen}
            />
        </Stack.Navigator>
    )
}

export default Login