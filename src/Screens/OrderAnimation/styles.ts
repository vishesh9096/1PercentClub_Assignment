import { StyleSheet } from "react-native";
import { moderateScale } from "../../styles/responsiveSize";
import commonStyles, {hitSlopProp} from '../../styles/commonStyles';
const styles = StyleSheet.create({
    title: {
        marginLeft:moderateScale(10),
        marginTop:moderateScale(10),
        ...commonStyles.font_28_bold,
      },

})

export default styles