import React from 'react'
import { HomeStack, Stack, screenOptionStyle } from '../option';
import Month1 from '../../page/homePage/month/Month1';
import Month2 from '../../page/homePage/month/Month2';
import Month3 from '../../page/homePage/month/Month3';
import Month4 from '../../page/homePage/month/Month4';
import Month5 from '../../page/homePage/month/Month5';
import Month6 from '../../page/homePage/month/Month6';
import Month7 from '../../page/homePage/month/Month7';
import Month8 from '../../page/homePage/month/Month8';
import Month9 from '../../page/homePage/month/Month9';
import Month10 from '../../page/homePage/month/Month10';
import Month11 from '../../page/homePage/month/Month11';
import Month12 from '../../page/homePage/month/Month12';
import Final from '../../page/homePage/month/Final'
const components = {
    Month1,
    Month2,
    Month3,
    Month4,
    Month5,
    Month6,
    Month7,
    Month8,
    Month9,
    Month10,
    Month11,
    Month12,
    Final
};

function Home() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName='Month1'>
            {Object.entries(components).map(([name, component]) => {
                return (<HomeStack.Screen
                    key={name}
                    name={name}
                    component={component}
                />)
            })}
        </Stack.Navigator>
    )
}

export default Home