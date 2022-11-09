import { View, Text } from 'react-native';
import React, { FC } from 'react';

import IconButton from '../../IconButton/IconButton';

import {
  detailIconColor,
  detailIconName,
  detailIconSize,
} from './cardHeader.settings';
import styles from './cardHeader.styles';
import { ICardHeaderProps } from './cardHeader.types';

const CardHeader: FC<ICardHeaderProps> = ({ title, showDetailsIconButton }) => {
  const handleIconPress = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {showDetailsIconButton && (
        <IconButton
          iconName={detailIconName}
          color={detailIconColor}
          size={detailIconSize}
          onPress={handleIconPress}
        />
      )}
    </View>
  );
};

export default CardHeader;
