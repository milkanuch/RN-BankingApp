import { View } from 'react-native';
import React, { FC } from 'react';

import TabModeSelectorItem from './TabModeSelectorItem/TabModeSelectorItem';
import styles from './tabModeSelector.styles';
import { ITabModeSelectorProps } from './tabModeSelector.types';

const TabModeSelector: FC<ITabModeSelectorProps> = ({
  currentValue,
  setNewValue,
  items,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {items.map(tabItemData => (
        <TabModeSelectorItem
          key={tabItemData.value}
          changeValue={setNewValue}
          data={tabItemData}
          currentValue={currentValue}
        />
      ))}
    </View>
  );
};

export default TabModeSelector;
