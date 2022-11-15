import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './frequentlyUsedButton.styles';

import { IFrequentlyUsedButtonProps } from './frequentlyUsedButton.types';
import { iconColor, iconSize } from './frequentlyUsedButton.settings';

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

export default FrequentlyUsedButton;
