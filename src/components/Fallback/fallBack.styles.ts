import { StyleSheet } from 'react-native';

import { responsiveHeight } from '../../constants/dimensions';

import { colors } from './../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 48,
    fontFamily: 'e-Ukraine-Bold',
    paddingBottom: responsiveHeight(2),
    color: colors.black,
  },
  subtitle: {
    fontSize: 32,
    fontFamily: 'e-Ukraine-Regular',
    color: colors.black,
  },
  error: {
    paddingVertical: responsiveHeight(2),
  },
});

export default styles;
