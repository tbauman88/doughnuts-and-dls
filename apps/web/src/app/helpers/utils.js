import { doughnuts, drinks } from '../data';

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const types = {
  '>': drinks,
  '#': doughnuts
};

const random = items => items[Math.floor(Math.random() * items.length)];

export const recent = [
  random(doughnuts),
  random(drinks),
  random(drinks),
  random(doughnuts)
];

export const filter = query => {
  let items = [...drinks, ...doughnuts];
  const symbol = Object.keys(types).find(type => type === query);

  if (query.startsWith('>') || query.startsWith('#')) {
    items = types[query];
  }

  return query === symbol
    ? items
    : query === '' || query.startsWith(symbol)
    ? []
    : items.filter(item => item.name.toLowerCase().includes(query));
};
