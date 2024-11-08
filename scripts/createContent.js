import {createProductList} from '../scripts/createProductList.js';


//TODO: прочитать про фетч
//прочитать про модули




fetch('./products.json')
.then(response => {
  if (!response.ok) {
    throw new Error('Ой, ошибка в fetch: ' + response.statusText);
  }
  return response.json();
})
.then(jsonData => createProductList(jsonData))
.catch(error => console.error('Ошибка при исполнении запроса: ', error));




