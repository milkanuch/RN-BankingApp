import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';

const styles = StyleSheet.create({
  progressBarContainer: {
    width: '100%',
    height: '13%',
    marginBottom: 5,
    backgroundColor: COLORS.lightGrey,
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    backgroundColor: COLORS.black,
    height: '100%',
    borderRadius: 10,
  },
});

export default styles;
