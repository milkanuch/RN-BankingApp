import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import { E_UKRAINE_THIN } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 15,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontFamily: E_UKRAINE_THIN,
    fontSize: 27,
    color: COLORS.white,
  },
});

export default styles;
