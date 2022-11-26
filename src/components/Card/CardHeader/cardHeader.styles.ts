import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';

import { eUkraineRegular } from './../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: eUkraineRegular,
    color: colors.white,
  },
});

export default styles;
