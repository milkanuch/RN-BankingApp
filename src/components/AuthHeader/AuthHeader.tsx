import { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './authHeader.styles';
import { IHeaderProps } from './authHeader.types';

const AuthHeader: FC<IHeaderProps> = ({ title, text, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default AuthHeader;
