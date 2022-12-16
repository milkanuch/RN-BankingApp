import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { responsiveHeight, width } from 'constants/dimensions';
import { E_UKRAINE_REGULAR } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkGrey,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 20,
    color: COLORS.white,
  },
  text: {
    fontFamily: E_UKRAINE_REGULAR,
    fontSize: responsiveHeight(2.5),
    color: COLORS.white,
    textAlign: 'center',
  },
  buttonContainer: {
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    width: width - 40,
  },
});

export default styles;
