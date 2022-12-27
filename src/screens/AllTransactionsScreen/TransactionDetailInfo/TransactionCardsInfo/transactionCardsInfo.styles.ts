import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import { E_UKRAINE_BOLD, E_UKRAINE_ULTRA_LIGHT } from 'constants/fonts';

const styles = StyleSheet.create({
  cardsInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 5,
  },
  cardSenderTitle: {
    fontFamily: E_UKRAINE_BOLD,
    fontSize: 20,
    color: COLORS.darkGrey,
  },
  cardNumber: {
    fontFamily: E_UKRAINE_ULTRA_LIGHT,
    fontSize: 18,
    padding: 10,
  },
});

export default styles;
