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
    const [animeRecommendationsLoading, setAnimeRecommendationsLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getAnimeRecommendations() {
        try {
            setAnimeRecommendationsLoading(true);
            const response = await authPost(`v1/recommendations`, token, animeRecommendationsForm);
            console.log("RECSSSS: ", response);
            setAnimeRecommendations(response);
        } catch (err) {
            setError(err);
        } finally {
            setAnimeRecommendationsLoading(false);
        }
    }

    return (
        <AnimeRecommendationsContext.Provider 
            value={{ 
                animeRecommendationsForm, setAnimeRecommendationsForm, getAnimeRecommendations, animeRecommendations, animeRecommendationsLoading, error 
            }}
        >
            {children}
        </AnimeRecommendationsContext.Provider>
    );
};

export const useAnimeDetails = () => useContext(AnimeRecommendationsContext);
