import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {moderateScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  title: {
    ...commonStyles.font_24_medium,
    marginBottom: moderateScale(20),
    textAlign: 'center',
  },
  headtext: {
    ...commonStyles.font_24_medium,
    color: colors.primary,
  },
  text: {
    ...commonStyles.font_16_regular,
    textAlign: 'center',
    color: colors.white,
    marginVertical: moderateScale(34),
    paddingHorizontal: moderateScale(50),
    lineHeight: moderateScale(24),
  },
  container: {
    flex: 1,
  },
  slideIndicatorContainer: {
    paddingHorizontal: moderateScale(34),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slideIndicator: {
    height: moderateScale(4),
    width: '32%',
    borderRadius: moderateScale(4),
  },
  contentContainer: {
    paddingBottom: moderateScale(72),
    paddingTop: moderateScale(18),
  },
  circleImage: {
    position: 'absolute',
    top: moderateScale(30),
    // You may need to adjust the positioning for different slides
  },
  buttonContainer: {
    paddingHorizontal: moderateScale(38),
  },
});

export default styles;
