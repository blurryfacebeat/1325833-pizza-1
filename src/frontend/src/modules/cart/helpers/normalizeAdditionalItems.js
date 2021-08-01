import additionalItemsList from '@/static/misc.json';

export const normalAdditionalItemsList = () => {
  return additionalItemsList.length
    ? additionalItemsList.map((item) => {
        return {
          ...item,
          count: 0
        };
      })
    : [];
};
