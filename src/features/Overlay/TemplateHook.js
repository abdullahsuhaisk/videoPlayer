import { useEffect, useState } from 'react';
import temp from './template.json';

const LoadJsons = async () => {
  // TODO: Set json method will make
  return temp;
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
