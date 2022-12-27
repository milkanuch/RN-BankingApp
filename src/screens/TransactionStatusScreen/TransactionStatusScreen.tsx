import { Text, View } from 'react-native';
import React, { FC } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { responsiveHeight } from 'constants/dimensions';

import CustomButton from 'components/CustomButton/CustomButton';

import { TransactionStatusScreenProps } from 'navigation/AppStackNavigation/appStackNavigation.types';

import {
  buttonText,
  deniedTransferIcon,
  succesTransferIcon,
} from './transactionStatusScreen.settings';

import styles from './transactionStatusScreen.styles';

const TransactionStatusScreen: FC<TransactionStatusScreenProps> = ({
  navigation,
  route,
}) => {
  const { isSuccess, message } = route.params;

  const iconName = isSuccess ? succesTransferIcon : deniedTransferIcon;
  const handleBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name={iconName} size={responsiveHeight(12)} />
      <Text style={styles.text}>{message}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton title={buttonText} isWhiteTheme onPress={handleBack} />
      </View>
    </View>
  );
};

export default TransactionStatusScreen;
