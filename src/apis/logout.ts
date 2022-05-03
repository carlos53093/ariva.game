import axios from "axios"
import { removeValue,getValue, USER_TOKEN } from "../app/localStorage"

export const logout = async() => {
    try{
        const jwt = getValue(USER_TOKEN)
        const data = await axios.get(`${process.env.REACT_APP_LOGOUT_URL}`, { headers: {"Authorization" : `Bearer ${jwt}`} })
        console.log('res Data', data);
        removeValue(USER_TOKEN)
        return true;
    } catch (e) {
        console.log(e)
        alert('Something went wrong in logout!')
        return false;
    }
}