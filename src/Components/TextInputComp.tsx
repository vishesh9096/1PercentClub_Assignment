import React, {FC, LegacyRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ImageStyle,
  Platform,
  Image,
} from 'react-native';
import {CountryPicker} from 'react-native-country-codes-picker';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {height, moderateScale} from '../styles/responsiveSize';
// import FastImage from 'react-native-fast-image';
import {ApplyEaseOutAnimation} from '../utils/helperFunctions';
import imagePath from '../constants/imagePath';

interface TextInputProps {
  value: string;
  onChangeText: (val: string) => void;
  textInputStyle?: object;
  placeholder: string;
  onFocus?: () => void;
  onBlur?: () => void;
  textInputRef?: LegacyRef<TextInput>;
  keyBoardType?: any;
  onSubmitEditing?: () => void;
  editable?: boolean;
  textAlign?: any;
  textInputHeaderStyle?: object;
  textInputImg?: any;
  showRightComp?: boolean;
  isMobileInput?: boolean;
  errorText?: string | null;
  inputStyle?: object;
  multiline?: boolean;
  rightIcon?: any | null;
  rightIconStyle?: StyleProp<ImageStyle>;
  isRequired?: boolean;
  inputView?: object;
  showRightCustomComp?: any;
  countryCode?: any;
  changeCountryCode?: (_i: any) => void;
  containerStyle?: object;
}

const TextInputComp: FC<TextInputProps> = ({
  value,
  onChangeText,
  textInputStyle,
  placeholder,
  onFocus = () => {},
  onBlur = () => {},
  textInputRef,
  keyBoardType,
  onSubmitEditing,
  editable = true,
  textAlign = 'left',
  textInputImg = '',
  showRightComp = false,
  isMobileInput = false,
  errorText = '',
  inputStyle = {},
  multiline = false,
  rightIcon = null,
  inputView,
  showRightCustomComp,
  countryCode,
  changeCountryCode = () => {},
  containerStyle,
}) => {
  const [isSecured, setIsSecured] = useState(showRightComp);
  const [isFocused, setIsFocused] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    ApplyEaseOutAnimation();
  }, [errorText, isFocused]);

  const onBlurChild = () => {
    setIsFocused(false);
    onBlur();
  };

  const onFocusChild = () => {
    setIsFocused(true);
    onFocus();
  };

  return (
    <>
      <View style={{marginBottom: moderateScale(32), ...containerStyle}}>
        <View style={{...styles.inputView, ...inputView}}>
          <View
            style={{
              ...styles.inputStyle,
              borderColor: errorText
                ? colors.red
                : isFocused
                ? colors.theme
                : colors.catskillWhite,
              ...inputStyle,
            }}>
            {textInputImg && (
              <Image
                source={textInputImg}
                style={styles.textInputImage}
                resizeMode="contain"
              />
            )}
            {isMobileInput && (
              <TouchableOpacity
                style={{...styles.mobileViewStyle}}
                activeOpacity={1}
                disabled={!editable}
                onPress={() => setShow(true)}>
                <Text style={{...commonStyles.font_14_regular}}>
                  {countryCode?.dial_code}
                </Text>
              </TouchableOpacity>
            )}
            <TextInput
              ref={textInputRef}
              keyboardType={isMobileInput ? 'number-pad' : keyBoardType}
              placeholder={placeholder}
              placeholderTextColor={colors.placeholderTextColor}
              selectionColor={colors.theme}
              value={value}
              onChangeText={onChangeText}
              style={{
                ...styles.textInputStyle,
                ...textInputStyle,
              }}
              onFocus={onFocusChild}
              onBlur={onBlurChild}
              onSubmitEditing={onSubmitEditing}
              editable={editable}
              textAlign={textAlign}
              autoCapitalize="none"
              secureTextEntry={isSecured}
              multiline={multiline}
            />
            {showRightCustomComp && showRightCustomComp()}
            {showRightComp && (
              <TouchableOpacity
                // style={{paddingRight: moderateScale(16)}}
                activeOpacity={1}
                onPress={() => setIsSecured(!isSecured)}>
                <Image
                  source={isSecured ? imagePath.eye : imagePath.closedEye}
                  style={{
                    ...styles.showText,
                    tintColor: isFocused
                      ? colors.theme
                      : colors.placeholderTextColor,
                  }}
                />
              </TouchableOpacity>
            )}
            {rightIcon && rightIcon}
          </View>
        </View>
        {errorText && (
          <View>
            <Text style={styles.errorText} numberOfLines={2}>
              {errorText}
            </Text>
          </View>
        )}
      </View>
      {show && (
        <CountryPicker
          show={show}
          pickerButtonOnPress={item => {
            changeCountryCode(item);
            setShow(false);
          }}
          lang={'en'}
          onBackdropPress={() => setShow(false)}
          style={{
            modal: {
              height: height / 2,
              backgroundColor: colors.codGray,
            },
            backdrop: {
              backgroundColor: colors.whiteOpacity20,
            },
            line: {height: 0},
            itemsList: {},
            textInput: {
              ...styles.inputStyle,
              height: moderateScale(50),
              borderColor: colors.whiteOpacity40,
            },
            countryButtonStyles: {
              backgroundColor: colors.whiteOpacity5,
            },
            searchMessageText: {...commonStyles.font_12_regular},
            countryMessageContainer: {},
            flag: {},
            dialCode: {...commonStyles.font_14_regular},
            countryName: {...commonStyles.font_14_regular},
          }}
        />
      )}
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
      Platform.OS === 'ios' ? moderateScale(16) : moderateScale(0),
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.white,
    paddingHorizontal: moderateScale(24),
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

export default React.memo(TextInputComp);
