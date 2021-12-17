export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  unique = unique.flat();
  return ['all', ...new Set(unique)];
};
