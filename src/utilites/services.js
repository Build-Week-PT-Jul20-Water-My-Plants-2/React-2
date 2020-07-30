export function getToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : false;
}

export function getUserIdFromToken(token) {
    let data = window.atob(token.slice(token.indexOf(".") + 1, token.lastIndexOf(".")));
    return data.slice(data.indexOf('Id":') + 4, data.indexOf(',"user'));
}

export function isAuthenticated() {
    return !!localStorage.getItem('token');
}

export const initialPlant = {
    nickname: '',
    species: '',
    h2oFrequency: '',
};

export const initialUserState = {
    id: '',
    username: '',
    phoneNumber: '',
};

export const initialAuthState = {
    authenticated: false,
    id: '',
};
