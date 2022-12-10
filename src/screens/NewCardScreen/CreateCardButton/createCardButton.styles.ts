import { StyleSheet } from 'react-native';

import { responsiveWidth } from 'constants/dimensions';

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100) - 40,
    marginHorizontal: 20,
    marginVertical: 5,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'stretch',
  },
});

export default styles;
