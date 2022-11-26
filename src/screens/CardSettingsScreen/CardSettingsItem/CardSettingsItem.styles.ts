import { StyleSheet } from 'react-native';

import { responsiveHeight } from '../../../constants/dimensions';

import { eUkraineBold, eUkraineRegular } from './../../../constants/fonts';

import { colors } from './../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderBottomWidth: responsiveHeight(0.1),
    borderBottomColor: colors.grey,
  },
  title: {
    fontSize: 14,
    fontFamily: eUkraineBold,
    color: colors.black,
  },
  contentText: {
    paddingVertical: 8,
    fontSize: 12,
    fontFamily: eUkraineRegular,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: colors.black,
  },
});

export default styles;
