export default function iterateThroughObject(reportWithIterator) {
  const resultArray = [];

  for (const item of reportWithIterator) {
    resultArray.push(item);
  }

  return resultArray.join(' | ');
}
