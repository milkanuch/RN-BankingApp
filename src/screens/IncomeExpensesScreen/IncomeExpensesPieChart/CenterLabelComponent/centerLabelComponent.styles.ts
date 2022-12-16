import { StyleSheet } from 'react-native';

import { responsiveWidth } from 'constants/dimensions';

import {
  E_UKRAINE_REGULAR,
  E_UKRAINE_BOLD,
  E_UKRAINE_THIN,
} from 'constants/fonts';

import { COLORS } from 'constants/colors';

const styles = StyleSheet.create({
  centerLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 10,
    paddingHorizontal: responsiveWidth(8.4),
    borderWidth: 2,
    borderColor: COLORS.lightGrey,
    borderRadius: 360,
  },
  monthText: {
    fontFamily: E_UKRAINE_REGULAR,
    fontSize: 14,
  },
  yearText: {
    fontFamily: E_UKRAINE_BOLD,
    color: COLORS.black,
    textAlign: 'center',
    fontSize: 22,
  },
  totalSpendText: {
    fontFamily: E_UKRAINE_THIN,
    color: COLORS.black,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default styles;
