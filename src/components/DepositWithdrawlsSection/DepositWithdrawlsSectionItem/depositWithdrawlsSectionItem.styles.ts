import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import {
  E_UKRAINE_THIN,
  E_UKRAINE_REGULAR,
  E_UKRAINE_BOLD,
} from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrey,
  },
  card: {
    flex: 1,
  },
  money: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  date: {
    fontFamily: E_UKRAINE_THIN,
  },
  cardProvider: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: E_UKRAINE_REGULAR,
  },
  total: {
    color: COLORS.black,
    fontFamily: E_UKRAINE_REGULAR,
  },
  currency: {
    color: COLORS.black,
    fontFamily: E_UKRAINE_BOLD,
    marginLeft: 5,
  },
});

export default styles;
