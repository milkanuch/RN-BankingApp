const credentialsRegex =
  /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

const phoneNumberRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

const personalDataRegex = /^\d{10}$/;

const oldPassportFormat = /^[А-ЯA-Z]{2}\d{6}$/;

const sixteenPassportFormat = /^\d{13}$/;

const twentyPassportFormat = /^\d{9}$/;

const moneyRegex = /^[0-9]+(\.[0-9]{1,2})?$/;

const luhn = (cardNumber: string): number => {
  let sum = 0;
  for (let i = 0; i < cardNumber.length; i++) {
    if (i % 2 === 1) {
      sum = sum + +cardNumber.substring(i, i + 1);
    } else {
      let add = +cardNumber.substring(i, i + 1) * 2;
      if (add > 9) {
        add = (add % 10) + 1;
      }
      sum += add;
    }
  }
  return (sum * 9) % 10;
};

export const phoneNumberValidation = (phoneNumber: string) =>
  phoneNumberRegex.test(phoneNumber);

export const passwordValidation = (password: string) =>
  passwordRegex.test(password);

export const credentialsValidation = (personalData: string) =>
  credentialsRegex.test(personalData);

export const personalDataValidation = (personalData: string) =>
  personalDataRegex.test(personalData);

export const passportValidation = (passport: string) =>
  oldPassportFormat.test(passport) ||
  sixteenPassportFormat.test(passport) ||
  twentyPassportFormat.test(passport);

export const moneyValidation = (money: string) => moneyRegex.test(money);

export const cardNumberValidation = (cardNumber: string) => {
  if (cardNumber.length !== 16) {
    return false;
  }
  const lastNumber = +cardNumber[15];
  return lastNumber === luhn(cardNumber.slice(0, 15));
};
