import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/colors';

import { responsiveWidth } from '../../../../constants/dimensions';
import { eUkraineRegular } from '../../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(50) - 40,
    marginHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
    borderColor: colors.black,
    borderWidth: 2,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedContainer: {
    backgroundColor: colors.black,
  },
  text: {
    fontFamily: eUkraineRegular,
    fontSize: 16,
    color: colors.black,
  },
  selectedText: {
    color: colors.white,
  },
});

export default styles;
