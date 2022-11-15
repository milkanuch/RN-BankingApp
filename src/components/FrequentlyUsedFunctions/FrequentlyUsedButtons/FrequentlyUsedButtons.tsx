import { View } from 'react-native';
import React from 'react';

import styles from './frequentlyUsedButtons.styles';
import { buttons } from './frequentlyUsedButtons.settings';
import FrequentlyUsedButton from './FrequentlyUsedButton/FrequentlyUsedButton';

const FrequentlyUsedButtons = () => {
  return (
    <View style={styles.container}>
      {buttons.map(item => (
        <FrequentlyUsedButton
          key={item.title}
          iconName={item.iconName}
          title={item.title}
          onPress={item.onPress}
        />
      ))}
    </View>
  );
};

export default FrequentlyUsedButtons;
