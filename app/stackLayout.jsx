import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFromLocalStorage } from '../utils/localStorage';
import { setToken } from './redux/authSlice';
export default function StackLayout() {
    const token = useSelector((state)=>state.auth.token);
    const dispatch = useDispatch();

    useEffect(()=>{
        async function fetchToken() {
            const token = await getFromLocalStorage('token');
            if(token) {
                dispatch(setToken(token));
            }
        }
        if(!token) {
            fetchToken();
        }
    }, [token]);

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
            <Stack.Screen name="anime/[id]" options={{ headerShown: false }}  />
            <Stack.Screen name="animeSearch/animeSearch" options={{ headerShown: false }}  />
            <Stack.Screen name="animeRecommendation/animeRecommendation" options={{ headerShown: false }}  />
        </Stack>
    )
}