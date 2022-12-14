import { Text, View } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { useUserInfoQuery, useUserLogoutMutation } from 'services/index';

import { useAppDispatch } from 'store/index';

import { setUserIsLogged } from 'store/user/userSlice';

import useRefreshToken from 'hooks/useRefreshToken';

import {
  AppHeaderProps,
  HomeStackScreenTypes,
} from 'navigation/HomeStackNavigation/homeStackNavigation.types';

import {
  date,
  logoutIconName,
  logoutIconSize,
  userIconName,
  userIconSize,
} from './appHeader.settings';
import AppHeaderButton from './AppHeaderButton/AppHeaderButton';
import styles from './appHeader.styles';
import { congratulations } from './appHeader.helpers';

const AppHeader = () => {
  const { data, isLoading } = useUserInfoQuery();
  const { refreshToken } = useRefreshToken();
  const [logout] = useUserLogoutMutation();

  const dispatch = useAppDispatch();
  const { navigate } = useNavigation<AppHeaderProps>();

  const handleLogoutButton = () => {
    dispatch(setUserIsLogged(false));
    logout({ refreshToken });
  };

  const handleUserButton = () => {
    navigate(HomeStackScreenTypes.Profile);
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
            {congratulations(data?.firstName)}
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
