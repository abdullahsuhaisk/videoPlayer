import { useEffect, useState } from 'react';
import temp from './template.json';
import template3 from '../../components/Template3/Template3.json';

const LoadJsons = async () => {
  // TODO: Set json method will make
  // return temp;
  return template3;
};
// function loadjson() {
//   return new Promise((res, rej) => {
//     res(temp);
//   });
// }

export function useTemplate() {
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    LoadJsons().then((res) => {
      setTemplate(res);
    });
  }, [template]);
  return template;
}

function addCustomCss(url) {
  // it must to move index.js
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', url);
  document.getElementsByTagName('head')[0].appendChild(link);
}

export function useCss() {
  useEffect(() => {
    // addCustomCss('/css/overlay.css');
    addCustomCss('/css/template3.css');
  }, []);
}
