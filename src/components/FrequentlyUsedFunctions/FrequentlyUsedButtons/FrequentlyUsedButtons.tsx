import { View } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { showSnackBar } from '../../Card/card.helper';

import {
  BottomTabsScreenTypes,
  FrequentlyUsedButtonProps,
} from '../../../navigation/AppNavigation/appNavigation.types';

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

const FrequentlyUsedButtons = () => {
  const { navigate } = useNavigation<FrequentlyUsedButtonProps>();

  const handelTransferButton = () => {
    navigate(BottomTabsScreenTypes.MoneyTransferStack);
  };

  const handelDepositButton = () => {
    showSnackBar('Comming soon...');
  };

  const handelDetailsButton = () => {
    navigate(BottomTabsScreenTypes.IncomeExpensesStack);
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
