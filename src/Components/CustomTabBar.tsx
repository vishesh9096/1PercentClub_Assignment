import React from 'react';
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {width} from '../styles/responsiveSize';
import {CustomTabMenuItem} from './CustomTabMenuItem';
import colors from '../styles/colors';

export const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.mainContainer}>
        {state.routes.map((route, index) => {

          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              activeOpacity={0.8}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.tabItemStyle}
              key={route.key.toString()} // Use a more unique key
            >
              <CustomTabMenuItem
                label={label}
                isCurrent={isFocused}
                index={index}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width: width,
    height: Platform.OS === 'ios' ? 60 : 68,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: colors.blackOpacity80,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
  },
  mainContainer: {
    flexDirection: 'row',
  },
  tabItemStyle: {flex: 1},
});
