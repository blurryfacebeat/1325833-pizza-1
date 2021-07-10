const doughsTypes = [
  {
    name: 'Тонкое',
    value: 'light',
    size: 'small'
  },
  {
    name: 'Толстое',
    value: 'large',
    size: 'big'
  }
];

export const normalizeDough = (doughs) => {
  return doughs.length
    ? doughs.map((dough) => {
        return {
          ...dough,
          type: doughsTypes.find((type) => type.name === dough.name).value,
          size: doughsTypes.find((type) => type.name === dough.name).size
        };
      })
    : [];
};
