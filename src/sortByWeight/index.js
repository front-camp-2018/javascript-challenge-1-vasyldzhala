/* eslint-disable-next-line */
export const sortByWeight = arr => {

  const weigh = str => {
    return str
      .split('')
      .reduce((sum, item) => {
        return sum + Number(item);
      }, 0);
  };

  return arr
    .slice()
    .sort((x, y) => {
      return weigh(x) - weigh(y);
    });

};
