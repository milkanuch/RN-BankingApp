import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import {
  E_UKRAINE_BOLD,
  E_UKRAINE_THIN,
  E_UKRAINE_MEDIUM,
} from 'constants/fonts';

import { responsiveHeight } from 'constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: responsiveHeight(10),
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.white,
    elevation: 10,
  },
  transactionDetailHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    padding: 10,
  },
  senderName: {
    fontFamily: E_UKRAINE_BOLD,
    fontSize: 24,
    color: COLORS.black,
  },
  transactionDate: {
    fontFamily: E_UKRAINE_THIN,
    fontSize: 18,
    color: COLORS.darkGrey,
    padding: 10,
  },
  transactionSum: {
    fontFamily: E_UKRAINE_MEDIUM,
    fontSize: 20,
    color: COLORS.black,
    margin: 10,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  noPurposeText: {
    marginTop: responsiveHeight(2),
    fontFamily: E_UKRAINE_BOLD,
    fontSize: 20,
    color: COLORS.black,
  },
});

export default styles;
