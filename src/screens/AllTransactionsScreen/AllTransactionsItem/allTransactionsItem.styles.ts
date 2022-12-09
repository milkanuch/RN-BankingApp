import { StyleSheet } from 'react-native';

import { responsiveHeight } from '../../../constants/dimensions';

import {
  eUkraineBold,
  eUkraineUltraLight,
  eUkraineRegular,
} from './../../../constants/fonts';

import { colors } from './../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(8),
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 6,
    elevation: 5,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  cardProvider: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: eUkraineUltraLight,
  },
  transactionDate: {
    fontFamily: eUkraineRegular,
  },
  transactionSum: {
    fontFamily: eUkraineBold,
    color: colors.black,
  },
});

export default styles;
