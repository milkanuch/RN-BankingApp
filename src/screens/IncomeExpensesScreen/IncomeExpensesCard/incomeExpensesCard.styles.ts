import { StyleSheet } from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
} from '../../../constants/dimensions';

import { eUkraineRegular } from './../../../constants/fonts';

import { colors } from './../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(25),
    height: responsiveHeight(18),
    justifyContent: 'space-between',
    padding: 10,
    margin: 15,
    borderRadius: 8,
    backgroundColor: colors.white,
    elevation: 5,
  },
  categoryTitle: {
    fontFamily: eUkraineRegular,
    fontSize: 16,
    textAlign: 'center',
  },
  totalSpendTitle: {
    fontFamily: eUkraineRegular,
    fontSize: 18,
    color: colors.black,
    textAlign: 'center',
  },
});

export default styles;
