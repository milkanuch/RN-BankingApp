import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

import { eUkraineLight } from './../../constants/fonts';

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
    fontFamily: eUkraineLight,
  },
  congratulations: {
    color: colors.darkGrey,
    fontFamily: eUkraineLight,
  },
});

export default styles;
