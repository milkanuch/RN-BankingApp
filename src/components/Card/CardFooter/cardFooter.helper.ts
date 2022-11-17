export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-us', {
    month: '2-digit',
    year: '2-digit',
  });
};

export const formatedCardNumber = (cardNumber: string): string => {
  const parts = cardNumber.split(' ');
  if (parts.length === 4) {
    return cardNumber;
  }
  let result = '';
  for (let i = 1; i <= 4; i++) {
    result += cardNumber.slice(4 * (i - 1), 4 * i);
    if (i !== 4) {
      result += ' ';
    }
  }
  return result;
};

export const showCardNumber = (cardNumber: string, isSecured: boolean) => {
  if (!isSecured) {
    return formatedCardNumber(cardNumber);
  }
  const parts = formatedCardNumber(cardNumber).split(' ');
  return parts[0] + ' ●●●● ●●●● ' + parts[3];
};
