import AsyncStorage from '@react-native-async-storage/async-storage';
// import messaging from '@react-native-firebase/messaging';
// import notifee, {AndroidImportance} from '@notifee/react-native';
import {PermissionsAndroid, Platform} from 'react-native';

export async function requestUserPermission() {
  if (Platform.OS === 'android') {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }
 
}

// const getFcmToken = async () => {
//   await AsyncStorage.getItem('fcmToken');
//   const fcmTokenAsync = await AsyncStorage.getItem('fcmToken');
//   console.log(fcmTokenAsync, 'the old token');
//   if (!fcmTokenAsync) {
//     try {
//       const fcmToken = await messaging().getToken();
//       if (fcmToken) {
//         console.log(fcmToken, 'the new genrated token');
//         await AsyncStorage.setItem('fcmToken', fcmToken);
//       }
//     } catch (error) {
//       console.log(error, 'error in fcmToken');
//     }
//   }
// };

// export async function notificationListener() {
//   const unsubscribe = messaging().onMessage(async (remoteMessage: any) => {
//     console.log('A new FCM message arrived!', remoteMessage);
//     onDisplayNotification(remoteMessage);
//   });

//   messaging().onNotificationOpenedApp((remoteMessage: any) => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage,
//     );
//     _onNotificationOpen(remoteMessage);
//   });

//   // Check whether an initial notification is available
//   messaging()
//     .getInitialNotification()
//     .then((remoteMessage: any) => {
//       if (remoteMessage) {
//         console.log(
//           'Notification caused app to open from quit state:',
//           remoteMessage.notification,
//         );
//       }
//     });

//   return unsubscribe;
// }

// async function onDisplayNotification(data: any) {
//   // Request permissions (required for iOS)
//   console.log(data, 'FCM onDisplayNotification datadatadatadata');

//   if (Platform.OS === 'ios') {
//     await notifee.requestPermission();
//   }

//   // Create a channel (required for Android)
//   const channelId = await notifee.createChannel({
//     id: 'default',
//     name: 'name',
//     importance: AndroidImportance.HIGH,
//     sound: 'default',
//     vibration: true,
//   });

//   // Display a notification
//   await notifee.displayNotification({
//     title: data?.notification?.title,
//     body: data?.notification?.body,
//     data: data?.data,
//     android: {
//       channelId,
//       // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
//       // pressAction is needed if you want the notification to open the app when pressed
//       pressAction: {
//         id: 'default',
//       },
//     },
//   });
// }

const _onNotificationOpen = (notification: any) => {
  console.log(notification, '_onNotificationOpen');
};
