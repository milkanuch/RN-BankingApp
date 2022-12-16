import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import { E_UKRAINE_REGULAR } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: E_UKRAINE_REGULAR,
    color: COLORS.white,
  },
});

export default styles;
