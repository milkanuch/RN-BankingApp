import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useAppSelector } from '../../store';
import { selectIsLogged } from '../../store/user/userSlice';

import AuthStackNavigation from '../AuthStackNavigation/AuthStackNavigation';
import BottomNavigation from '../BottomNavigation';

import { appTheme } from './appNavigation.settings';

const AppNavigation = () => {
  const isLogged = useAppSelector(selectIsLogged);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={appTheme}>
        {isLogged ? <BottomNavigation /> : <AuthStackNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
