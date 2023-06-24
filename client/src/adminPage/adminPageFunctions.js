import {API_URL} from "../constants/constants";

export function postProduct(item) {
    return fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`},
        body: JSON.stringify({
            product_name: item.name,
            description: item.description,
            productImage: item.productImage,
            price: +item.price,
            category_id: 1,
            brewingTemperature: item.brewingTemperature
        })
    });
}