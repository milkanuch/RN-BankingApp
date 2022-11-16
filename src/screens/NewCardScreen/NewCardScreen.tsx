import { ActivityIndicator, View } from 'react-native';
import React, { useState } from 'react';

import Snackbar from 'react-native-snackbar';

import { SafeAreaView } from 'react-native-safe-area-context';

import TitleText from '../../components/TitleText/TitleText';

import { useNewCardMutation } from '../../services';

import { INewCardParams } from '../../services/bankApi.types';

import { showSnackBar } from '../../components/Card/card.helper';

import { colors } from '../../constants/colors';

import { getItem } from '../../store/bankStore/store';

import ProviderSelector from './ProviderSelector/ProviderSelector';
import styles from './newCardScreen.styles';
import CurrencySelector from './CurrencySelector/CurrencySelector';
import CardTypeSelector from './CardTypeSelector/CardTypeSelector';
import CreateCardButton from './CreateCardButton/CreateCardButton';
import {
  buttonText,
  cardTypeSubtitle,
  currencySubtitle,
  failText,
  providerSubtitle,
  screenTitle,
  successText,
} from './newCardScreen.settings';

const NewCardScreen = () => {
  const [currentProvider, setProvider] = useState('Visa');
  const [currentCurrency, setCurrency] = useState('UAH');
  const [currentCardType, setCardType] = useState('Debit');

  const [createNewCard, { data, isError, reset, isLoading }] =
    useNewCardMutation();

  const handleOnPress = async () => {
    const accessToken = await getItem('AccessToken');
    const newCardParams: INewCardParams = {
      accessToken,
      provider: currentProvider,
      type: currentCardType,
      currency: currentCurrency,
    };
    await createNewCard(newCardParams).unwrap();
  };

  if (isError) {
    showSnackBar(failText);
    reset();
  }

  if (data && data.error) {
    showSnackBar(data.error);
    reset();
  } else if (data) {
    Snackbar.show({
      text: successText,
      backgroundColor: colors.green,
    });
    reset();
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TitleText text={screenTitle} />
      <TitleText text={providerSubtitle} subtitle />
      <ProviderSelector
        currentProvider={currentProvider}
        setProvider={setProvider}
      />
      <TitleText text={currencySubtitle} subtitle />
      <CurrencySelector
        currentCurrency={currentCurrency}
        setCurrency={setCurrency}
      />
      <TitleText text={cardTypeSubtitle} subtitle />
      <CardTypeSelector
        currentCardType={currentCardType}
        setCardType={setCardType}
      />
      <CreateCardButton title={buttonText} onPress={handleOnPress} />
    </SafeAreaView>
  );
};

export default NewCardScreen;
