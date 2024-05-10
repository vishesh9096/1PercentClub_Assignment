// import necessary libraries and components
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import colors from '../styles/colors';

const Stack = createStackNavigator();

function Routes() {
  const userData = useSelector((state: any) => state?.auth?.userData);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.codGray,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      {userData?.token ? (
        <Stack.Navigator
          screenOptions={{headerShown: false, detachPreviousScreen: true}}>
          <Stack.Screen
            name="MainStack"
            component={MainStack}
            options={{detachPreviousScreen: true}}
          />
        </Stack.Navigator>
      ) 
      :
       (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes;
