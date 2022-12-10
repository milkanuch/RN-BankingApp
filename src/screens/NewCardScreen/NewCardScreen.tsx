import { SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import Snackbar from 'react-native-snackbar';

import TitleText from 'components/TitleText/TitleText';

import { useNewCardMutation } from 'services/index';

import { INewCardParams } from 'services/bankApi.types';

import { showSnackBar } from 'components/Card/card.helper';

import { colors } from 'constants/colors';

import { getItem } from 'store/bankStore/store';

import AppLoadingScreen from 'screens/AppLoadingScreen/AppLoadingScreen';

import {
  buttonText,
  cardTypeSubtitle,
  currencySubtitle,
  failText,
  providerSubtitle,
  screenTitle,
  successText,
} from './newCardScreen.settings';

import CardTypeSelector from './CardTypeSelector/CardTypeSelector';
import CreateCardButton from './CreateCardButton/CreateCardButton';
import styles from './newCardScreen.styles';
import CurrencySelector from './CurrencySelector/CurrencySelector';
import ProviderSelector from './ProviderSelector/ProviderSelector';

const NewCardScreen = () => {
  const [provider, setProvider] = useState('Visa');
  const [currency, setCurrency] = useState('UAH');
  const [type, setCardType] = useState('Debit');

  const [createNewCard, { data, isError, reset, isLoading }] =
    useNewCardMutation();

  const handleOnPress = async () => {
    const accessToken = await getItem('AccessToken');
    const newCardParams: INewCardParams = {
      accessToken,
      provider,
      type,
      currency,
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
    return <AppLoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TitleText text={screenTitle} />
      <TitleText text={providerSubtitle} subtitle />
      <ProviderSelector currentProvider={provider} setProvider={setProvider} />
      <TitleText text={currencySubtitle} subtitle />
      <CurrencySelector currentCurrency={currency} setCurrency={setCurrency} />
      <TitleText text={cardTypeSubtitle} subtitle />
      <CardTypeSelector currentCardType={type} setCardType={setCardType} />
      <CreateCardButton title={buttonText} onPress={handleOnPress} />
    </SafeAreaView>
  );
};

export default NewCardScreen;
