import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import navigationStrings from '../../constants/navigationStrings';

const OrderAnimation = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace(navigationStrings.TAB_ROUTES);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ flex: 1, width: '100%', height: '100%' }}
        source={{
          uri:
            'https://cdn.dribbble.com/users/1701248/screenshots/11283222/media/3c76e69c7b500d0387e8ce6ba03fd8a8.gif',
        }}
      />
    </View>
  );
};

export default OrderAnimation;
