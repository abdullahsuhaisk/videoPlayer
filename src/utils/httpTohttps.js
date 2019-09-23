export const httpToHttps = (url) => {
  if (!url) return null;
  if (url.search('https') === -1) {
    url.replace('http', 'https');
    return url.replace('http', 'https');
  }
  return url;
};
