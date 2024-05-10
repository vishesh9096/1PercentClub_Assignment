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
    key: 1,
    title: 'Live Streaming',
    text: 'Streaming Life, One Moment at a \n Time',
    image: imagePath.introOne,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Share Stories',
    text: 'Sharing Moments, Creating \n  Memories.',
    image: imagePath.introTwo,
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Connect with Friends ',
    text: 'Bringing Friends Together, One Click \n at a Time.',
    image: imagePath.introThree,
    backgroundColor: '#22bcb5',
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
        source={slides[currIndex]?.image}
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
