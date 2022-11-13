import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/colors';

import { responsiveWidth } from '../../../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(33) - 40,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 16,
    borderColor: colors.black,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedContainer: {
    backgroundColor: colors.black,
  },
  text: {
    fontFamily: 'e-Ukraine-Regular',
    color: colors.black,
  },
  selectedText: {
    color: colors.white,
  },
});

export default styles;
