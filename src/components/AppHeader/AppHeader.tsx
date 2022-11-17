import { Text, View } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { useUserInfoQuery, useUserLogoutMutation } from '../../services';

import { useAppDispatch } from '../../store';

import { setUserIsLogged } from '../../store/user/userSlice';

import useRefreshToken from '../../hooks/useRefreshToken';

import {
  AppHeaderProps,
  HomeStackScreenTypes,
} from '../../navigation/HomeStackNavigation/homeStackNavigation.types';

import styles from './appHeader.styles';
import {
  congratulations,
  date,
  logoutIconName,
  logoutIconSize,
  userIconName,
  userIconSize,
} from './appHeader.settings';
import AppHeaderButton from './AppHeaderButton/AppHeaderButton';

const AppHeader = () => {
  const { data, isLoading } = useUserInfoQuery();
  const { refreshToken } = useRefreshToken();
  const [logout] = useUserLogoutMutation();

  const dispatch = useAppDispatch();
  const navigation = useNavigation<AppHeaderProps>();

  const handleLogoutButton = () => {
    dispatch(setUserIsLogged(false));
    logout({ refreshToken });
  };

  const handleUserButton = () => {
    navigation.navigate(HomeStackScreenTypes.Profile);
  };

  if (isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <AppHeaderButton
          iconName={userIconName}
          iconSize={userIconSize}
          style={styles.iconPadding}
          onPress={handleUserButton}
        />
        <View>
          <Text style={styles.dateFont}>{date}</Text>
          <Text style={styles.congratulations}>
            {congratulations + data?.firstName + '!'}
          </Text>
        </View>
      </View>
      <AppHeaderButton
        iconName={logoutIconName}
        iconSize={logoutIconSize}
        onPress={handleLogoutButton}
      />
    </View>
  );
};

export default AppHeader;
