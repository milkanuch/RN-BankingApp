import { StyleSheet } from 'react-native';

import { responsiveHeight, responsiveWidth } from 'constants/dimensions';

import { E_UKRAINE_REGULAR } from 'constants/fonts';

import { COLORS } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(25),
    height: responsiveHeight(18),
    justifyContent: 'space-between',
    padding: 10,
    margin: 15,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    elevation: 5,
  },
  categoryTitle: {
    fontFamily: E_UKRAINE_REGULAR,
    fontSize: 16,
    textAlign: 'center',
  },
  totalSpendTitle: {
    fontFamily: E_UKRAINE_REGULAR,
    fontSize: 18,
    color: COLORS.black,
    textAlign: 'center',
  },
});

export default styles;
