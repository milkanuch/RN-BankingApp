import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { useGetAllCardsQuery } from 'services/index';

import CardCaroules from 'components/CardCarousel/CardCarousel';

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
    <ScrollView style={styles.scren}>
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
    </ScrollView>
  );
}
