import { StyleSheet } from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
} from '../../../constants/dimensions';

const styles = StyleSheet.create({
  cardSettingsContainer: {
    flex: 1,
    marginTop: responsiveHeight(5),
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemWidth: {
    width: responsiveWidth(38),
  },
});

export default styles;
