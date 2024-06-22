import React, { createContext, useState, useEffect, useContext } from 'react';
import { authGet } from '../../../utils/authFetch';

export const AnimeSearchContext = createContext();

export const AnimeSearchProvider = ({ children, startQuery }) => {
    const [animeSearchResults, setAnimeSearchResults] = useState(null)
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const searchAnime = async () => {
            try {
                setLoading(true);
                const response = await authGet(`v1/anime/search?title=${query}`);
                // const response = anime_list;
                const data = response;
                setAnimeSearchResults(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if(query) {
            searchAnime();
        }
    }, [query]);

    useEffect(()=>{
        if(startQuery) {
            setQuery(startQuery);
        }
    }, [startQuery]);
    return (
        <AnimeSearchContext.Provider value={{ animeSearchResults, query, setQuery, loading, error }}>
            {children}
        </AnimeSearchContext.Provider>
    );
};

export const useAnimeSearch = () => useContext(AnimeSearchContext);
