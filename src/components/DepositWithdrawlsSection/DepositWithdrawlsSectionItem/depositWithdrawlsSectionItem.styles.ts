import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  card: {
    flex: 1,
  },
  money: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  date: {
    fontFamily: 'e-Ukraine-Thin',
  },
  cardProvider: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'e-Ukraine-Regular',
  },
  total: {
    color: colors.black,
    fontFamily: 'e-Ukraine-Regular',
  },
  currency: {
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: 'e-Ukraine-Regular',
    marginLeft: 5,
  },
});

export default styles;
