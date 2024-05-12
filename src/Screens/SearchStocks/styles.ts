import {StyleSheet} from 'react-native';
import { moderateScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
const styles = StyleSheet.create({
  container: {
    marginTop:moderateScale(18),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start"
  },
  icon:{height:moderateScale(14), width:moderateScale(18), tintColor:colors.gray},
  input:{
    ...commonStyles.font_18_regular,
    height:moderateScale(40), width:"85%",
    color:colors.gray, paddingLeft:moderateScale(20), 
  },
  divider:{width:"100%", borderWidth:0.5, borderColor:colors.gray1, borderRadius:12, marginTop:moderateScale(5), justifyContent:"center", alignSelf:"center"}

  
});

export default styles;
