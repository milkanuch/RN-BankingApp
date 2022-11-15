import Icon from 'react-native-vector-icons/Entypo';
import React, { FC } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  HomeStackScreenTypes,
  NewCardScreenProps,
} from '../../../navigation/HomeStackNavigation/homeStackNavigation.types';

import styles from './addCardButton.styles';
import { IAddCardButtonProps } from './addCardButton.types';
import {
  activeOpacity,
  iconColor,
  iconName,
  iconSize,
} from './addCardButton.settings';

const AddCardButton: FC<IAddCardButtonProps> = () => {
  const navigation = useNavigation<NewCardScreenProps>();

  const handleOnPress = () => {
    navigation.push(HomeStackScreenTypes.NewCard);
  };
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.rectangle} />
      <View style={styles.triangle} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleOnPress}
        activeOpacity={activeOpacity}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};

export default AddCardButton;
