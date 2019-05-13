const getCssProperties = (id) => {
  return window.getComputedStyle(document.getElementById(id));
};

const findPrev = (arr, target) => {
  let beginning = 0;
  let end = arr.length;
  while (end - beginning > 1) {
    const currentIndex = Math.floor((beginning + end) / 2);
    if (arr[currentIndex] < target) {
      beginning = currentIndex;
    } else if (arr[currentIndex] > target) {
      end = currentIndex;
    } else {
      beginning = currentIndex;
      end = currentIndex;
    }
  }
  const max = arr[beginning];
  return max;
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

export { getCssProperties, findPrev, findTimeRange };
