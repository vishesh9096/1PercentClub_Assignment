
import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet,
  Text, NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
  ActivityIndicator, Image
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import CompanyCard from '../../Components/CompanyCard';
import { FlatList } from 'react-native-gesture-handler';
import actions from '../../redux/actions';
import { showError } from '../../utils/helperFunctions';
import { useDispatch, useSelector } from 'react-redux';
import imagePath from '../../constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';
import commonStyles from '../../styles/commonStyles';
const HomeScreen = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [stocks, setstocks] = useState({});

  const disptach = useDispatch();
  const homeReducer = useSelector(state => state);

  const fetchstocks = () => {
    actions
      .getstocksapi({})
      .then((res: any) => {
        actions.saveStocksDataToStore(res.data.trends);
      })
      .catch(err => {
        showError(err?.message);
      });
  };

  useEffect(() => {

    fetchstocks()

  }, [])

  const [page, setpage] = useState(1);
  const navigation = useNavigation()
  const handleScrollBeginDrag = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY == 0){ setSearchVisible(true);
      navigation.navigate(navigationStrings.SEARCH_STOCKS)

    }
  };

  const data = [
    imagePath.i1,imagePath.i2,imagePath.i3,imagePath.i4
  ]





  
  return (
    <WrapperContainer statusBarColor={colors.codGray}>
      <View style={{marginTop:moderateScaleVertical(10)}}>
      <Text style={styles.title}>Product & Tools</Text>
        <FlatList
        data={data}
        horizontal={true}
        renderItem={({item})=>{

          return(
            <TouchableOpacity>
            <Image source={item} style={{height:moderateScale(85), width:moderateScale(82), resizeMode:'contain'}}/>
            </TouchableOpacity>
          )
        }}
        />


       
        {
          Object.keys(homeReducer?.home?.stocksdata).length === 0 && homeReducer?.home?.stocksdata.constructor === Object
        
        ? (<ActivityIndicator style={styles.loaderStyle} size="large" color={colors.theme}/>):(
          <FlatList


            pagingEnabled={true}
            onScrollEndDrag={handleScrollBeginDrag}
            style={{height: moderateScale(500), }}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={true}

            data={homeReducer?.home?.stocksdata}
            renderItem={({item}) => 
            <CompanyCard
            cost={item.price}
            name={item.name}
            title={item.symbol}
            change={item.change}

            />}
          />
        )}


       
      </View>
    </WrapperContainer>
  );
};
export default React.memo(HomeScreen);

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.gray,
    height: 40,
    borderRadius: 5,
    margin: 10,
},
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
},
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.gray1,
  },
  loaderStyle:{flex:1,
     position:"absolute",
      top:moderateScaleVertical(300),
      left:moderateScale(150)
    },
    title:{ ...commonStyles.font_20_bold,marginVertical:moderateScaleVertical(5), marginLeft:moderateScale(5)}
});
