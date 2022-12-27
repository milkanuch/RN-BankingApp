import { StyleSheet } from 'react-native';

import { E_UKRAINE_BOLD, E_UKRAINE_REGULAR } from 'constants/fonts';

import { COLORS } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
  },
  title: {
    fontSize: 14,
    fontFamily: E_UKRAINE_BOLD,
    color: COLORS.black,
  },
  contentText: {
    paddingVertical: 4,
    fontSize: 14,
    fontFamily: E_UKRAINE_REGULAR,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: COLORS.black,
  },
});

export default styles;
