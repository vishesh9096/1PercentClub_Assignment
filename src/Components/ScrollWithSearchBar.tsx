import React, { useState } from 'react';
import { View, ScrollView, TextInput, StyleSheet, Animated } from 'react-native';

const ScrollWithSearchBar: React.FC = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const [searchVisible, setSearchVisible] = useState(false);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );

  const handleScrollEnd = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY <= 0) {
      setSearchVisible(false);
    } else if (!searchVisible && offsetY > 0) {
      setSearchVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      {searchVisible && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            // Implement search functionality here
          />
        </View>
      )}
      <ScrollView
        style={styles.scrollView}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={16}
      >
        {/* Add your content here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchInput: {
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default ScrollWithSearchBar;
