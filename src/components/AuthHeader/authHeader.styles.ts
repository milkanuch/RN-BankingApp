import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors';
import { responsiveHeight } from 'constants/dimensions';
import { eUkraineLight, eUkraineThin } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  titleText: {
    fontFamily: eUkraineLight,
    fontSize: 24,
    color: colors.black,
  },
  text: {
    fontFamily: eUkraineThin,
    fontSize: 13,
    color: colors.black,
    paddingVertical: responsiveHeight(1),
  },
});

export default styles;
