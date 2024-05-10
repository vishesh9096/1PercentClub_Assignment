import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {createStackNavigator} from '@react-navigation/stack';
import TabRoutes from './TabRoutes';

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
