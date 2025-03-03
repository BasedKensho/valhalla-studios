export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const getVisibleIndexes = (current: number, total: number) => {
  const prev = wrap(0, total, current - 1);
  const next = wrap(0, total, current + 1);
  return [prev, current, next];
};