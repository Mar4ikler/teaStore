export function responseHandler(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
            if (response.status === 401) {
                window.localStorage.removeItem('token');
                window.location.assign("http://localhost:3001/login");
                return;
            }
            // const error = (data && data.message) || response.statusText;
            // return Promise.reject(error);
        return data;
    })
}