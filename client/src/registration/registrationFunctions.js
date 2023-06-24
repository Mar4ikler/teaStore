import {API_URL} from "../constants/constants";

export function registration(username, email, password) {
    return fetch(`${API_URL}/auth/registry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            role: 0
        })
    });
}