const saucesTypes = [
  {
    name: 'Томатный',
    value: 'tomato'
  },
  {
    name: 'Сливочный',
    value: 'creamy'
  }
];

export const normalizeSauce = (sauces) => {
  return sauces.length
    ? sauces.map((sauce) => {
        return {
          ...sauce,
          value: saucesTypes.find((type) => type.name === sauce.name).value
        };
      })
    : [];
};
