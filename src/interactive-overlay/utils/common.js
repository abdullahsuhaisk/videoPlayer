const getCssProperties = (id) => {
  return window.getComputedStyle(document.getElementById(id));
};

export { getCssProperties };
