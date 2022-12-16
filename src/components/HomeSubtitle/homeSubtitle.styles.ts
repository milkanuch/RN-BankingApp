import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { E_UKRAINE_LIGHT } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  title: {
    color: COLORS.darkGrey,
    fontFamily: E_UKRAINE_LIGHT,
    fontSize: 18,
    marginTop: 10,
  },
  buttonTitle: {
    fontFamily: E_UKRAINE_LIGHT,
  },
});

export default styles;
