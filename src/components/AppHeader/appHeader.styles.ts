import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import { E_UKRAINE_LIGHT } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconPadding: {
    paddingRight: 15,
  },
  dateFont: {
    fontSize: 10,
    fontFamily: E_UKRAINE_LIGHT,
  },
  congratulations: {
    color: COLORS.darkGrey,
    fontFamily: E_UKRAINE_LIGHT,
  },
});

export default styles;
