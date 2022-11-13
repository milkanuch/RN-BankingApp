import { Text } from 'react-native';
import React, { FC } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { ICurrencySelectorItemProps } from './currencySelectorItem.types';
import styles from './currencySelectorItem.styles';
import { activeOpacity, numberOfLines } from './currencySelectorItem.settings';

const CurrencySelectorItem: FC<ICurrencySelectorItemProps> = ({
  currency,
  selected,
  onPress,
}) => {
  const handleOnPress = () => {
    onPress(currency);
  };
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={handleOnPress}
      style={[styles.container, selected && styles.selectedContainer]}>
      <Text
        adjustsFontSizeToFit
        numberOfLines={numberOfLines}
        style={[styles.text, selected && styles.selectedText]}>
        {currency}
      </Text>
    </TouchableOpacity>
  );
};

export default CurrencySelectorItem;
