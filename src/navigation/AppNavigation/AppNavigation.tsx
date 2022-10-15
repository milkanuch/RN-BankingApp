import { NavigationContainer } from '@react-navigation/native';

import { useAppSelector } from '../../store';
import { selectIsLogged } from '../../store/user/userSlice';

import AuthStackNavigation from '../AuthStackNavigation/AuthStackNavigation';
import BottomNavigation from '../BottomNavigation';

const AppNavigation = () => {
  const isLogged = useAppSelector(selectIsLogged);

  return (
    <NavigationContainer>
      {isLogged ? <BottomNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
