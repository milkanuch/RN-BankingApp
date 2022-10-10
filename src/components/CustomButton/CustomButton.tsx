import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { ICustomButtonProps } from './customButton.types';

import styles from './customButton.styles';
import { activeOpacityValue, iconSize } from './customButton.settings';

const CustomButton: FC<ICustomButtonProps> = ({
  title,
  onPress,
  iconName,
  isWhiteTheme,
}) => {
  return (
    <TouchableOpacity
      style={styles.underlayContainer}
      onPress={onPress}
      activeOpacity={activeOpacityValue}>
      <View style={[styles.button, isWhiteTheme && styles.whiteButton]}>
        {!!iconName && (
          <Icon style={styles.icon} name={iconName} size={iconSize} />
        )}
        <Text style={[styles.text, isWhiteTheme && styles.whiteButtonText]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
