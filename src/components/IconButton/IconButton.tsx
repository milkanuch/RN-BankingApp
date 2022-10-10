import React, { FC } from 'react';

import Icon from 'react-native-vector-icons/AntDesign';

import { TouchableOpacity } from 'react-native';

import { IIconButtonProps } from './iconButton.types';
import { activeOpacityValue } from './iconButton.settings';

const IconButton: FC<IIconButtonProps> = ({
  size,
  iconName,
  onPress,
  color,
}) => {
  const handleOnPress = () => onPress();
  return (
    <TouchableOpacity
      activeOpacity={activeOpacityValue}
      onPress={handleOnPress}>
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
