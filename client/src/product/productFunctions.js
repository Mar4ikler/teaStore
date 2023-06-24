import {API_URL} from "../constants/constants";

export function getProduct(id) {
    return fetch(`${API_URL}/products/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    });
}