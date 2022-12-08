import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { eUkraineLight } from '../../constants/fonts';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenTitle: {
    fontSize: 26,
    color: colors.black,
    marginHorizontal: 20,
    marginVertical: 10,
    fontFamily: eUkraineLight,
  },
});

export default styles;
