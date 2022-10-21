const credentialsRegex =
  /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

const phoneNumberRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

const personalDataRegex = /^\d{10}$/;

export const phoneNumberValidation = (phoneNumber: string) =>
  phoneNumberRegex.test(phoneNumber);

export const passwordValidation = (password: string) =>
  passwordRegex.test(password);

export const credentialsValidation = (personalData: string) =>
  credentialsRegex.test(personalData);

export const personalDataValidation = (personalData: string) =>
  personalDataRegex.test(personalData);
