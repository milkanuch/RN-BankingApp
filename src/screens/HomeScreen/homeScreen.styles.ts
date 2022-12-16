import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { E_UKRAINE_LIGHT } from 'constants/fonts';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    color: COLORS.black,
    marginLeft: 20,
    marginTop: 5,
    fontFamily: E_UKRAINE_LIGHT,
  },
});

export default styles;
