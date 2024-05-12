import React, { useState } from 'react';
import { Button, FlatList, Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
// Import your stack param list type
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';

import { moderateScale } from '../../styles/responsiveSize';
import commonStyles, {hitSlopProp} from '../../styles/commonStyles';
import { BarChart, LineChart } from "react-native-gifted-charts";
import ButtonComp from '../../Components/ButtonComp';
import actions from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import OrderCard from '../../Components/OrderCard';
import SliderButtonComponent from '../../Components/SliderButtonComponent';
import navigationStrings from '../../constants/navigationStrings';
import notifee from '@notifee/react-native';
interface OpenOrdersProps {
  route: any;
}

const OpenOrders: React.FC<OpenOrdersProps> = ({ route }) => {
    const navigation = useNavigation()

    const homeReducer = useSelector(state => state);

    console.log('homereducer',Object.entries(homeReducer?.orders?.orders).map(([id, item]) => ({ id, ...item })));

    async function pushnotification(payload){
        await notifee.displayNotification({
            title: 'Order Success',
            body: `Your Purchase order for ${payload} is completed`,
            android: {
                channelId:'default',
              pressAction: {
                id: 'default',
              },
            },
          });
          navigation.navigate(navigationStrings.ORDER_ANIMATION)

    }


    async function onDisplayNotification() {
        // Request permissions (required for iOS)
        await notifee.requestPermission()
    
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });

        Object.entries(homeReducer?.orders?.orders).map(([id, item]) => {

            console.log(item) 
            pushnotification(item.name) // Call the function here

          });
    
        // Display a notification

       
      }
  
  return (
    <WrapperContainer statusBarColor={colors.codGray}>
          <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.goBack()}>
        <Image source={imagePath.backIcon} />

        
      </TouchableOpacity>
      <Text style={[styles.title]}>Open Orders</Text>
     {homeReducer?.orders?.orders&&
     <>
     <FlatList

     data={Object.entries(homeReducer?.orders?.orders).map(([id, item]) => ({ id, ...item }))}
     renderItem={({item})=>
     <OrderCard
     name={item.name}
     title={item.title}
      cost={item.cost}
       change={item.change}
       id={item?.id}
     />}
     />




</>

}



<SliderButtonComponent
inactiveText='Swipe to Buy'
activeText='Release'
completedText='Confirmed!'
onPressBtn={()=>{
    onDisplayNotification()
    // navigation.navigate(navigationStrings.ORDER_ANIMATION)
}}
/>



     


     
            
      
    </WrapperContainer>
  );
};



export default OpenOrders