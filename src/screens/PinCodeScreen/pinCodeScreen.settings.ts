import { LocalAuthenticationOptions } from 'expo-local-authentication';

export const PIN_CODE_OPTIONS: LocalAuthenticationOptions = {
  promptMessage: 'Scan to Sign In',
  disableDeviceFallback: true,
  cancelLabel: 'Use Pin-Code',
};

export const PIN_CODE_LENGTH = 4;
