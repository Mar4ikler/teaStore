import {API_URL} from "../constants/constants";

export function getReviews() {
    return fetch(`${API_URL}/reviews`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`}
    });
}

export function postReview(text, date) {
    return fetch(`${API_URL}/reviews/${window.localStorage.getItem('token') || ''}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${window.localStorage.getItem('token') || ''}`},
        body: JSON.stringify({
            review_text: text,
            date: date
        })
    });
}