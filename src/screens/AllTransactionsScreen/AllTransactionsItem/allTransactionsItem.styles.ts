import { StyleSheet } from 'react-native';

import { responsiveHeight } from 'constants/dimensions';

import {
  E_UKRAINE_BOLD,
  E_UKRAINE_ULTRA_LIGHT,
  E_UKRAINE_REGULAR,
} from 'constants/fonts';

import { COLORS } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(8),
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    elevation: 5,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  cardProvider: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: E_UKRAINE_ULTRA_LIGHT,
  },
  transactionDate: {
    fontFamily: E_UKRAINE_REGULAR,
  },
  transactionSum: {
    fontFamily: E_UKRAINE_BOLD,
    color: COLORS.black,
  },
});

export default styles;
