import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import { E_UKRAINE_THIN } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  text: {
    fontFamily: E_UKRAINE_THIN,
    fontSize: 13,
    color: COLORS.white,
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default styles;
