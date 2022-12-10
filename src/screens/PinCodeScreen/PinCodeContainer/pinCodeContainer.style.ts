import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors';
import { responsiveHeight } from 'constants/dimensions';

const styles = StyleSheet.create({
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  codeEmpty: {
    width: responsiveHeight(1.7),
    height: responsiveHeight(1.7),
    borderRadius: 13,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  codeFull: {
    width: responsiveHeight(1.7),
    height: responsiveHeight(1.7),
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  container: {
    marginTop: responsiveHeight(8),
  },
  text: {
    color: colors.white,
    fontSize: 17,
  },
});

export default styles;
