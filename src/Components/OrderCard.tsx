import React, {FC, useState} from 'react';
import {
  Image,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../styles/colors';
import commonStyles, {hitSlopProp} from '../styles/commonStyles';
import {moderateScale} from '../styles/responsiveSize';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import actions from '../redux/actions';
interface OrderCardProps {
  title?: string;
  name?: string;
  description?: string;
  cost?: string;
  change?: string;
  image?: any;
  showdescription?: boolean;
  id:string
}



const OrderCard: FC<OrderCardProps> = ({
  title,
  name,
  description,
  cost,
  change,
  image,
  showdescription,
  id
}) => {

    const deleteOrder = ()=>{
        actions.deleteOrderFromStore(id)
    }


  return (
    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <View>
      <View
        style={styles.container}>
        <View>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/0/747.png',
            }}
            tintColor={'white'}
            style={styles.imgStyle}
          />
        </View>

        <View style={{marginLeft: moderateScale(20)}}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{name}</Text>
          </View>
          <View>
            <View style={styles.innercontainer}>
              <Text style={styles.grayText}>${cost}</Text>

              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/4655/4655143.png',
                }}
                tintColor={colors.green}
                style={styles.growimage}
              />
              <Text style={styles.greenText}>{change} %</Text>
            </View>
          </View>
        </View>
      </View>

    </View>
    <TouchableOpacity
    onPress={()=>{deleteOrder()}}
    >

    <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png',
            }}
            tintColor={'white'}
            style={styles.deletestyle}
          />

    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: moderateScale(100),

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(15),
    justifyContent: 'flex-start',
  },
  imgStyle: {
    alignSelf: 'center',
    height: moderateScale(40),
    width: moderateScale(40),
    resizeMode: 'contain',
  },
  deletestyle: {
    alignSelf: 'center',
    height: moderateScale(25),
    width: moderateScale(25),
    resizeMode: 'contain',
  },
  title: {
    ...commonStyles.font_20_bold,
  },
  subtitle: {
    ...commonStyles.font_12_medium,
    color: colors.gray2,
  },
  innercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  grayText: {
    ...commonStyles.font_22_bold,
  },
  growimage: {
    height: moderateScale(10),
    width: moderateScale(10),
    marginLeft: moderateScale(10),
    resizeMode: 'contain',
  },
  greenText: {
    color: colors.green,
    marginLeft: moderateScale(5),
  },
  divider: {
    height: moderateScale(1),
    backgroundColor: colors.gray1,
    borderRadius: 4,
    marginTop: moderateScale(6),
  },
});

export default React.memo(OrderCard);

