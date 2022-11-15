import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { colors } from '../../constants/colors';

import styles from './appHeader.styles';
import {
  congratulations,
  date,
  logoutIconName,
  logoutIconSize,
  handleUserIconButton,
  userIconName,
  userIconSize,
  handleLogoutButton,
} from './appHeader.settings';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <TouchableOpacity
          style={styles.iconPadding}
          onPress={handleUserIconButton}>
          <Icon
            name={userIconName}
            size={userIconSize}
            color={colors.darkGrey}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.dateFont}>{date}</Text>
          <Text style={styles.congratulations}>{congratulations}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={handleLogoutButton}>
          <Icon
            name={logoutIconName}
            size={logoutIconSize}
            color={colors.darkGrey}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHeader;
