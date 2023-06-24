import {API_URL} from "../constants/constants";

export function getCart() {
    return fetch(`${API_URL}/orders/ordInCart/${window.localStorage.getItem('token') || ''}`, {
        method: 'GET',
        headers: {'Accept': 'application/json', 'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`}
    });
}

export function deleteItem(id) {
    return fetch(`${API_URL}/orders/removeCart/${id}/${window.localStorage.getItem('token') || ''}`, {
        method: 'DELETE',
        headers: {'Accept': 'application/json', 'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`}
    });
}

export function orderAllItems(date) {
    return fetch(`${API_URL}/orders/uptToBuy/${window.localStorage.getItem('token') || ''}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`
        },
        body: JSON.stringify({
            orderDate: date
        })
    });
}