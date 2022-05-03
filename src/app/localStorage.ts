export const USER_TOKEN = "jwt_user"

export const setValue = (key: string, val: string) => {
    localStorage.setItem(key, val);
}

export const getValue = (key: string) => {
    return localStorage.getItem(key)
}

export const removeValue = (key: string) => {
    localStorage.removeItem(key);
}