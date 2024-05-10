import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import ButtonComp from '../../Components/ButtonComp';
import TextInputComp from '../../Components/TextInputComp';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';
import actions from '../../redux/actions';
import {showError, showSuccess} from '../../utils/helperFunctions';
import regexExpressions from '../../utils/regexExpressions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface EmailLoginProps {
  navigation: any;
}

const EmailLogin = ({navigation}: EmailLoginProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const onLogIn = () => {
    Keyboard.dismiss();
    setIsLoading(true);
    const apiData = {
      loginType: 'email',
      email: email,
      password: password,
    };
    //Integrate Email Login Api here and then save user data to save user data to async and Store
    const userObj = {token: "ThisisBearerToken", user: {"email":email, "name":"Virat Kohli"}};
    actions.saveUserDataToStore(userObj);
    showSuccess("Logged In");
    setIsLoading(false);
    // actions
    //   .emailLoginApi(apiData)
    //   .then((res: any) => {
       // *****  Store User Data here  *****
    //   })
    //   .catch(err => {
    //     showError(err?.message);
    //     setIsLoading(false);
    //   });
  };

  const onChangeEmail = (txt: string) => {
    if (!regexExpressions.EMAIL_REGEX.test(email) && email.length > 0) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
    setEmail(txt);
  };

  return (
    <WrapperContainer statusBarColor={colors.codGray}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate(navigationStrings.LOGIN_SCREEN)}>
        <Image source={imagePath.backIcon} />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => console.log("press")}>
      <KeyboardAwareScrollView
        style={styles.container}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.logo}>1% Club</Text>
        <Text style={styles.title}>Login with Email</Text>
        <TextInputComp
          value={email}
          onChangeText={onChangeEmail}
          placeholder="Email"
          containerStyle={styles.inputView}
          errorText={emailError}
        />
        <TextInputComp
          value={password}
          onChangeText={txt => {
            setPassword(txt);
          }}
          placeholder="Password"
          inputView={{
            marginTop: moderateScale(12),
          }}
          showRightComp
        />
        <Text style={styles.forgotPasswordText}>Forgot  password?</Text>
        <ButtonComp
          btnText="LOG IN"
          onPressBtn={onLogIn}
          disabled={email && password ? false : true}
          loading={isLoading}
        />
        
      </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </WrapperContainer>
  );
};

export default EmailLogin;
