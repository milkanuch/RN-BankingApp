import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
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
    borderColor: COLORS.grey,
  },
  codeFull: {
    width: responsiveHeight(1.7),
    height: responsiveHeight(1.7),
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
  },
  container: {
    marginTop: responsiveHeight(8),
  },
  text: {
    color: COLORS.white,
    fontSize: 17,
  },
});

export default styles;
