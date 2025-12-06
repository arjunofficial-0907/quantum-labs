const TOKEN_KEY = "ql_token";
const USER_KEY = "ql_user";

export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

export const saveUser = (user) => localStorage.setItem(USER_KEY, JSON.stringify(user));
export const getUser = () => JSON.parse(localStorage.getItem(USER_KEY));
export const clearUser = () => localStorage.removeItem(USER_KEY);

export const clearStorage = () => localStorage.clear();
