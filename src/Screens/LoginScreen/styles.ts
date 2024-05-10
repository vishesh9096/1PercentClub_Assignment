import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {flexDirection: 'row'},
  logo: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(42),
    color: colors.theme,
    textAlign: 'center',
  },
  description: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(22),
    color: colors.white,
    textAlign: 'center',
    lineHeight: moderateScale(30),
    marginTop: moderateScale(18),
  },
  buttonContainer: {
    paddingHorizontal: moderateScale(30),
    flex: 0.6,
    paddingVertical: moderateScale(60),
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.5,
  },
  image1: {
    // flex: 0.5,
  },
  image2: {
    marginTop: moderateScale(10),
    marginLeft: moderateScale(44),
  },
  image3: {
    // flex: 0.5,
    top: moderateScale(26),
  },
  image4: {
    alignSelf: 'flex-end',
    right: 0,
    position: 'absolute',
    bottom: -moderateScale(60),
  },
  contentContainer: {
    flex: 1,
    paddingVertical: moderateScale(50),
  },
  circleImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  orTextStyle: {...commonStyles.font_16_regular, textAlign: 'center'},
});

export default styles;
