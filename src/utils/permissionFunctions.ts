import {Platform} from 'react-native';
import {
  PERMISSIONS,
  request,
  check,
  PermissionStatus,
} from 'react-native-permissions';

export const requestCameraPermission = async () => {
  try {
    let permission: any;
    if (Platform.OS === 'android') {
      permission = PERMISSIONS.ANDROID.CAMERA;
    } else if (Platform.OS === 'ios') {
      permission = PERMISSIONS.IOS.CAMERA;
    } else {
      throw new Error('Unsupported platform');
    }

    const cameraPermissionStatus: PermissionStatus = await check(permission);

    if (cameraPermissionStatus === 'granted') {
      console.log('Camera permission already granted');
    } else {
      const granted = await request(permission);
      if (granted === 'granted') {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    }
  } catch (error) {
    console.warn(error);
  }
};
