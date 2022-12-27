import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { responsiveHeight } from 'constants/dimensions';
import { E_UKRAINE_LIGHT } from 'constants/fonts';

const styles = StyleSheet.create({
  section: {
    marginTop: 10,
    minHeight: responsiveHeight(15),
  },
  text: {
    fontWeight: '100',
    fontSize: 18,
    paddingBottom: 10,
    alignSelf: 'baseline',
    color: COLORS.darkGrey,
    fontFamily: E_UKRAINE_LIGHT,
  },
  container: {
    elevation: 10,
    padding: 10,
    paddingVertical: 10,
    marginHorizontal: 30,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    minHeight: responsiveHeight(18.5),
  },
  emptyTransactionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: responsiveHeight(15.8),
  },
  emptyTransactions: {
    fontSize: 20,
  },
});

export default styles;
