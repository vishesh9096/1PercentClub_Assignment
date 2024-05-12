import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {createStackNavigator} from '@react-navigation/stack';
import TabRoutes from './TabRoutes';
import CompanyDetails from '../Screens/CompanyDetails/CompanyDetails';
import OpenOrders from '../Screens/OpenOrders/OpenOrders';
import OrderAnimation from '../Screens/OrderAnimation/OrderAnimation';
import SearchStocks from '../Screens/SearchStocks/SearchStocks';

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator

    >
      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{headerShown: false}}
      />

    <Stack.Screen
        name={navigationStrings.COMPANY_DETAILS}
        component={CompanyDetails}
        options={{headerShown: false}}
      />



      <Stack.Screen
        name={navigationStrings.OPEN_ORDERS}
        component={OpenOrders}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationStrings.ORDER_ANIMATION}
        component={OrderAnimation}
        options={{headerShown: false}}
      />

    <Stack.Screen
        name={navigationStrings.SEARCH_STOCKS}
        component={SearchStocks}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
