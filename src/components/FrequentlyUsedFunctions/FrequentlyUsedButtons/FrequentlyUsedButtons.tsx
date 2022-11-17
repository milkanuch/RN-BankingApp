import { View } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { showSnackBar } from '../../Card/card.helper';

import styles from './frequentlyUsedButtons.styles';
import FrequentlyUsedButton from './FrequentlyUsedButton/FrequentlyUsedButton';
import {
  depositButtonIcon,
  depositButtonTitle,
  detailsButtonIcon,
  detailsButtonTitle,
  transferButtonIcon,
  transferButtonTitle,
} from './frequentlyUsedButtons.settings';
import {
  FrequentlyUsedButtonProps,
  FrequentlyUsedButtonTypes,
} from './frequentlyUsedButtons.types';

const FrequentlyUsedButtons = () => {
  const navigation = useNavigation<FrequentlyUsedButtonProps>();
  const handelTransferButton = () => {
    navigation.navigate(FrequentlyUsedButtonTypes.MoneyTransferStack);
  };
  const handelDepositButton = () => {
    showSnackBar('Comming soon...');
  };
  const handelDetailsButton = () => {
    showSnackBar('Comming soon...');
  };
  return (
    <View style={styles.container}>
      <FrequentlyUsedButton
        iconName={transferButtonIcon}
        title={transferButtonTitle}
        onPress={handelTransferButton}
      />
      <FrequentlyUsedButton
        iconName={depositButtonIcon}
        title={depositButtonTitle}
        onPress={handelDepositButton}
      />
      <FrequentlyUsedButton
        iconName={detailsButtonIcon}
        title={detailsButtonTitle}
        onPress={handelDetailsButton}
      />
    </View>
  );
};

export default FrequentlyUsedButtons;
