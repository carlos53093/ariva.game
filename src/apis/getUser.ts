import axios from "axios"
import { getValue, USER_TOKEN } from "../app/localStorage"

export const getUser = async() => {
    try{
        const jwt = getValue(USER_TOKEN)
        const res = await axios.get(`${process.env.REACT_APP_GETUSER_URL}`, { headers: {"Authorization" : `Bearer ${jwt}`} })
        return res.data;
    } catch (e) {
        console.log(e)
        alert('Something went wrong in getUser!')
        return null;
    }
}