import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';

import styles from './frequentlyUsedButtons.styles';
import { IFrequentlyUsedButtonProps } from './frequentlyUsedButtons.types';
import {
  depositButtonIcon,
  depositButtonOnPress,
  depositButtonTitle,
  detailsButtonIcon,
  detailsButtonOnPress,
  detailsButtonTitle,
  iconColor,
  iconSize,
  transferButtonIcon,
  transferButtonOnPress,
  transferButtonTitle,
} from './frequentlyUsedButtons.settings';

const buttons = [
  {
    title: transferButtonTitle,
    iconName: transferButtonIcon,
    onPress: transferButtonOnPress,
  },
  {
    title: depositButtonTitle,
    iconName: depositButtonIcon,
    onPress: depositButtonOnPress,
  },
  {
    title: detailsButtonTitle,
    iconName: detailsButtonIcon,
    onPress: detailsButtonOnPress,
  },
];

const FrequentlyUsedButton = (props: IFrequentlyUsedButtonProps) => {
  const { title, iconName, onPress } = props;
  return (
    <View style={styles.center}>
      <TouchableOpacity style={styles.frequentlyButton} onPress={onPress}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
};

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
