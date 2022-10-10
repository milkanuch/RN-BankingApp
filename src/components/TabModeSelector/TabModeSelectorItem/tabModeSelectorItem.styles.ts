import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14.25,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: colors.white,
  },
  selectedContainer: {
    backgroundColor: colors.black,
  },
  underlayContainer: {
    borderRadius: 30,
  },
  title: {
    color: colors.black,
    fontSize: 12,
  },
  selectedTitle: {
    color: colors.white,
  },
});

export default styles;
