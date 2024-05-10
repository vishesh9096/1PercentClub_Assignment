import {View, Text, Image} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen = ({navigation}: LoginScreenProps) => {
  return (
    <WrapperContainer isSafeAreaAvailable={false} paddingAvailable={false}>
      <View style={styles.imageWrapper}>
        <View style={styles.imageContainer}>
          <Image source={imagePath.frame4} style={styles.image1} />
          <Image source={imagePath.frame1} style={styles.image2} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={imagePath.frame2} style={styles.image3} />
          <Image source={imagePath.frame3} style={styles.image4} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.logo}>1% Club</Text>
        <Text style={styles.description}>
          Connect and share.{'\n'}Your world with us.
        </Text>
        <View style={styles.buttonContainer}>
          <ButtonComp
            btnText={'CREATE AN ACCOUNT'}
            onPressBtn={() =>
              navigation.navigate(navigationStrings.LOGIN_TO_ACCOUNT, {
                type: 'signup',
              })
            }
          />
          <Text style={styles.orTextStyle}>OR</Text>
          <ButtonComp
            btnText={'LOG IN'}
            btnStyle={{backgroundColor: colors.white}}
            onPressBtn={() =>
              navigation.navigate(navigationStrings.LOGIN_TO_ACCOUNT, {
                type: 'login',
              })
            }
          />
        </View>
      </View>
      <Image source={imagePath.circle} style={styles.circleImage} />
    </WrapperContainer>
  );
};

export default LoginScreen;
