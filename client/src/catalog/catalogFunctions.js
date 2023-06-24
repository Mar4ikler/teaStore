import {API_URL} from "../constants/constants";

export function getProducts() {
    return fetch(`${API_URL}/products`, {
        method: 'GET',
        headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`}
    });
}

export function postProductToCart(item) {
    return fetch(`${API_URL}/orders/addToCart/${window.localStorage.getItem('token') || ''}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`},
        body: JSON.stringify({
            product_id: item.product_id,
            quantity: 1,
            price: +item.price
        })
    });
}