export interface IPinCodeKeyboardProps {
  functions: IPinCodeFunctions;
}

export interface IPinCodeFunctions {
  addNumber: (number: string) => void;
  removeNumber: () => void;
  onFingerprint: () => void;
}
