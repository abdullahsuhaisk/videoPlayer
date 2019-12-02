import { httpToHttps } from './httpTohttps';

export const sourceParser = (qualities, hls) => {
  if (hls) {
    return hls;
  }
  const sourceArray = [];
  qualities.map((item) => {
    const sourceObject = { src: null, type: null };
    sourceObject.src = httpToHttps(item.url);
    sourceObject.type = `video/${item.type}`;
    return sourceArray.push(sourceObject);
  });
  return sourceArray;
};
