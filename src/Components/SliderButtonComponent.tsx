import React, {FC, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../styles/colors';
import commonStyles, {hitSlopProp} from '../styles/commonStyles';
import {moderateScale} from '../styles/responsiveSize';
import {MaterialIndicator} from 'react-native-indicators';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  runOnJS,
  runOnUI,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface SliderButtonCompProps {
  inactiveText: string;
  activeText: string;
  completedText: string;
  btnText: string;
  txtStyle?: object;
  onPressBtn?: () => void;
  rightImage?: any;
  btnStyle?: object;
  disabled?: boolean;
  loading?: boolean;
}

const SliderButtonComp: FC<SliderButtonCompProps> = ({
  inactiveText,
  activeText,
  completedText,
  btnText,
  txtStyle,
  onPressBtn,
  rightImage,
  btnStyle,
  disabled = false,
  loading = false,
}) => {
  const opacity = disabled || loading ? 0.4 : 1;
  const X = useSharedValue(10);
  const [end, isend] = useState(false);

  const changestate = () => {
    isend(true);
    onPressBtn()

  };

  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive: e => {
      if (!end) X.value = e.translationX;
    },
    onEnd: () => {
      X.value = X.value < 200 ? withSpring(10) : withSpring(260);
      if (X.value >= 200) runOnJS(changestate)();
    },
  });

  const InterpolateXInput = [0, 220, 260];
  const InterpolateXInput2 = [0, 220, 240];
  const InterpolateXInput3 = [0, 250, 260];
  const AnimatedStyles = {
    swipeStyle: useAnimatedStyle(() => {
      return {transform: [{translateX: X.value}]};
    }),
    textStyle: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [1, 0, 0],
          Extrapolate.CLAMP,
        ),
      };
    }),
    textStyle2: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput2,
          [0, 1, 0],
          Extrapolate.CLAMP,
        ),
      };
    }),
    textStyle3: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput3,
          [0, 0, 1],
          Extrapolate.CLAMP,
        ),
      };
    }),
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        X.value,
        [0, 260],
        [colors.theme, colors.green],
        'RGB',
        {
          gamma: 10,
        },
      ),
    };
  });
  return (
    <Animated.View
      style={[
        {...styles.btnStyle, opacity, height: moderateScale(70)},
        animatedStyle,
      ]}
      hitSlop={hitSlopProp}>
      <View style={styles.innerstyle}>
        <PanGestureHandler onGestureEvent={animatedGestureHandler}>
          <Animated.View
            style={[AnimatedStyles.swipeStyle, styles.animatedviewstyle]}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png',
              }}
              resizeMode="contain"
              style={styles.imgStyle}
            />
          </Animated.View>
        </PanGestureHandler>
        <Animated.View style={[styles.textView, AnimatedStyles.textStyle]}>
          <Text style={styles.innnertext}>{inactiveText}</Text>
        </Animated.View>
        <Animated.View style={[styles.textView, AnimatedStyles.textStyle2]}>
          <Text style={styles.innnertext}>{activeText}</Text>
        </Animated.View>
        <Animated.View style={[styles.textView, AnimatedStyles.textStyle3]}>
          <Text style={styles.innnertext}>{completedText}</Text>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
    height: moderateScale(52),
    marginBottom:moderateScale(20)
  },
  textView: {
    ...commonStyles.font_20_bold,
    color: colors.black,
    zIndex: 50,
    position: 'absolute',
    left: moderateScale(120),
  },
  innnertext: {
    ...commonStyles.font_20_bold,
    color: colors.black,
    fontWeight: '800',
  },
  imgStyle: {
    alignSelf: 'center',
    height: moderateScale(20),
    width: moderateScale(20),
  },
  animatedviewstyle: {
    zIndex: 1000,
    backgroundColor: colors.white,
    padding: moderateScale(18),
    borderRadius: moderateScale(100),
  },

  innerstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(SliderButtonComp);
