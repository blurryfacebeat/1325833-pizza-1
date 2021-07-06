const doughsTypes = [
  {
    name: 'Тонкое',
    value: 'light'
  },
  {
    name: 'Толстое',
    value: 'large'
  }
];

export const normalizeDough = (doughs) => {
  return doughs.length
    ? doughs.map((dough) => {
        return {
          ...dough,
          type: doughsTypes.find((type) => type.name === dough.name).value
        };
      })
    : [];
};
