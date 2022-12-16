import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { responsiveHeight } from 'constants/dimensions';

import { E_UKRAINE_REGULAR } from 'constants/fonts';

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
    backgroundColor: COLORS.light.primary[200],
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.light.primary[200],
  },
  focused: {
    borderColor: COLORS.black,
  },
  title: {
    fontFamily: E_UKRAINE_REGULAR,
    color: COLORS.black,
    fontSize: 13,
    marginBottom: 6,
  },
  hintText: {
    fontFamily: E_UKRAINE_REGULAR,
    color: COLORS.grey,
    fontSize: 12,
    marginRight: 10,
  },
  error: {
    borderColor: COLORS.red,
  },
  errorText: {
    fontSize: 11,
    color: COLORS.red,
    paddingHorizontal: responsiveHeight(1),
  },
});

export default styles;
