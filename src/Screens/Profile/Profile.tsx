import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, TouchableOpacity, View, Text, StyleSheet, ScrollView} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import {useDispatch, useSelector} from 'react-redux';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';

import commonStyles from '../../styles/commonStyles';
import actions from '../../redux/actions';
import types from '../../redux/types';

const Profile = () => {
  const navigation = useNavigation();

  const homeReducer = useSelector(state => state);
  console.log(homeReducer)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: types.CLEAR_REDUX_STATE });
    
  };

 

  return (
    <WrapperContainer statusBarColor={colors.codGray}>
      <TouchableOpacity
        activeOpacity={1}
        style={{marginTop: moderateScaleVertical(10)}}
        onPress={() => navigation.goBack()}>
        <Image source={imagePath.backIcon} />
      </TouchableOpacity>
    
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
            }}
          />
        </View>

        <View style={{marginLeft: moderateScale(20)}}>
          <Text style={{...commonStyles.font_20_bold}}>Vishesh Gatha</Text>
          <Text style={styles.innertext}>Account Details</Text>
        </View>
      </View>
      <View style={styles.divider}></View>

      <TouchableOpacity
      onPress={()=>{navigation.navigate(navigationStrings.OPEN_ORDERS)}}
      style={styles.container2}>
        <View>
          <Image
            style={styles.image2}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/839/839860.png'
            }}
            tintColor={colors.gray1}
          />
        </View>

        <View style={{marginLeft: moderateScale(20)}}>
          <Text style={{...commonStyles.font_16_regular}}>Open Orders</Text>
          <Text style={styles.innertext}>Track Orders, Order Details</Text>
          <View style={styles.divider2}></View>
        </View>
      </TouchableOpacity>


      <View style={styles.container2}>
        <View>
          <Image
            style={styles.image2}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/8912/8912559.png'
            }}
            tintColor={colors.gray1}
          />
        </View>

        <View style={{marginLeft: moderateScale(20)}}>
          <Text style={{...commonStyles.font_16_regular}}>Bank Details</Text>
          <Text style={styles.innertext}>Account Details</Text>
          <View style={styles.divider2}></View>
        </View>
      </View>






      <View style={styles.container2}>
        <View>
          <Image
            style={styles.image2}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/4526/4526832.png'
            }}
            tintColor={colors.gray1}
          />
        </View>

        <View style={{marginLeft: moderateScale(20)}}>
          <Text style={{...commonStyles.font_16_regular}}>Customer Support</Text>
          <Text style={styles.innertext}>FAQs, Contact 1% Club</Text>
          <View style={styles.divider2}></View>
        </View>
      </View>






      <View style={styles.container2}>
        <View>
          <Image
            style={styles.image2}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1690/1690427.png'
            }}
            tintColor={colors.gray1}
          />
        </View>

        <View style={{marginLeft: moderateScale(20)}}>
          <Text style={{...commonStyles.font_16_regular}}>Reports</Text>
          <Text style={styles.innertext}>Stocks and Mutual Funds Reports</Text>
          <View style={styles.divider2}></View>
        </View>
      </View>





      <TouchableOpacity 
      onPress={handleLogout}
      style={styles.container2}>
        <View>
          <Image
            style={styles.image2}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1286/1286853.png'
            }}
            tintColor={colors.gray1}
          />
        </View>

        <View style={{marginLeft: moderateScale(20)}}>
          <Text style={{...commonStyles.font_16_medium, color:colors.gray}}>LogOut</Text>
          <Text style={styles.innertext}>Log Out of this account</Text>
          <View style={styles.divider2}></View>
        </View>
      </TouchableOpacity>





    





    </WrapperContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScaleVertical(20),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  container2: {
    marginVertical: moderateScaleVertical(10),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  divider: {
    borderBottomWidth: 0.3,
    borderRadius: 4,
    borderColor: colors.gray1,
    marginTop: moderateScale(6),
    marginBottom:moderateScaleVertical(20)
  },
  divider2: {
    width: moderateScale(260),
    borderBottomWidth: 0.3,
    borderRadius: 4,
    borderColor: colors.gray1,
    marginTop: moderateScale(20),
  },
  image: {
    width: moderateScale(50),
    height: moderateScale(50),
    resizeMode: 'contain',
  },
  image2: {
    marginTop:moderateScale(5),
    width: moderateScale(30),
    height: moderateScale(30),
    resizeMode: 'contain',
  },
  innertext: {
    ...commonStyles.font_12_regular,
    color: colors.gray1,
    marginTop: moderateScaleVertical(3),
  },
});
