import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/colors';

import { width } from '../../../../constants/dimensions';

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
    fontFamily: 'e-Ukraine-Regular',
  },
  moneyText: {
    color: colors.black,
    fontSize: 17,
    fontFamily: 'e-Ukraine-Regular',
  },
});

export default styles;
