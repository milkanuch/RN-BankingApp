import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors';
import { responsiveHeight } from 'constants/dimensions';

const styles = StyleSheet.create({
  button: {
    borderColor: colors.white,
    fontSize: 24,
    color: colors.white,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(10),
    width: responsiveHeight(10),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.white,
    marginVertical: responsiveHeight(2),
    marginHorizontal: 20,
  },
  iconContainer: {
    borderWidth: 0,
  },
});

export default styles;
