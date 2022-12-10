import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors';

import { eUkraineThin } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  text: {
    fontFamily: eUkraineThin,
    fontSize: 13,
    color: colors.white,
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default styles;
