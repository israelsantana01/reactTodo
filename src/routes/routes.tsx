import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/home/home';

const Stack = createStackNavigator();

const Routes = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;