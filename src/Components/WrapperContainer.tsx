import React, {FC, ReactNode} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, Text} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {height, moderateScale, width} from '../styles/responsiveSize';
import {MaterialIndicator} from 'react-native-indicators';

interface WrapperComponentProps {
  children?: ReactNode;
  isSafeAreaAvailable?: boolean;
  paddingAvailable?: boolean;
  mainViewStyle?: object;
  isLoading?: boolean;
  statusBarColor?: string;
}

const WrapperContainer: FC<WrapperComponentProps> = ({
  children,
  isSafeAreaAvailable = true,
  paddingAvailable = true,
  mainViewStyle,
  isLoading = false,
  statusBarColor = colors.black,
}) => {
  const styles = externalStyles({paddingAvailable});

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: statusBarColor,
        ...mainViewStyle,
      }}>
      <StatusBar
        animated={true}
        backgroundColor={statusBarColor}
        barStyle={'light-content'}
        showHideTransition={'none'}
        hidden={false}
      />
      {isSafeAreaAvailable ? <SafeAreaView /> : <></>}
      {children}
      {isLoading && (
        <View style={styles.loaderContainer}>
          <View style={styles.lottieStyle}>
            <View style={styles.loaderView}>
              <MaterialIndicator
                color={colors.theme}
                size={moderateScale(52)}
              />
            </View>
            <Text
              style={{
                ...commonStyles.font_14_medium,
                marginTop: moderateScale(20),
                color: colors.white,
              }}>
              Loading...
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const externalStyles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black,
      paddingHorizontal: props?.paddingAvailable ? moderateScale(16) : 0,
      zIndex: -2,
    },
    loaderContainer: {
      backgroundColor: colors.blackOpacity80,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      height: height,
      width: width,
      zIndex: 200,
    },
    lottieStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: moderateScale(20),
      paddingVertical: moderateScale(24),
      paddingHorizontal: moderateScale(40),
    },
    loaderView: {
      height: moderateScale(52),
      width: moderateScale(52),
      marginBottom: moderateScale(20),
    },
  });

export default React.memo(WrapperContainer);
