export const reduceAddress = (address: string) => {
  let start = address.substring(0, 6);
  let end = address.substring(address.length - 6);

  return start + '...' + end;
};
