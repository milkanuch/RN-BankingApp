import { StyleSheet } from 'react-native';

import { responsiveWidth } from 'constants/dimensions';

import { eUkraineRegular, eUkraineBold, eUkraineThin } from 'constants/fonts';

import { colors } from 'constants/colors';

const styles = StyleSheet.create({
  centerLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 10,
    paddingHorizontal: responsiveWidth(8.4),
    borderWidth: 2,
    borderColor: colors.lightGrey,
    borderRadius: 360,
  },
  monthText: {
    fontFamily: eUkraineRegular,
    fontSize: 14,
  },
  yearText: {
    fontFamily: eUkraineBold,
    color: colors.black,
    textAlign: 'center',
    fontSize: 22,
  },
  totalSpendText: {
    fontFamily: eUkraineThin,
    color: colors.black,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default styles;
