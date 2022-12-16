import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { E_UKRAINE_BOLD } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleContainer: {
    paddingBottom: 20,
  },
  titleText: {
    fontFamily: E_UKRAINE_BOLD,
    fontSize: 28,
    color: COLORS.black,
  },
  subtitleText: {
    fontFamily: E_UKRAINE_BOLD,
    fontSize: 18,
    color: COLORS.darkGrey,
  },
});

export default styles;
