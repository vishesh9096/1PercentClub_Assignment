import React, {FC, useState} from 'react';
import {
  Image,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../styles/colors';
import commonStyles, {hitSlopProp} from '../styles/commonStyles';
import {moderateScale} from '../styles/responsiveSize';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
interface CompanyCardProps {
  title?: string;
  name?: string;
  description?: string;
  cost?: string;
  change?: string;
  image?: any;
  showdescription?: boolean;
}

// export const CollapsableContainer = ({

//     expanded,
//   }: {

//     expanded: boolean;
//   }) => {
//     const [height, setHeight] = useState(0);
//     const animatedHeight = useSharedValue(0);

//     const onLayout = (event: LayoutChangeEvent) => {
//     };

//     return (
//       <Animated.View style={[collapsableStyle, { overflow: "hidden" }]}>
//         <View style={{ position: "absolute" }} onLayout={onLayout}>
//          <Text>fjkslfjklsdjffllsdljffsdlkfjfslkfkjsdlkj;</Text>
//         </View>
//       </Animated.View>
//     );
//   };

const CompanyCard: FC<CompanyCardProps> = ({
  title,
  name,
  description,
  cost,
  change,
  image,
  showdescription,
}) => {
  const navigation = useNavigation();

  const [expanded, setExpanded] = useState(false);

  const onItemPress = () => {
    setExpanded(!expanded);
  };
  const collapsableStyle = useAnimatedStyle(() => {
    const animatedHeight = expanded
      ? withTiming(120, {
          duration: 300, // Animation duration in milliseconds
          easing: Easing.inOut(Easing.ease), // Easing function for smoother transition
        })
      : withTiming(0, {
          duration: 300,
          easing: Easing.inOut(Easing.ease),
        });

    return {
      height: animatedHeight,
    };
  }, [expanded]);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(navigationStrings.COMPANY_DETAILS, {
            "name":name,
            "description":description,
            "cost":cost,
            "change":change,
            "title":title,
          });
        }}
        onLongPress={onItemPress}
        activeOpacity={0.8}
        style={styles.container}>
        <View>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/0/747.png',
            }}
            tintColor={'white'}
            style={styles.imgStyle}
          />
        </View>

        <View style={{marginLeft: moderateScale(20)}}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{name}</Text>
          </View>
          <View>
            <View style={styles.innercontainer}>
              <Text style={styles.grayText}>${cost}</Text>

              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/4655/4655143.png',
                }}
                tintColor={colors.green}
                style={styles.growimage}
              />
              <Text style={styles.greenText}>{change} %</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {expanded && (
        <Animated.View style={[collapsableStyle]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{name}</Text>
          <Text style={{color: colors.gray1}}>
            {' '}
            Lorem ipsum dolor sit amet. Vel quia dolorum qui quidem quam vel
            nisi quaerat id fugit architecto aut temporibus odio. Vel veritatis
            neque ea voluptas nihil in quam obcaecati aut voluptatem molestias
            qui blanditiis repellat ex eveniet tempore.
          </Text>
        </Animated.View>
      )}

      {/* <View style={styles.divider}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: moderateScale(100),

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(15),
    justifyContent: 'flex-start',
  },
  imgStyle: {
    alignSelf: 'center',
    height: moderateScale(40),
    width: moderateScale(40),
    resizeMode: 'contain',
  },
  title: {
    ...commonStyles.font_20_bold,
  },
  subtitle: {
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
});

export default React.memo(CompanyCard);
