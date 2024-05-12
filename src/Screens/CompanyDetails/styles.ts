import { StyleSheet } from "react-native";
import { moderateScale } from "../../styles/responsiveSize";
import colors from "../../styles/colors";
import commonStyles, {hitSlopProp} from '../../styles/commonStyles';

const styles = StyleSheet.create({
    container: {
        height: moderateScale(100),
    
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: moderateScale(15),
        justifyContent: 'flex-start',
      },
      imgStyle: {
        marginTop:moderateScale(20),
        height: moderateScale(45),
        width: moderateScale(45),
        resizeMode: 'cover',
        borderRadius:4,
        marginLeft:moderateScale(10),

      },
      scene: {
        flex: 1,
      },
      title: {
        marginLeft:moderateScale(10),
        marginTop:moderateScale(10),
        ...commonStyles.font_20_bold,
      },
      subtitle: {
        marginLeft:moderateScale(10),
        ...commonStyles.font_12_medium,
        color: colors.gray2,
      },
      innercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      grayText: {
        ...commonStyles.font_22_bold,
      },
      growimage: {
        height: moderateScale(10),
        width: moderateScale(10),
        marginLeft: moderateScale(10),
        resizeMode: 'contain',
      },
      greenText: {
        color: colors.green,
        marginLeft: moderateScale(5),
      },
      divider: {
        height: moderateScale(1),
        backgroundColor: colors.gray1,
        borderRadius: 4,
        marginTop: moderateScale(6),
      },
      cost:{...commonStyles.font_26_bold, marginLeft:moderateScale(10), marginTop:moderateScale(5)}

})

export default styles