import {LayoutAnimation, UIManager} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import {textScale} from '../styles/responsiveSize';
import PhoneNumber from 'libphonenumber-js';

export function ApplyEaseOutAnimation() {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
}

export function InitAnimation() {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const validatePhoneNumber = (phoneNumber: string, countryCode: any) => {
  try {
    const number: any = PhoneNumber(phoneNumber, countryCode);
    if (number.isValid()) {
      return true; // Phone number is valid.
    } else {
      return false; // Phone number is not valid.
    }
  } catch (e) {
    // Handle parsing errors, such as an invalid phone number.
    return false;
  }
};

export const formatDateToISO = (date: any) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
};

const showError = (message: string): void => {
  showMessage({
    type: 'danger',
    icon: 'none',
    message,
    style: {backgroundColor: colors.danger},
    titleStyle: {
      color: colors.white,
      fontFamily: fontFamily.medium,
      fontSize: textScale(16),
    },
    textStyle: {color: colors.white},
  });
};

const showSuccess = (message: string): void => {
  showMessage({
    type: 'success',
    icon: 'none',
    message,
    style: {backgroundColor: colors.theme},
    titleStyle: {
      color: colors.black,
      fontFamily: fontFamily.medium,
      fontSize: textScale(16),
    },
    textStyle: {color: colors.black},
  });
};

const showInfo = (message: string) => {
  showMessage({
    type: 'info',
    icon: 'info',
    message,
  });
};

export {showError, showSuccess, showInfo};
