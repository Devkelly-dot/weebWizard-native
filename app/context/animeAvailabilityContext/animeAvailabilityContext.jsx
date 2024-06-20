import React, { createContext, useState, useEffect, useContext } from 'react';
import { authGet } from '../../../utils/authFetch';

export const AnimeAvailabilityContext = createContext();

export const AnimeAvailabilityProvider = ({ children, animeTitle }) => {
    const [availabilityData, setAvailabilityData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnimeAvailability = async () => {
            try {
                const response = await authGet(`v1/availability/search?title=${animeTitle}`);
                // const response = {
                //     "title": "Naruto",
                //     "type": "series",
                //     "overview": "12 years ago, the Nine-Tailed Fox claimed many lives before its spirit was contained with a baby boy who has now grown to become a ninja-in-training.",
                //     "streamingInfo": {
                //         "us": [
                //             {
                //                 "service": "hulu",
                //                 "streamingType": "subscription",
                //                 "link": "https://www.hulu.com/series/naruto-993d48dc-d507-47cb-8cca-23e6794f6f66",
                //                 "videoLink": "https://www.hulu.com/watch/1e54face-749d-4978-bca8-2abce679a82b",
                //                 "audios": [
                //                     {
                //                         "language": "eng",
                //                         "region": ""
                //                     },
                //                     {
                //                         "language": "jpn",
                //                         "region": ""
                //                     }
                //                 ],
                //                 "subtitles": [
                //                     {
                //                         "locale": {
                //                             "language": "eng",
                //                             "region": ""
                //                         },
                //                         "closedCaptions": false
                //                     }
                //                 ],
                //                 "leaving": 1790924344,
                //                 "availableSince": 1648522493
                //             },
                //             {
                //                 "service": "tubi",
                //                 "streamingType": "free",
                //                 "quality": "sd",
                //                 "link": "https://tubitv.com/series/1622/naruto-subtitled",
                //                 "videoLink": "https://tubitv.com/tv-shows/318409",
                //                 "audios": [],
                //                 "subtitles": [],
                //                 "availableSince": 1716064221
                //             },
                //             {
                //                 "service": "prime",
                //                 "streamingType": "subscription",
                //                 "quality": "sd",
                //                 "link": "https://www.amazon.com/gp/video/detail/B0B8SSXVDL/ref=atv_dp",
                //                 "audios": [
                //                     {
                //                         "language": "jpn",
                //                         "region": ""
                //                     }
                //                 ],
                //                 "subtitles": [],
                //                 "availableSince": 1690049533
                //             },
                //             {
                //                 "service": "prime",
                //                 "streamingType": "addon",
                //                 "quality": "sd",
                //                 "addon": "crunchyrollus",
                //                 "link": "https://www.amazon.com/gp/video/detail/B0CJPC9J7D",
                //                 "audios": [
                //                     {
                //                         "language": "jpn",
                //                         "region": ""
                //                     }
                //                 ],
                //                 "subtitles": [
                //                     {
                //                         "locale": {
                //                             "language": "eng",
                //                             "region": ""
                //                         },
                //                         "closedCaptions": false
                //                     },
                //                     {
                //                         "locale": {
                //                             "language": "fra",
                //                             "region": ""
                //                         },
                //                         "closedCaptions": false
                //                     },
                //                     {
                //                         "locale": {
                //                             "language": "ita",
                //                             "region": ""
                //                         },
                //                         "closedCaptions": false
                //                     },
                //                     {
                //                         "locale": {
                //                             "language": "por",
                //                             "region": ""
                //                         },
                //                         "closedCaptions": false
                //                     },
                //                     {
                //                         "locale": {
                //                             "language": "spa",
                //                             "region": ""
                //                         },
                //                         "closedCaptions": false
                //                     }
                //                 ],
                //                 "availableSince": 1700010217
                //             },
                //             {
                //                 "service": "netflix",
                //                 "streamingType": "subscription",
                //                 "quality": "sd",
                //                 "link": "https://www.netflix.com/title/70205012/",
                //                 "videoLink": "https://www.netflix.com/watch/70205012",
                //                 "audios": [
                //                     {
                //                         "language": "eng",
                //                         "region": ""
                //                     },
                //                     {
                //                         "language": "jpn",
                //                         "region": ""
                //                     }
                //                 ],
                //                 "subtitles": [
                //                     {
                //                         "locale": {
                //                             "language": "eng",
                //                             "region": ""
                //                         },
                //                         "closedCaptions": true
                //                     }
                //                 ],
                //                 "availableSince": 1648598927
                //             },
                //             {
                //                 "service": "apple",
                //                 "streamingType": "buy",
                //                 "quality": "hd",
                //                 "link": "https://tv.apple.com/us/movie/naruto-the-movie-ninja-clash-in-the-land-of-snow/umc.cmc.2nvesrgmii9ocvisdx20mmahu?playableId=tvs.sbd.9001%3A300713948",
                //                 "audios": [],
                //                 "subtitles": [],
                //                 "price": {
                //                     "amount": "12.99",
                //                     "currency": "USD",
                //                     "formatted": "12.99 USD"
                //                 },
                //                 "availableSince": 1649552022
                //             },
                //             {
                //                 "service": "apple",
                //                 "streamingType": "buy",
                //                 "quality": "sd",
                //                 "link": "https://tv.apple.com/us/movie/naruto-the-movie-ninja-clash-in-the-land-of-snow/umc.cmc.2nvesrgmii9ocvisdx20mmahu?playableId=tvs.sbd.9001%3A300713948",
                //                 "audios": [],
                //                 "subtitles": [],
                //                 "price": {
                //                     "amount": "9.99",
                //                     "currency": "USD",
                //                     "formatted": "9.99 USD"
                //                 },
                //                 "availableSince": 1706303260
                //             },
                //             {
                //                 "service": "apple",
                //                 "streamingType": "rent",
                //                 "quality": "hd",
                //                 "link": "https://tv.apple.com/us/movie/naruto-the-movie-ninja-clash-in-the-land-of-snow/umc.cmc.2nvesrgmii9ocvisdx20mmahu?playableId=tvs.sbd.9001%3A300713948",
                //                 "audios": [],
                //                 "subtitles": [],
                //                 "price": {
                //                     "amount": "3.99",
                //                     "currency": "USD",
                //                     "formatted": "3.99 USD"
                //                 },
                //                 "availableSince": 1649552022
                //             },
                //             {
                //                 "service": "peacock",
                //                 "streamingType": "free",
                //                 "quality": "hd",
                //                 "link": "https://www.peacocktv.com/watch/asset/tv/naruto/8188260942795277112",
                //                 "videoLink": "https://www.peacocktv.com/watch/playback/vod/GMO_00000000176420_02/f0e58ce9-dbef-3120-9057-a739252159ed",
                //                 "audios": [
                //                     {
                //                         "language": "jpn",
                //                         "region": ""
                //                     }
                //                 ],
                //                 "subtitles": [],
                //                 "leaving": 32503715940,
                //                 "availableSince": 1662826444
                //             },
                //             {
                //                 "service": "peacock",
                //                 "streamingType": "subscription",
                //                 "quality": "hd",
                //                 "link": "https://www.peacocktv.com/watch/asset/tv/naruto/8188260942795277112",
                //                 "videoLink": "https://www.peacocktv.com/watch/playback/vod/GMO_00000000176420_02/f0e58ce9-dbef-3120-9057-a739252159ed",
                //                 "audios": [
                //                     {
                //                         "language": "jpn",
                //                         "region": ""
                //                     }
                //                 ],
                //                 "subtitles": [],
                //                 "leaving": 32503715940,
                //                 "availableSince": 1652644263
                //             },
                //             {
                //                 "service": "plutotv",
                //                 "streamingType": "free",
                //                 "link": "https://pluto.tv/gsa/on-demand/series/5d278c0a9e0908329b25b8b8",
                //                 "audios": [],
                //                 "subtitles": [],
                //                 "availableSince": 1715727512
                //             }
                //         ]
                //     },
                //     "genres": [
                //         {
                //             "id": 16,
                //             "name": "Animation"
                //         },
                //         {
                //             "id": 28,
                //             "name": "Action"
                //         },
                //         {
                //             "id": 12,
                //             "name": "Adventure"
                //         }
                //     ]
                // }
                const data = response;
                setAvailabilityData(data);
            } catch (err) {
                console.log(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if(animeTitle) {
            fetchAnimeAvailability();
        }
    }, [animeTitle]);

    return (
        <AnimeAvailabilityContext.Provider value={{ availabilityData, loading, error }}>
            {children}
        </AnimeAvailabilityContext.Provider>
    );
};

export const useAnimeAvailability = () => useContext(AnimeAvailabilityContext);
