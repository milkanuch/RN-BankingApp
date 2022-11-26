import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { responsiveHeight } from '../../constants/dimensions';

import { eUkraineRegular } from './../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(13),
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '7%',
    backgroundColor: colors.light.primary[200],
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.light.primary[200],
  },
  focused: {
    borderColor: colors.black,
  },
  title: {
    fontFamily: eUkraineRegular,
    color: colors.black,
    fontSize: 13,
    marginBottom: 6,
  },
  hintText: {
    fontFamily: eUkraineRegular,
    color: colors.grey,
    fontSize: 12,
    marginRight: 10,
  },
  error: {
    borderColor: colors.red,
  },
  errorText: {
    fontSize: 11,
    color: colors.red,
    paddingHorizontal: responsiveHeight(1),
  },
});

export default styles;
