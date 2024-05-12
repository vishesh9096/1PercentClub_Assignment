import React, {useEffect, useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IntroScreenProps {
  navigation: any;
}

const slides = [
  {
    key: 3,
    title: 'Connect with Fellow Traders ',
    text: 'Bringing Traders Together, One Click \n at a Time.',
    image: "https://assets-global.website-files.com/64ede0a591d8114fdaa0ae7f/6566cfdf6cfe72177e85fcf7_TheOnepercentClubHomepage_BannerImage.webp",
    backgroundColor: '#22bcb5',
  },
  
  {
    key: 2,
    title: "India's First Finance App",
    text: 'Invest and grow \n together.',
    image: "https://assets-global.website-files.com/64ede0a591d8114fdaa0ae7f/65f07615e23ed48268fb9443_1%25club-money-school-finance-modules.webp",
    backgroundColor: '#febe29',
  },
  {
    key: 1,
    title: 'Be the top 1%',
    text: 'Watchlist What matters',
    image: "https://i.pinimg.com/736x/0e/22/18/0e2218b668cb7d043407ad4a4cf254e4.jpg",
    backgroundColor: '#59b2ab',
  },
  
];

const IntroScreen = ({navigation}: IntroScreenProps) => {
  const [currIndex, setCurrIndex] = useState(0);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex(prevIndex => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const arr = [1, 2, 3];

  return (
    <WrapperContainer paddingAvailable={false} isSafeAreaAvailable={false}>
      <ImageBackground
        source={{uri:slides[currIndex]?.image.toString()}}
        style={styles.container}>
        <View
          style={{
            ...styles.slideIndicatorContainer,
            marginTop: insets.top + moderateScale(10),
          }}>
          {arr.map((val, ind) => {
            return (
              <View
                key={ind}
                style={[
                  styles.slideIndicator,
                  {
                    backgroundColor:
                      currIndex === ind ? colors.theme : colors.white,
                  },
                ]}
              />
            );
          })}
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
        {currIndex === 0 && (
          <Image
            source={imagePath.circleOne}
            style={[styles.circleImage, {left: 0}]}
          />
        )}
        {currIndex === 1 && (
          <Image
            source={imagePath.circleOne}
            style={[
              styles.circleImage,
              // eslint-disable-next-line react-native/no-inline-styles
              {right: 0, transform: [{rotate: '180deg'}]},
            ]}
          />
        )}
        <Text style={styles.title}>{slides[currIndex]?.title}</Text>
        <Text style={styles.text}>{slides[currIndex]?.text}</Text>
        <View style={styles.buttonContainer}>
          <ButtonComp
            btnText={'SKIP'}
            onPressBtn={() =>
              navigation.navigate(navigationStrings.EMAIL_LOGIN)
            }
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default IntroScreen;
