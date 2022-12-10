import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors';

import { width } from 'constants/dimensions';
import { eUkraineRegular } from 'constants/fonts';

const containerWidth = width - 40;

const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    marginHorizontal: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.black,
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
    color: colors.grey,
    fontSize: 14,
    fontFamily: eUkraineRegular,
  },
  moneyText: {
    color: colors.black,
    fontSize: 17,
    fontFamily: eUkraineRegular,
  },
});

export default styles;
