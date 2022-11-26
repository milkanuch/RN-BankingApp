import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { eUkraineLight } from '../../constants/fonts';

const styles = StyleSheet.create({
  scren: {
    flex: 1,
  },
  cardSettingsTitle: {
    fontSize: 26,
    color: colors.black,
    marginLeft: 20,
    marginTop: 5,
    fontFamily: eUkraineLight,
  },
});

export default styles;
