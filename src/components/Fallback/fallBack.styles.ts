import { StyleSheet } from 'react-native';

import { responsiveHeight } from 'constants/dimensions';

import { E_UKRAINE_BOLD, E_UKRAINE_REGULAR } from 'constants/fonts';

import { COLORS } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 48,
    fontFamily: E_UKRAINE_BOLD,
    paddingBottom: responsiveHeight(2),
    color: COLORS.black,
  },
  subtitle: {
    fontSize: 32,
    fontFamily: E_UKRAINE_REGULAR,
    color: COLORS.black,
  },
  error: {
    paddingVertical: responsiveHeight(2),
  },
});

export default styles;
