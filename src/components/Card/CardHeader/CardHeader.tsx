import { View, Text } from 'react-native';
import React, { FC } from 'react';

import IconButton from '../../IconButton/IconButton';

import { detailIconColor, detailIconSize } from './cardHeader.settings';
import styles from './cardHeader.styles';
import { ICardHeaderProps } from './cardHeader.types';

const CardHeader: FC<ICardHeaderProps> = ({ title, iconName, onIconPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <IconButton
        iconName={iconName}
        color={detailIconColor}
        size={detailIconSize}
        onPress={onIconPress}
      />
    </View>
  );
};

export default CardHeader;
