export const incrementHandler = (number, setNumber) => {
  if (number < 100) {
    setNumber(number + 1);
  }
};
export const decrementHandler = (number, setNumber) => {
  if (number > 0) {
    setNumber(number - 1);
  }
};
