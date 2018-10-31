/* eslint-disable-next-line */
export const doubleNum = num => {

  const str = num.toString();

  if ( str.length % 2 !== 0 ) {
    return num * 2;
  }

  const halfLength = str.length / 2;

  if ( str.slice(0, halfLength) === str.slice(halfLength) ) {
    return num;
  } else {
    return num * 2;
  }
};
