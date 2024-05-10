import React, {FC} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale} from '../styles/responsiveSize';
import moment from 'moment';

interface TextInputProps {
  value: any;
  placeholder: string;
  inputStyle?: object;
  inputView?: object;
  showRightCustomComp?: any;
  containerStyle?: object;
  onPress: () => void;
}

const ClickableComp: FC<TextInputProps> = ({
  value,
  placeholder,
  inputStyle = {},
  inputView,
  showRightCustomComp,
  containerStyle,
  onPress,
}) => {
  const currentDate: any = new Date();
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={{
          marginBottom: moderateScale(32),
          ...containerStyle,
        }}>
        <View style={{...styles.inputView, ...inputView}}>
          <View
            style={{
              ...styles.inputStyle,
              ...inputStyle,
            }}>
            <Text
              style={{
                ...styles.textInputStyle,
                color:
                  moment(value).format('DD-MM-YYYY') !==
                  moment(currentDate).format('DD-MM-YYYY')
                    ? colors.white
                    : colors.placeholderTextColor,
              }}>
              {moment(value).format('DD-MM-YYYY') !==
              moment(currentDate).format('DD-MM-YYYY')
                ? moment(value).format('DD-MM-YYYY')
                : placeholder}
            </Text>
            {showRightCustomComp && showRightCustomComp()}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputStyle: {
    ...commonStyles.font_14_regular,
    color: colors.textColor,
    flex: 1,
  },
  inputStyle: {
    ...commonStyles.font_16_regular,
    backgroundColor: 'transparent',
    borderRadius: moderateScale(40),
    zIndex: 1,
    paddingVertical:
      Platform.OS === 'ios' ? moderateScale(16) : moderateScale(14),
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(24),
    borderColor: colors.catskillWhite,
  },
  mobileViewStyle: {
    paddingRight: moderateScale(10),
  },
  textInputHeaderStyle: {
    ...commonStyles.font_14_regular,
    color: colors.textColor,
    marginBottom: moderateScale(9),
  },
  textInputImage: {
    height: moderateScale(16),
    width: moderateScale(16),
    resizeMode: 'contain',
    marginLeft: moderateScale(16),
  },
  showText: {
    height: moderateScale(18),
    width: moderateScale(18),
    resizeMode: 'contain',
  },
  errorText: {
    ...commonStyles.font_12_medium,
    color: colors.red,
    marginTop: moderateScale(6),
    paddingHorizontal: moderateScale(16),
  },
  required: {
    color: colors.red,
  },
});

export default React.memo(ClickableComp);
