import { Text } from 'react-native';
import React, { FC } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { IProviderSelectorItemProps } from './providerSelectorItem.types';
import styles from './providerSelectorItem.styles';
import { activeOpacity, numberOfLines } from './providerSelectorItem.settings';

const ProviderSelectorItem: FC<IProviderSelectorItemProps> = ({
  provider,
  selected,
  onPress,
}) => {
  const handleOnPress = () => onPress(provider);
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={handleOnPress}
      style={[styles.container, selected && styles.selectedContainer]}>
      <Text
        adjustsFontSizeToFit
        numberOfLines={numberOfLines}
        style={[styles.text, selected && styles.selectedText]}>
        {provider}
      </Text>
    </TouchableOpacity>
  );
};

export default ProviderSelectorItem;
