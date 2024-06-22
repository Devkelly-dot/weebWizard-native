import React, { createContext, useState, useEffect, useContext } from 'react';
import { authPost } from '../../../utils/authFetch';
import { useSelector } from 'react-redux';

export const AnimeRecommendationsContext = createContext();

export const AnimeRecommendationsProvider = ({ children, animeName }) => {
    const token = useSelector((state)=>state.auth.token);

    const [animeRecommendationsForm, setAnimeRecommendationsForm] = useState({
        title: '',
        reason: ''
    })
    const [animeRecommendations, setAnimeRecommendations] = useState(null);
    const [animeRecommendationsLoading, setAnimeRecommendationsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getAnimeRecommendations() {
        try {
            setAnimeRecommendationsLoading(true);
            const response = await authPost(`v1/recommendations`, token, animeRecommendationsForm);
            if(response?.error) {
                if(response?.status === 401) {
                    console.log(response);
                    setError(response?.error?.message?response.error.message:response?.error);
                } else {
                    if(response?.error?.message) {
                        setError(response?.error?.message);
                    } else if(typeof response?.error === 'string') {
                        setError(response?.error);
                    }
                }
            } else {
                setAnimeRecommendations(response);
                setError(null);
            }
        } catch (err) {
            setError(err);
        } finally {
            setAnimeRecommendationsLoading(false);
        }
    }

    return (
        <AnimeRecommendationsContext.Provider 
            value={{ 
                animeRecommendationsForm, setAnimeRecommendationsForm, getAnimeRecommendations, 
                animeRecommendations, setAnimeRecommendations, animeRecommendationsLoading, error, setError
            }}
        >
            {children}
        </AnimeRecommendationsContext.Provider>
    );
};

export const useAnimeRecommendations = () => useContext(AnimeRecommendationsContext);
