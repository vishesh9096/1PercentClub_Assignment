import {
  ConnectWallet,
  embeddedWallet,
  localWallet,
  metamaskWallet,
  rainbowWallet,
  ThirdwebProvider,
  trustWallet,
  walletConnect,
} from '@thirdweb-dev/react-native';
import {TW_CLIENT_ID} from '@env';
import React, {FC, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {moderateScale} from './src/styles/responsiveSize';
import FlashMessage from 'react-native-flash-message';

import {getUserData} from './src/utils/utils';
import store from './src/redux/store';

import commonStyles from './src/styles/commonStyles';
import Routes from './src/Navigation/Routes';
import ErrorBoundary from 'react-native-error-boundary';
import {checkNotifications} from 'react-native-permissions';
import {saveUserDataToStore} from './src/redux/actions/auth';
import colors from './src/styles/colors';
import {requestUserPermission} from './src/utils/notificationServices';
import SplashScreen from 'react-native-splash-screen';

const App: FC = () => {
  useEffect(() => {
    initializeApp();
  }, []);

  //Check is user is already logged in or not
  const initializeApp = async () => {
    await checkUserData();
    configureNotifications();
    checkNotifications();
    hideSplashScreen();
  };

  const configureNotifications = () => {
    requestUserPermission();
  };

  // useEffect(() => {
  //   notifee.setBadgeCount(0).then(() => console.log('Badge count removed!'));
  // }, []);

  const hideSplashScreen = async () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  };

  const checkUserData = async () => {
    try {
      const userData = await getUserData();
      if (userData) {
        saveUserDataToStore(userData);
      }
    } catch (error) {
      console.error(error, 'error');
    }
  };

  const CustomFallback = (props: {error: Error; resetError: Function}) => (
    <View style={styles.errorContainer}>
      <Text style={styles.errorTextStyle}>Oops! Something went wrong</Text>
      <Text style={styles.errorSubTextStyle}>{props.error.toString()}</Text>
    </View>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <ThirdwebProvider
        activeChain="mumbai"
        clientId={TW_CLIENT_ID}
        supportedWallets={[
          metamaskWallet({
            recommended: true,
          }),
          rainbowWallet(),
          walletConnect({
            recommended: true,
          }),
          embeddedWallet({
            auth: {
              // you need to enable EmbeddedWallets under your API Key in your thirdweb dashboard:
              // https://thirdweb.com/dashboard/settings/api-keys
              options: ['email', 'google'],
              // you need to add this deeplink in your allowed `Redirect URIs` under your API Key in your thirdweb dashboard:
              // https://thirdweb.com/dashboard/settings/api-keys
              redirectUrl: 'rnstarter://',
            },
          }),
          trustWallet(),
          localWallet(),
        ]}>
        <Provider store={store}>
          <ErrorBoundary FallbackComponent={CustomFallback}>
            <Routes />
          </ErrorBoundary>
          <FlashMessage position="top" />
        </Provider>
      </ThirdwebProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(16),
    justifyContent: 'center',
  },
  errorTextStyle: {
    ...commonStyles.font_20_bold,
    textAlign: 'center',
    marginBottom: moderateScale(12),
    color: colors.red,
  },
  errorSubTextStyle: {...commonStyles.font_14_regular, textAlign: 'center'},
});

export default App;
