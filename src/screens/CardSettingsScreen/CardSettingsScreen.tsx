import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import CardCaroules from '../../components/CardCarousel/CardCarousel';

import { useGetAllCardsQuery } from '../../services';
import AppLoadingScreen from '../AppLoadingScreen/AppLoadingScreen';

import styles from './cardSettingsScreen.styles';
import CardSettingsContent from './CardSettingsContent/CardSettingsContent';

export default function CardSettingsScreen() {
  const [selectedCard, setSelectedCard] = useState(0);
  const { data, isLoading } = useGetAllCardsQuery();

  if (isLoading) {
    return <AppLoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.scren}>
      <Text style={styles.cardSettingsTitle}>Card</Text>
      <CardCaroules
        cards={data?.ok!}
        showIndicator
        onChange={setSelectedCard}
      />
      {data && selectedCard !== data.ok.length ? (
        <CardSettingsContent
          cardNumber={data?.ok[selectedCard].cardNumber}
          expirationDate={data?.ok[selectedCard].expirationTime}
          securityCode={data?.ok[selectedCard].cvvCode}
        />
      ) : (
        <View>
          <Text style={styles.cardSettingsTitle}>There's no information</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
