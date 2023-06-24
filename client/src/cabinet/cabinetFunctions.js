import {API_URL} from "../constants/constants";

export function getOrders() {
    return fetch(`${API_URL}/orders/ord/${window.localStorage.getItem('token') || ''}`, {
        method: 'GET',
        headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`}
    });
}

export function getUser() {
    return fetch(`${API_URL}/users/${window.localStorage.getItem('token') || ''}`, {
        method: 'GET',
        headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`}
    });
}