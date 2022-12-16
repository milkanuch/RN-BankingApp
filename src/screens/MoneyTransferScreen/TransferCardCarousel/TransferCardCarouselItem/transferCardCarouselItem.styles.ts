import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

import { width } from 'constants/dimensions';
import { E_UKRAINE_REGULAR } from 'constants/fonts';

const containerWidth = width - 40;

const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    marginHorizontal: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: COLORS.black,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  text: {
    color: COLORS.grey,
    fontSize: 14,
    fontFamily: E_UKRAINE_REGULAR,
  },
  moneyText: {
    color: COLORS.black,
    fontSize: 17,
    fontFamily: E_UKRAINE_REGULAR,
  },
});

export default styles;
