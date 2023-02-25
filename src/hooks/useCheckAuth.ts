import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { LOCALSTORAGE_NAME } from '../config/constatnts';

export const useCheckAuth = () => {
    const history = useNavigate()
    useEffect(() => {

        const storage = localStorage.getItem(LOCALSTORAGE_NAME);
        if (!storage) {
            return
        }
        if (JSON.parse(storage).token) {
            history('lk')
        }
    }, [])
}