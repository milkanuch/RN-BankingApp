import { StyleSheet } from 'react-native';

import { colors } from './../../constants/colors';

const styles = StyleSheet.create({
  progressBarContainer: {
    width: '100%',
    height: '13%',
    marginBottom: 5,
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
  },
  progressBar: {
    backgroundColor: colors.black,
    height: '100%',
    borderRadius: 10,
  },
});

export default styles;
