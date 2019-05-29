const getCssProperties = (id) => {
  return window.getComputedStyle(document.getElementById(id));
};

const findTimeRange = (arr, target) => {
  let beginning = 0;
  let end = arr.length;

  if (target < arr[beginning]) {
    return [0, 0];
  }

  while (end - beginning > 1) {
    const currentIndex = Math.floor((beginning + end) / 2);
    if (arr[currentIndex] < target) {
      beginning = currentIndex;
    } else if (arr[currentIndex] > target) {
      end = currentIndex;
    } else {
      beginning = currentIndex;
      end = currentIndex + 1;
      break;
    }
  }

  const min = arr[beginning];
  const max = arr[end];
  return [min, max];
};

const escapeRegExp = (str) => {
  // eslint-disable-next-line no-useless-escape
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
};
const replaceAll = (str, find, replace) => {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
};

export { getCssProperties, findTimeRange, escapeRegExp, replaceAll };
