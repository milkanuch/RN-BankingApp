import { View, Text } from 'react-native';
import React, { FC } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';

import IconButton from '../IconButton/IconButton';

import styles from './homeSubtitle.styles';
import { parametersIconColor } from './homeSubtitle.settings';
import { IHomeSubtitleProps } from './homeSubtitle.types';

const HomeSubtitle: FC<IHomeSubtitleProps> = ({
  title,
  buttonTitle,
  iconName,
  iconSize,
  onPress,
}) => {
  const size = iconSize ?? 24;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {!!iconName && (
        <IconButton
          iconName={iconName}
          color={parametersIconColor}
          size={size}
          onPress={onPress}
        />
      )}
      {!!buttonTitle && (
        <TouchableOpacity onPress={onPress}>
          <Text>{buttonTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default HomeSubtitle;
