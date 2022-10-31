import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../../../constants/colors';

import styles from './pinCodeButton.style';

import { IPinCodeButtonProps } from './pinCodeButton.types';

const PinCodeButton: FC<IPinCodeButtonProps> = ({
  title,
  iconName,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, !!iconName && styles.iconContainer]}>
          {iconName ? (
            <Icon name={iconName} size={40} color={colors.white} />
          ) : (
            <Text style={styles.button}>{title}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PinCodeButton;
