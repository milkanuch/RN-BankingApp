export const getTransactionSum = (
  profit: boolean,
  sum: number,
  currency: string,
) => (profit ? '+' : '-') + Number(sum.toFixed(0)) + ` ${currency}`;

export const getTransactionDate = (time: Date) =>
  new Date(time).toLocaleDateString();

export const getFormatedDate = (time: Date) =>
  new Date(time).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
