import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Image, TextInput, TouchableOpacity, View, Keyboard, FlatList } from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import { moderateScale } from '../../styles/responsiveSize';
import styles from './styles';
import CompanyCard from '../../Components/CompanyCard';

const SearchStocks = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const inputRef = useRef<TextInput>();
  const debounceTimer = useRef(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);  // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  const[data,setdata] = useState([])


  const fetchdata =async()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
        }
    };
    const res = await fetch(`https://real-time-finance-data.p.rapidapi.com/search?query=${text}&language=en`,options)
    const jsonres = await res.json()
    setdata(jsonres.data.stock)
    console.log(data)



    console.log("API called")

  }
  useEffect(() => {
    
  }, [data])
  
  

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      if (text) {
        // makeApiCall(text);
        fetchdata()
      }
    }, 500); // Delays the API call by 1000 milliseconds (1 second)

    return () => clearTimeout(debounceTimer.current);
  }, [text]);
  
  

  return (
    <WrapperContainer statusBarColor={colors.codGray}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.goBack()}
        >
          <Image 
            style={styles.icon}
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/3114/3114883.png" }} 
          />
        </TouchableOpacity>
        <TextInput
        
        
          placeholder='Search Stocks'
          placeholderTextColor={colors.gray}
          style={styles.input}
          value={text}
          onChangeText={(txt)=>{
            setText(txt)

          }}
          ref={inputRef}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.goBack()}
        >
          <Image 
            style={styles.icon}
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/9373/9373611.png" }} 
          />
        </TouchableOpacity>
      </View>
      <View style={styles.divider}></View>
      <View style={{marginTop:moderateScale(10)}}>
        {data&&
        <FlatList
        data={data}
        renderItem={({item})=><CompanyCard
        cost={item?.price}
        name={item?.name}
        title={item?.symbol}
        change={item?.change}

        />}
        />
}

      </View>
    </WrapperContainer>
  );
};

export default SearchStocks;
