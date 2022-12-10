import { View, Text } from 'react-native';
import React, { FC } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  CardSettingsScreenProps,
  HomeStackScreenTypes,
} from 'navigation/HomeStackNavigation/homeStackNavigation.types';

import IconButton from 'components/IconButton/IconButton';

import {
  detailIconColor,
  detailIconName,
  detailIconSize,
} from './cardHeader.settings';
import styles from './cardHeader.styles';
import { ICardHeaderProps } from './cardHeader.types';

const CardHeader: FC<ICardHeaderProps> = ({
  cardType,
  showDetailsIconButton,
}) => {
  const { navigate } = useNavigation<CardSettingsScreenProps>();

  const handleIconPress = () => {
    navigate(HomeStackScreenTypes.CardSettings);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${cardType} Card`}</Text>
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
