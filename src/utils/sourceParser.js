export const sourceParser = (qualities) => {
  const sourceArray = [];
  qualities.map((item) => {
    const sourceObject = { src: null, type: null };
    sourceObject.src = item.url;
    sourceObject.type = `video/${item.type}`;
    return sourceArray.push(sourceObject);
  });
  return sourceArray;
};
