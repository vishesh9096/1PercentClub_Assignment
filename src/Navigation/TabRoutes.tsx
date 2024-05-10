import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, StyleSheet} from 'react-native';
import * as Screen from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import {CustomTabBar} from '../Components/CustomTabBar';

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

export default function TabRoutes() {
  const insets = useSafeAreaInsets();
  const tabBarComp = (props: BottomTabBarProps) => <CustomTabBar {...props} />;

  return (
    <View style={styles.tabBarStyle}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // header: () => <AppHeader />,
        }}
        tabBar={tabBarComp}>
       
        <Tab.Screen
          name={navigationStrings.COMING_SOON2}
          component={Screen.ComingSoon}
          options={{headerShown: false}}
        />

<Tab.Screen
          name={navigationStrings.COMING_SOON}
          component={Screen.ComingSoon}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={navigationStrings.PROFILE_SCREEN}
          component={Screen.ComingSoon}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={navigationStrings.COMING_SOON3}
          component={Screen.ComingSoon}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
      {insets.bottom > 0 && (
        <View
          style={{
            height: insets.bottom - 5,
            backgroundColor: colors.white,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {flex: 1, position: 'relative'},
});
