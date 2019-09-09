export const httpToHttps = (url) => {
  if (url.search('https') === -1) {
    url.replace('http', 'https');
    return url.replace('http', 'https');
  }
  return url;
};
