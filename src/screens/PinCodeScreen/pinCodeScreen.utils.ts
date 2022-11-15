export const isEqual = (previous: string[], current: string[]) => {
  return (
    previous.length === current.length &&
    previous.every(function (value, index) {
      return value === current[index];
    })
  );
};
