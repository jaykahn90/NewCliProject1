import {ADD_TO_CART} from './constants';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function removeFromCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}
