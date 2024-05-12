import React, { useState } from 'react';
import { Button, FlatList, Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
// Import your stack param list type
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import { moderateScale } from '../../styles/responsiveSize';
import commonStyles, {hitSlopProp} from '../../styles/commonStyles';
import { BarChart, LineChart } from "react-native-gifted-charts";
import ButtonComp from '../../Components/ButtonComp';
import actions from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import navigationStrings from '../../constants/navigationStrings';

interface ScreenBProps {
  route: any;

}

const CompanyDetails: React.FC<ScreenBProps> = ({ route }) => {
    const navigation = useNavigation()
  const receivedData = route.params?.name;

  const data =[
    {
      "Date": "2023-05-08",
      "value": 62.500000,
      "High": 63.650002,
      "Low": 61.599998,
      "Close": 62.599998,
      "Adj Close": 62.599998,
      "Volume": 73164520
    },
    {
      "Date": "2023-05-15",
      "value": 62.099998,
      "High": 65.000000,
      "Low": 61.950001,
      "Close": 64.500000,
      "Adj Close": 64.500000,
      "Volume": 290563946
    },
    {
      "Date": "2023-05-22",
      "value": 64.699997,
      "High": 68.250000,
      "Low": 61.799999,
      "Close": 67.250000,
      "Adj Close": 67.250000,
      "Volume": 484468604
    },
   
    {
      "Date": "2023-08-21",
      "value": 90.500000,
      "High": 95.750000,
      "Low": 88.300003,
      "Close": 91.000000,
      "Adj Close": 91.000000,
      "Volume": 318606660
    },
    {
      "Date": "2023-08-28",
      "value": 96.000000,
      "High": 100.800003,
      "Low": 91.750000,
      "Close": 97.199997,
      "Adj Close": 97.199997,
      "Volume": 638564039
    },
    {
      "Date": "2023-09-04",
      "value": 97.500000,
      "High": 101.599998,
      "Low": 97.050003,
      "Close": 99.599998,
      "Adj Close": 99.599998,
      "Volume": 291616670
    },
    {
      "Date": "2023-09-11",
      "value": 100.000000,
      "High": 104.449997,
      "Low": 96.500000,
      "Close": 102.949997,
      "Adj Close": 102.949997,
      "Volume": 440502812
    },
    {
      "Date": "2023-09-18",
      "value": 103.599998,
      "High": 105.000000,
      "Low": 98.250000,
      "Close": 99.900002,
      "Adj Close": 99.900002,
      "Volume": 253676486
    },
    {
      "Date": "2023-09-25",
      "value": 100.300003,
      "High": 102.750000,
      "Low": 97.750000,
      "Close": 101.500000,
      "Adj Close": 101.500000,
      "Volume": 181537953
    },
    {
      "Date": "2023-10-02",
      "value": 101.500000,
      "High": 107.699997,
      "Low": 100.000000,
      "Close": 104.449997,
      "Adj Close": 104.449997,
      "Volume": 356849901
    },
    {
      "Date": "2023-10-09",
      "value": 103.800003,
      "High": 113.250000,
      "Low": 101.000000,
      "Close": 111.000000,
      "Adj Close": 111.000000,
      "Volume": 388859726
    },
    {
      "Date": "2023-10-16",
      "value": 111.900002,
      "High": 115.099998,
      "Low": 109.500000,
      "Close": 113.349998,
      "Adj Close": 113.349998,
      "Volume": 311305669
    },
    {
      "Date": "2023-10-23",
      "value": 113.800003,
      "High": 113.900002,
      "Low": 101.250000,
      "Close": 105.650002,
      "Adj Close": 105.650002,
      "Volume": 282973724
    },
    {
      "Date": "2023-10-30",
      "value": 106.199997,
      "High": 119.900002,
      "Low": 103.250000,
      "Close": 116.500000,
      "Adj Close": 116.500000,
      "Volume": 431495630
    },
    {
      "Date": "2023-11-06",
      "value": 119.599998,
      "High": 126.349998,
      "Low": 118.250000,
      "Close": 121.300003,
      "Adj Close": 121.300003,
      "Volume": 475912594
    },
    {
      "Date": "2023-11-13",
      "value": 122.650002,
      "High": 125.199997,
      "Low": 119.750000,
      "Close": 122.199997,
      "Adj Close": 122.199997,
      "Volume": 169214257
    },
    {
      "Date": "2023-11-20",
      "value": 122.849998,
      "High": 123.400002,
      "Low": 112.500000,
      "Close": 113.250000,
      "Adj Close": 113.250000,
      "Volume": 257087072
    },
    {
      "Date": "2023-11-27",
      "value": 113.250000,
      "High": 120.699997,
      "Low": 113.250000,
      "Close": 116.300003,
      "Adj Close": 116.300003,
      "Volume": 459707026
    },
    {
      "Date": "2023-12-04",
      "value": 118.750000,
      "High": 123.900002,
      "Low": 116.250000,
      "Close": 119.949997,
      "Adj Close": 119.949997,
      "Volume": 268408996
    },
    {
      "Date": "2023-12-11",
      "value": 119.949997,
      "High": 125.000000,
      "Low": 114.150002,
      "Close": 123.599998,
      "Adj Close": 123.599998,
      "Volume": 234986419
    },
    {
      "Date": "2023-12-18",
      "value": 123.400002,
      "High": 131.750000,
      "Low": 120.199997,
      "Close": 128.500000,
      "Adj Close": 128.500000,
      "Volume": 318116449
    },
    {
      "Date": "2023-12-25",
      "value": 128.500000,
      "High": 128.699997,
      "Low": 120.599998,
      "Close": 123.699997,
      "Adj Close": 123.699997,
      "Volume": 147635425
    },
    {
      "Date": "2024-01-01",
      "value": 124.449997,
      "High": 134.350006,
      "Low": 122.849998,
      "Close": 133.300003,
      "Adj Close": 133.300003,
      "Volume": 233620363
    },
    {
      "Date": "2024-01-08",
      "value": 133.649994,
      "High": 141.500000,
      "Low": 130.000000,
      "Close": 139.550003,
      "Adj Close": 139.550003,
      "Volume": 189951259
    },
    {
      "Date": "2024-01-15",
      "value": 139.550003,
      "High": 139.550003,
      "Low": 121.599998,
      "Close": 135.050003,
      "Adj Close": 135.050003,
      "Volume": 316925803
    },
    {
      "Date": "2024-01-22",
      "value": 135.050003,
      "High": 138.199997,
      "Low": 127.000000,
      "Close": 136.149994,
      "Adj Close": 136.149994,
      "Volume": 187815934
    },
    {
      "Date": "2024-01-29",
      "value": 136.899994,
      "High": 145.000000,
      "Low": 132.350006,
      "Close": 143.800003,
      "Adj Close": 143.800003,
      "Volume": 352234967
    },
    {
      "Date": "2024-02-05",
      "value": 145.000000,
      "High": 151.399994,
      "Low": 138.050003,
      "Close": 149.449997,
      "Adj Close": 149.449997,
      "Volume": 618814542
    },
    {
      "Date": "2024-02-12",
      "value": 151.000000,
      "High": 160.000000,
      "Low": 149.000000,
      "Close": 156.699997,
      "Adj Close": 156.699997,
      "Volume": 412581787
    },
    {
      "Date": "2024-02-19",
      "value": 157.449997,
      "High": 167.800003,
      "Low": 155.600006,
      "Close": 164.050003,
      "Adj Close": 164.050003,
      "Volume": 341531380
    },
    {
      "Date": "2024-02-26",
      "value": 165.199997,
      "High": 173.500000,
      "Low": 155.350006,
      "Close": 166.500000,
      "Adj Close": 166.500000,
      "Volume": 323610944
    },
    {
      "Date": "2024-03-04",
      "value": 168.000000,
      "High": 175.600006,
      "Low": 157.500000,
      "Close": 160.000000,
      "Adj Close": 160.000000,
      "Volume": 224372076
    },
    {
      "Date": "2024-03-11",
      "value": 161.000000,
      "High": 163.199997,
      "Low": 144.300003,
      "Close": 160.050003,
      "Adj Close": 160.050003,
      "Volume": 276675244
    },
    {
      "Date": "2024-03-18",
      "value": 162.500000,
      "High": 174.899994,
      "Low": 156.500000,
      "Close": 174.199997,
      "Adj Close": 174.199997,
      "Volume": 189778958
    },
    {
      "Date": "2024-03-25",
      "value": 174.199997,
      "High": 189.000000,
      "Low": 172.199997,
      "Close": 182.100006,
      "Adj Close": 182.100006,
      "Volume": 157686507
    },
    {
      "Date": "2024-04-01",
      "value": 183.899994,
      "High": 191.800003,
      "Low": 177.850006,
      "Close": 190.500000,
      "Adj Close": 190.500000,
      "Volume": 169411516
    },
    {
      "Date": "2024-04-08",
      "value": 191.600006,
      "High": 199.699997,
      "Low": 188.750000,
      "Close": 192.100006,
      "Adj Close": 192.100006,
      "Volume": 145602997
    },
    {
      "Date": "2024-04-15",
      "value": 188.000000,
      "High": 192.399994,
      "Low": 181.399994,
      "Close": 189.199997,
      "Adj Close": 189.199997,
      "Volume": 161188612
    },
    {
      "Date": "2024-04-22",
      "value": 193.000000,
      "High": 197.699997,
      "Low": 182.500000,
      "Close": 188.100006,
      "Adj Close": 188.100006,
      "Volume": 169773004
    },
    {
      "Date": "2024-04-29",
      "value": 189.399994,
      "High": 200.350006,
      "Low": 186.449997,
      "Close": 197.250000,
      "Adj Close": 197.250000,
      "Volume": 138072217
    },
    {
      "Date": "2024-05-06",
      "value": 199.000000,
      "High": 205.000000,
      "Low": 182.350006,
      "Close": 201.300003,
      "Adj Close": 201.300003,
      "Volume": 222489580
    },
    {
      "Date": "2024-05-10",
      "value": 196.350006,
      "High": 205.000000,
      "Low": 189.899994,
      "Close": 201.300003,
      "Adj Close": 201.300003,
      "Volume": 52708059
    }
  ]
  const options = ["Description", "Historical Metrics"];
  const { width } = useWindowDimensions();
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const disptach = useDispatch()
  const homeReducer = useSelector(state => state);

  console.log('homereducer', homeReducer);
  const[loader,setloader] = useState(false)

  const handlepress = ()=>{
    setloader(true)
    const  data = {
        "name":route.params.name,
        "title":route.params.title,
        "description":route.params.description,
        "cost":route.params.cost,
        "change":route.params.change
    }

    actions.saveOrderDataToStore(data)

    navigation.navigate(navigationStrings.OPEN_ORDERS)




  }
  return (
    <WrapperContainer statusBarColor={colors.codGray}>

  
  
      <Image
            source={{
              uri: 'https://media.designrush.com/inspirations/540509/conversions/apple-logo-design-preview.jpg'}} style={styles.imgStyle}/>
          <Text style={[styles.title]}>{route.params.title}</Text>
          <Text style={styles.subtitle}>{route.params.name}</Text>
          <Text style={styles.cost}>${route.params.cost}</Text>
          <View style={{ paddingTop: 20 }}>
                <LineChart
                  areaChart
                  data={data}
                  rotateLabel
                  labelsExtraHeight={20}
                  hideDataPoints
                  animationDuration={2000}
                  spacing={7}
                  color={ colors.green}
                  thickness={2}
                  startFillColor={  colors.green}
                  endFillColor={colors.green}
                  startOpacity={0.1}
                  endOpacity={0.2}
                  initialSpacing={0}
                isAnimated={true}
                overflowBottom={1300}
                  hideYAxisText={false}
                  yAxisTextStyle={{color:colors.gray1}}
                  rulesType="dotted"
                  rulesColor="black"
                  xAxisColor={colors.gray1}
                  yAxisColor={colors.gray1}
                  pointerConfig={{
                    pointerStripHeight: 140,
                    pointerStripColor: "lightgray",
                    pointerStripWidth: 2,
                    pointerColor: "lightgray",
                    radius: 6,
                    activatePointersDelay:0,
                    pointerLabelWidth: 100,
                    pointerLabelHeight: 90,
                    activatePointersOnLongPress: false,
                    autoAdjustPointerLabelPosition: false,
                    

                    pointerLabelComponent: (items: any) => {
                      return (
                        <View
                          style={{
                            height: 90,
                            width: 100,
                            justifyContent: "center",
                            marginTop: -30,
                            marginLeft: -40,
                            borderRadius: 5,
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              fontSize: 14,
                              marginBottom: 6,
                              textAlign: "center",
                            }}
                          >
                            {items[0].date}
                          </Text>

                          <View
                            style={{
                              paddingHorizontal: 14,
                              paddingVertical: 6,
                              borderRadius: 16,
                              backgroundColor: "white",
                            }}
                          >
                            <Text
                              style={{
                                fontWeight: "bold",
                                textAlign: "center",
                                color: "black",
                              }}
                            >
                              {"$" + items[0].value.toFixed(2)}
                            </Text>
                          </View>
                        </View>
                      );
                    },
                  }}
                />
              </View>
              <View>
          <Text style={{color: colors.gray1}}>

            Lorem ipsum dolor sit amet. Vel quia dolorum qui quidem quam vel
            nisi quaerat id fugit architecto aut temporibus odio. Vel veritatis
            neque ea voluptas nihil in quam obcaecati aut voluptatem molestias
            qui blanditiis repellat ex eveniet tempore.
          </Text>
        </View>
         <View style={{marginTop:moderateScale(90)}}>
        <ButtonComp
          btnText="Add to Order"
          onPressBtn={handlepress}
          loading={loader}
          disabled={false}
        />

</View>         


             
            
      
    </WrapperContainer>
  );
};



export default CompanyDetails