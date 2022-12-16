import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { E_UKRAINE_LIGHT } from 'constants/fonts';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenTitle: {
    fontSize: 26,
    color: COLORS.black,
    marginHorizontal: 20,
    marginVertical: 10,
    fontFamily: E_UKRAINE_LIGHT,
  },
});

export default styles;
