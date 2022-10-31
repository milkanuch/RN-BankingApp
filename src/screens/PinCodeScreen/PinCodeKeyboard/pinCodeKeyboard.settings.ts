import { IPinCodeButtonProps } from '../PinCodeButton/pinCodeButton.types';

import { IPinCodeFunctions } from './pinCodeKeyboard.types';

const getDataList: (functions: IPinCodeFunctions) => IPinCodeButtonProps[] = ({
  addNumber,
  removeNumber,
  onFingerprint,
}: IPinCodeFunctions) => {
  return [
    { title: '1', onPress: () => addNumber('1') },
    { title: '2', onPress: () => addNumber('2') },
    { title: '3', onPress: () => addNumber('3') },
    { title: '4', onPress: () => addNumber('4') },
    { title: '5', onPress: () => addNumber('5') },
    { title: '6', onPress: () => addNumber('6') },
    { title: '7', onPress: () => addNumber('7') },
    { title: '8', onPress: () => addNumber('8') },
    { title: '9', onPress: () => addNumber('9') },
    { iconName: 'fingerprint', onPress: onFingerprint },
    { title: '0', onPress: () => addNumber('0') },
    { iconName: 'backspace-outline', onPress: removeNumber },
  ];
};
export default getDataList;
