export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "...";
  }
};

export const roundToDecimal = (number: number, decimalPlaces: number) =>
  parseFloat(number.toFixed(decimalPlaces));
