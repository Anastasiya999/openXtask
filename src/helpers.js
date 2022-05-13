const pickByFields = (data, fields) => {
  let sampleData = [];
  for (const sample of data) {
    sampleData.push(pick(sample, fields));
  }
  return sampleData;
};

function pick(obj, keys) {
  return Object.assign({}, ...keys.map((key) => ({ [key]: obj[key] })));
}

export default pickByFields;
