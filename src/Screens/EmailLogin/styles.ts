import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(14),
  },
  logo: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(42),
    color: colors.theme,
    textAlign: 'center',
    marginTop: moderateScale(20),
  },
  title: {
    ...commonStyles.font_20_bold,
    textAlign: 'center',
    marginTop: moderateScale(40),
  },
  inputView: {
    marginTop: moderateScale(80),
    marginBottom: moderateScale(14),
  },
  loginView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: moderateScale(200),
  },
  forgotPasswordText: {
    ...commonStyles.font_16_medium,
    fontSize: textScale(15),
    textAlign: 'right',
    marginBottom: moderateScale(20),
  },
  loginText: {
    ...commonStyles.font_16_regular,
    textAlign: 'center',
    marginBottom: moderateScale(60),
  },
  createAccountText: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});

export default styles;
