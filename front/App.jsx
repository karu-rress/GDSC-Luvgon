import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabNavigator from './navigation/TabNavigation';
import { RecoilRoot } from 'recoil';
function App() {

  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </RecoilRoot>

  );
}


export default App;
