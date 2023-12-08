export default function cleanSet(set, startString) {
  // Check if set is not an object, or startString is not a string, or startString is empty
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const list = [];

  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      list.push(item.slice(startString.length));
    }
  }

  return list.join('-');
}
