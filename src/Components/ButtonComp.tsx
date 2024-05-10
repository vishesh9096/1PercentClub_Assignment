import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../styles/colors';
import commonStyles, {hitSlopProp} from '../styles/commonStyles';
import {moderateScale} from '../styles/responsiveSize';
import {MaterialIndicator} from 'react-native-indicators';


interface ButtonCompProps {
  btnText: string;
  txtStyle?: object;
  onPressBtn?: () => void;
  rightImage?: any;
  btnStyle?: object;
  disabled?: boolean;
  loading?: boolean;
}

const ButtonComp: FC<ButtonCompProps> = ({
  btnText,
  txtStyle,
  onPressBtn,
  rightImage,
  btnStyle,
  disabled = false,
  loading = false,
}) => {
  const opacity = disabled || loading ? 0.4 : 1;

  return (
    <TouchableOpacity
      onPress={onPressBtn}
      disabled={disabled || loading}
      style={StyleSheet.compose(
        {
          ...styles.btnStyle,
          opacity,
        },
        btnStyle,
      )}
      hitSlop={hitSlopProp}
      activeOpacity={disabled ? 1 : 0.9}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <View style={styles.loaderView}>
            <MaterialIndicator color={colors.white} size={moderateScale(22)} />
          </View>
          <Text style={styles.loderText}>Loading...</Text>
        </View>
      ) : (
        <>
          <Text style={{...styles.textView, ...txtStyle}}>{btnText}</Text>
          {rightImage && (
            <Image
              source={rightImage}
              resizeMode="contain"
              style={styles.imgStyle}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.theme,
    height: moderateScale(52),
  },
  textView: {
    ...commonStyles.font_16_bold,
    color: colors.black,
  },
  imgStyle: {alignSelf: 'flex-end'},
  loaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loaderView: {
    height: moderateScale(22),
    width: moderateScale(22),
    paddingRight: moderateScale(25),
  },
  loderText: {
    ...commonStyles.font_14_medium,
    color: colors.white,
  },
});

export default React.memo(ButtonComp);
