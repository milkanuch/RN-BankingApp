import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import { responsiveWidth } from 'constants/dimensions';

import { E_UKRAINE_REGULAR } from 'constants/fonts';

const styles = StyleSheet.create({
  transactionCategory: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionCategoryTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.black,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  transactionCategoryText: {
    fontFamily: E_UKRAINE_REGULAR,
    fontSize: 16,
    color: COLORS.white,
    paddingHorizontal: 10,
  },
  categoryLine: {
    borderWidth: 1,
    width: responsiveWidth(25),
  },
});

export default styles;
