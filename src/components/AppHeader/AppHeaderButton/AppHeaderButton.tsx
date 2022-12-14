import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import React, { FC } from 'react';

import { COLORS } from 'constants/colors';

import { IAppHeaderButtonProps } from './appHeaderButton.types';

const AppHeaderButton: FC<IAppHeaderButtonProps> = ({
  iconName,
  iconSize,
  style,
  onPress,
}) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={iconName} size={iconSize} color={COLORS.darkGrey} />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeaderButton;
