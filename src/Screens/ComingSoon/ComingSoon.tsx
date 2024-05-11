import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import { moderateScale } from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';
import SliderButtonComponent from '../../Components/SliderButtonComponent';
import Temp from '../../Components/Temp';
const ComingSoon = () => {
  return (
    <WrapperContainer statusBarColor={colors.codGray}>
      <Text style={style.title}>Coming soon</Text>
    <View style={{marginTop:moderateScale(50)}}>
      <SliderButtonComponent
      inactiveText='Swipe to Buy'
         activeText='Release'
         completedText='Confirmed!'
          btnText="Slider"
          onPressBtn={()=>{console.log("pressed")}}
          disabled={false}
          loading={false}
        />

        {/* <Temp/> */}

        </View>
    </WrapperContainer>
  );
};

export default ComingSoon;

const style = StyleSheet.create({
  title:{
    ...commonStyles.font_20_bold,
    textAlign: 'center',
    color:colors.white,
    marginTop: moderateScale(40),
  }

})
