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

          header: () => {
            return(<View>Header</View>)
          },
        }}
        tabBar={tabBarComp}>
       
        <Tab.Screen
          name={navigationStrings.HOME_SCREEN}
          component={Screen.HomeScreen}
          options={{headerShown: false}}
        />

        <Tab.Screen
          name={navigationStrings.WALLET_CONNECT}
          component={Screen.WalletConnect}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={navigationStrings.PROFILE_SCREEN}
          component={Screen.Profile}
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
