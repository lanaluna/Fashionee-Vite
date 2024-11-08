import { createProductCard } from './createProductCard.js';
import { createHTMLElement } from './createHTMLElement.js';

export function createProductList(products) {
    //const amountOfproducts = products.length;
    const ul = document.getElementById('goods-list');

    for (let product of products) {
        ul.append(createProductCard(product));
      }

  }