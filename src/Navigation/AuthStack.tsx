import React from 'react';
import * as Screen from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.INTRO_SCREEN}
        component={Screen.IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.EMAIL_LOGIN}
        component={Screen.EmailLogin}
        options={{headerShown: false}}
      />
     
    </Stack.Navigator>
  );
}
