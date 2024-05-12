import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';

type PropsType = {
  isCurrent?: boolean;
  label?: any;
  index?: number;
};

export const CustomTabMenuItem = ({label, isCurrent, index}: PropsType) => {
  const getImage = () => {
    switch (label) {
      case navigationStrings.HOME_SCREEN:
        return imagePath.firstTabIcon;
      case navigationStrings.WALLET_CONNECT:
        return imagePath.wallet;
      case navigationStrings.PROFILE_SCREEN:
        return imagePath.fifthTabIcon;
    }
  };

  const styles = externalStyles({isCurrent, index});

  return (
    <View style={styles.imgContainerStyle}>
      <Image source={getImage()} style={styles.imgStyle} />
      {isCurrent && index !== 2 && <View style={styles.underline} />}
    </View>
  );
};

type ExternalStylesProps = {
  isCurrent?: boolean;
  index?: any;
};

const externalStyles = ({isCurrent}: ExternalStylesProps) =>
  StyleSheet.create({
    imgContainerStyle: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: moderateScale(10),
    },
    imgStyle: {
      height: moderateScale(24),
      width: moderateScale(24),
      resizeMode: 'contain',
      tintColor: isCurrent ? colors.theme : colors.whiteOpacity50,
    },
    underline: {
      height: 3,
      width: '30%',
      backgroundColor: colors.theme,
      marginTop: moderateScale(4),
    },
  });

export default CustomTabMenuItem;
