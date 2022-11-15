import { authenticateAsync, isEnrolledAsync } from 'expo-local-authentication';
import { useCallback } from 'react';

import { PIN_CODE_OPTIONS } from '../screens/PinCodeScreen/pinCodeScreen.settings';
import { useAppDispatch } from '../store';
import { setUserIsLogged } from '../store/user/userSlice';

export const useFingerPrint = () => {
  const dispatch = useAppDispatch();

  const onFingerprint = useCallback(async () => {
    const isEnrolled = await isEnrolledAsync();

    if (isEnrolled) {
      const isSuccess = await authenticateAsync(PIN_CODE_OPTIONS);
      if (isSuccess.success) {
        dispatch(setUserIsLogged(true));
      }
    }
  }, [dispatch]);

  return { onFingerprint };
};
