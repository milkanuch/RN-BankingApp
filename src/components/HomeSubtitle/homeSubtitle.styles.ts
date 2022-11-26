import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { eUkraineLight } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  title: {
    color: colors.darkGrey,
    fontFamily: eUkraineLight,
    fontSize: 18,
    marginTop: 10,
  },
  buttonTitle: {
    fontFamily: eUkraineLight,
  },
});

export default styles;
