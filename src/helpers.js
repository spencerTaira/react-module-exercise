var _ = require('lodash');

function choice(items) {
  return _.sample(items);
}

function remove(items, item) {
  const idx = items.indexOf(item);
  if (idx === -1) return undefined;
  return items.splice(idx, 1)
}

export {choice, remove};