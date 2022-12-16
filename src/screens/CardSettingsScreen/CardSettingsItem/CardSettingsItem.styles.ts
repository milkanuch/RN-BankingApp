import { StyleSheet } from 'react-native';

import { E_UKRAINE_BOLD, E_UKRAINE_REGULAR } from 'constants/fonts';

import { COLORS } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darkGrey,
  },
  title: {
    fontSize: 14,
    fontFamily: E_UKRAINE_BOLD,
    color: COLORS.black,
  },
  contentText: {
    paddingVertical: 8,
    fontSize: 12,
    fontFamily: E_UKRAINE_REGULAR,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: COLORS.black,
  },
});

export default styles;
