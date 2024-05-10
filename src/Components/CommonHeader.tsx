import React from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet, Image} from 'react-native';
import {moderateScale, width} from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';


type HeaderCompType = {
  headerText: string;
  backBtnAvailable?: boolean;
  headerTextStyle?: object;
  headerStyle?: object;
  moveToTop?: boolean;
  rightComp?: any;
  currentStep?: number;
  totalSteps?: number;
  showUnderline?: boolean;
  underlineStyle?: object;
  onPressBack?: any;
  leftComp?: any;
};

const HeaderComp = ({
  headerText = '',
  backBtnAvailable = true,
  headerStyle = {},
  headerTextStyle = {},
  moveToTop = false,
  rightComp = () => {},
  currentStep = 1,
  totalSteps = 0,
  showUnderline = false,
  underlineStyle = {},
  onPressBack = null,
  leftComp = () => {},
}: HeaderCompType) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const progressBar = new Array(totalSteps).fill('');

  return (
    <>
      <View
        style={[
          styles.headerStyle,
          moveToTop && {
            paddingTop:
              insets.top +
              moderateScale(
                backBtnAvailable ? (Platform.OS === 'ios' ? 2 : 12) : 12,
              ),
            marginTop: -insets.top,
          },
          headerStyle,
        ]}>
        {backBtnAvailable && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={{marginRight: moderateScale(10)}}
            onPress={onPressBack ? onPressBack : () => navigation.goBack()}>
            <View style={styles.iconContainer}>
              <Image
                source={imagePath.backIcon}
                resizeMode="contain"
                style={styles.imgContainer}
              />
            </View>
          </TouchableOpacity>
        )}
        {leftComp()}
        <View style={[styles.headerTextStyle, headerTextStyle]}>
          {headerText && (
            <Text style={commonStyles.font_18_medium}>{headerText}</Text>
          )}
        </View>
        {rightComp()}
      </View>
      <View style={styles.progressBarContainer}>
        {progressBar.map((val, ind) => (
          <View
            key={ind}
            style={[
              styles.progressBar,
              {
                backgroundColor:
                  ind < currentStep ? colors.theme : colors.blackOpacity10,
                width: (width - moderateScale(60)) / progressBar.length,
              },
            ]}
          />
        ))}
      </View>
      {showUnderline && (
        <View style={[styles.underlineStyle, underlineStyle]} />
      )}
    </>
  );
};

export default React.memo(HeaderComp);

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    paddingBottom: moderateScale(14),
    paddingTop: Platform.OS === 'ios' ? moderateScale(4) : moderateScale(16),
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  headerTextStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
  imgContainer: {
    height: '100%',
    width: '100%',
  },
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressBar: {
    height: moderateScale(3),
    borderRadius: moderateScale(4),
  },
  underlineStyle: {
    height: 1,
    backgroundColor: colors.alto20,
    width: width,
    marginLeft: -moderateScale(16),
  },
});
