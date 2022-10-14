import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';

import styles from './tabModeSelectorItem.styles';
import { ITabModeSelectorItemProps } from './tabModeSelectorItem.types';
import { activeOpacityValue } from './tabModeSelecorItem.settings';

const TabModeSelectorItem: FC<ITabModeSelectorItemProps> = ({
  data,
  currentValue,
  changeValue,
}) => {
  const { title, value } = data;
  const isSelected = data.value === currentValue;
  const handleOnPress = () => changeValue(value);

  return (
    <TouchableOpacity
      style={styles.underlayContainer}
      onPress={handleOnPress}
      activeOpacity={activeOpacityValue}>
      <View style={[styles.container, isSelected && styles.selectedContainer]}>
        <Text style={[styles.title, isSelected && styles.selectedTitle]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabModeSelectorItem;
