import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleContainer: {
    paddingBottom: 20,
  },
  titleText: {
    fontFamily: 'e-Ukraine-Bold',
    fontSize: 28,
    color: colors.black,
  },
  subtitleText: {
    fontFamily: 'e-Ukraine-Regular',
    fontSize: 18,
    color: colors.darkGrey,
  },
});

export default styles;
