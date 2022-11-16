export const isExpiredDate = (date: string) => {
  return new Date(date) > new Date();
};
