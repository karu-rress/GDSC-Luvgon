import React from 'react'

import FriendScreen from '../screen/FriendScreen'
import { FriendStack, Stack, screenOptionStyle } from '../option';


function Friend() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <FriendStack.Screen
                name="Friend"
                component={FriendScreen}
            />
        </Stack.Navigator>
    )
}

export default Friend