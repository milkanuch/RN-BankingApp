import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors';

import { eUkraineThin, eUkraineRegular, eUkraineBold } from 'constants/fonts';

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
    fontFamily: eUkraineThin,
  },
  cardProvider: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: eUkraineRegular,
  },
  total: {
    color: colors.black,
    fontFamily: eUkraineRegular,
  },
  currency: {
    color: colors.black,
    fontFamily: eUkraineBold,
    marginLeft: 5,
  },
});

export default styles;
