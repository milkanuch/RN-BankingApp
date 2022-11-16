import { IPinCodeButtonProps } from '../PinCodeButton/pinCodeButton.types';

import { IPinCodeFunctions } from './pinCodeKeyboard.types';

const getDataList: (functions: IPinCodeFunctions) => IPinCodeButtonProps[] = ({
  addNumber,
  removeNumber,
  onFingerprint,
  isTouchIdDisabled,
}: IPinCodeFunctions) => {
  return [
    { title: '1', onPress: () => addNumber('1'), isDisabled: false },
    { title: '2', onPress: () => addNumber('2'), isDisabled: false },
    { title: '3', onPress: () => addNumber('3'), isDisabled: false },
    { title: '4', onPress: () => addNumber('4'), isDisabled: false },
    { title: '5', onPress: () => addNumber('5'), isDisabled: false },
    { title: '6', onPress: () => addNumber('6'), isDisabled: false },
    { title: '7', onPress: () => addNumber('7'), isDisabled: false },
    { title: '8', onPress: () => addNumber('8'), isDisabled: false },
    { title: '9', onPress: () => addNumber('9'), isDisabled: false },
    {
      iconName: 'fingerprint',
      onPress: onFingerprint,
      isDisabled: isTouchIdDisabled ? true : false,
    },
    { title: '0', onPress: () => addNumber('0'), isDisabled: false },
    { iconName: 'backspace-outline', onPress: removeNumber, isDisabled: false },
  ];
};
export default getDataList;
