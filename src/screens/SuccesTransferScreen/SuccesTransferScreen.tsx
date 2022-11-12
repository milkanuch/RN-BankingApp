import { Text, View } from 'react-native';
import React, { FC } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { responsiveHeight } from '../../constants/dimensions';

import styles from './succesTransferScreen.styles';

import { ISuccesTransferScreenPorps } from './succesTransferScreen.types';
import {
  deniedTransferIcon,
  deniedTransferText,
  succesTransferIcon,
  succesTransferText,
} from './succesTransferScreen.settings';

const SuccesTransferScreen: FC<ISuccesTransferScreenPorps> = ({ isSucces }) => {
  const text = isSucces ? succesTransferText : deniedTransferText;
  const iconName = isSucces ? succesTransferIcon : deniedTransferIcon;
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name={iconName} size={responsiveHeight(12)} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SuccesTransferScreen;
