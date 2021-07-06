const sizesTypes = [
  {
    name: '23 см',
    value: 'small'
  },
  {
    name: '32 см',
    value: 'normal'
  },
  {
    name: '45 см',
    value: 'big'
  }
];

export const normalizeSizes = (sizes) => {
  return sizes.length
    ? sizes.map((size) => {
        return {
          ...size,
          type: sizesTypes.find((type) => type.name === size.name).value
        };
      })
    : [];
};
