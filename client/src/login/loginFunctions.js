import {API_URL} from "../constants/constants";

export function getLogin(email, password) {
    return fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
}