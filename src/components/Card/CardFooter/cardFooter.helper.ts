export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-us', {
    month: '2-digit',
    year: '2-digit',
  });
};

export const showCardNumber = (cardNumber: string, isSecured: boolean) => {
  if (!isSecured) {
    return cardNumber;
  }
  const parts = cardNumber.split(' ');
  return parts[0] + ' ●●●● ●●●● ' + parts[3];
};
