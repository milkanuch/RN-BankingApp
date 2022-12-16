import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import { E_UKRAINE_REGULAR } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14.25,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: COLORS.white,
  },
  selectedContainer: {
    backgroundColor: COLORS.black,
  },
  underlayContainer: {
    borderRadius: 30,
  },
  title: {
    color: COLORS.black,
    fontSize: 11,
    fontFamily: E_UKRAINE_REGULAR,
  },
  selectedTitle: {
    color: COLORS.white,
  },
});

export default styles;
