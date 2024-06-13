import React, { createContext, useState, useEffect } from 'react';
import { config } from '../../../config';
import { authGet } from '../../../utils/authFetch';

export const PopularAnimeContext = createContext();

export const PopularAnimeProvider = ({ children }) => {
    const [animeList, setAnimeList] = useState([
        {
            "title": "Sousou no Frieren",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/52991/Sousou_no_Frieren",
            "score": 9.36,
            "rank": 1,
            "aired_on": "Sep 2023 - Mar 2024",
            "myanimelist_id": 52991
        },
        {
            "title": "Fullmetal Alchemist: Brotherhood",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
            "score": 9.09,
            "rank": 2,
            "aired_on": "Apr 2009 - Jul 2010",
            "myanimelist_id": 5114
        },
        {
            "title": "Steins;Gate",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/9253/Steins_Gate",
            "score": 9.07,
            "rank": 3,
            "aired_on": "Apr 2011 - Sep 2011",
            "myanimelist_id": 9253
        },
        {
            "title": "Gintama°",
            "picture_url": "https://cdn.myanimelist.net/images/anime/3/72078.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/28977/Gintama°",
            "score": 9.06,
            "rank": 4,
            "aired_on": "Apr 2015 - Mar 2016",
            "myanimelist_id": 28977
        },
        {
            "title": "Shingeki no Kyojin Season 3 Part 2",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1517/100633.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2",
            "score": 9.05,
            "rank": 5,
            "aired_on": "Apr 2019 - Jul 2019",
            "myanimelist_id": 38524
        },
        {
            "title": "Gintama: The Final",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1245/116760.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/39486/Gintama__The_Final",
            "score": 9.04,
            "rank": 6,
            "aired_on": "Jan 2021 - Jan 2021",
            "myanimelist_id": 39486
        },
        {
            "title": "Gintama'",
            "picture_url": "https://cdn.myanimelist.net/images/anime/4/50361.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/9969/Gintama",
            "score": 9.03,
            "rank": 7,
            "aired_on": "Apr 2011 - Mar 2012",
            "myanimelist_id": 9969
        },
        {
            "title": "Hunter x Hunter (2011)",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011",
            "score": 9.03,
            "rank": 8,
            "aired_on": "Oct 2011 - Sep 2014",
            "myanimelist_id": 11061
        },
        {
            "title": "Ginga Eiyuu Densetsu",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1976/142016.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/820/Ginga_Eiyuu_Densetsu",
            "score": 9.02,
            "rank": 9,
            "aired_on": "Jan 1988 - Mar 1997",
            "myanimelist_id": 820
        },
        {
            "title": "Gintama': Enchousen",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1452/123686.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/15417/Gintama__Enchousen",
            "score": 9.02,
            "rank": 10,
            "aired_on": "Oct 2012 - Mar 2013",
            "myanimelist_id": 15417
        },
        {
            "title": "Bleach: Sennen Kessen-hen",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1908/135431.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen",
            "score": 9.01,
            "rank": 11,
            "aired_on": "Oct 2022 - Dec 2022",
            "myanimelist_id": 41467
        },
        {
            "title": "Kaguya-sama wa Kokurasetai: Ultra Romantic",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1160/122627.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/43608/Kaguya-sama_wa_Kokurasetai__Ultra_Romantic",
            "score": 9.01,
            "rank": 12,
            "aired_on": "Apr 2022 - Jun 2022",
            "myanimelist_id": 43608
        },
        {
            "title": "Gintama.",
            "picture_url": "https://cdn.myanimelist.net/images/anime/3/83528.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/34096/Gintama",
            "score": 8.98,
            "rank": 13,
            "aired_on": "Jan 2017 - Mar 2017",
            "myanimelist_id": 34096
        },
        {
            "title": "Fruits Basket: The Final",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1085/114792.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/42938/Fruits_Basket__The_Final",
            "score": 8.97,
            "rank": 14,
            "aired_on": "Apr 2021 - Jun 2021",
            "myanimelist_id": 42938
        },
        {
            "title": "Gintama",
            "picture_url": "https://cdn.myanimelist.net/images/anime/10/73274.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/918/Gintama",
            "score": 8.94,
            "rank": 15,
            "aired_on": "Apr 2006 - Mar 2010",
            "myanimelist_id": 918
        },
        {
            "title": "Clannad: After Story",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1299/110774.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/4181/Clannad__After_Story",
            "score": 8.93,
            "rank": 16,
            "aired_on": "Oct 2008 - Mar 2009",
            "myanimelist_id": 4181
        },
        {
            "title": "Koe no Katachi",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/28851/Koe_no_Katachi",
            "score": 8.93,
            "rank": 17,
            "aired_on": "Sep 2016 - Sep 2016",
            "myanimelist_id": 28851
        },
        {
            "title": "3-gatsu no Lion 2nd Season",
            "picture_url": "https://cdn.myanimelist.net/images/anime/3/88469.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/35180/3-gatsu_no_Lion_2nd_Season",
            "score": 8.92,
            "rank": 18,
            "aired_on": "Oct 2017 - Mar 2018",
            "myanimelist_id": 35180
        },
        {
            "title": "Code Geass: Hangyaku no Lelouch R2",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1088/135089.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/2904/Code_Geass__Hangyaku_no_Lelouch_R2",
            "score": 8.91,
            "rank": 19,
            "aired_on": "Apr 2008 - Sep 2008",
            "myanimelist_id": 2904
        },
        {
            "title": "Kusuriya no Hitorigoto",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1708/138033.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/54492/Kusuriya_no_Hitorigoto",
            "score": 8.91,
            "rank": 20,
            "aired_on": "Oct 2023 - Mar 2024",
            "myanimelist_id": 54492
        },
        {
            "title": "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare",
            "picture_url": "https://cdn.myanimelist.net/images/anime/10/51723.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/15335/Gintama_Movie_2__Kanketsu-hen_-_Yorozuya_yo_Eien_Nare",
            "score": 8.9,
            "rank": 21,
            "aired_on": "Jul 2013 - Jul 2013",
            "myanimelist_id": 15335
        },
        {
            "title": "Shingeki no Kyojin: The Final Season - Kanketsu-hen",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1279/131078.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/51535/Shingeki_no_Kyojin__The_Final_Season_-_Kanketsu-hen",
            "score": 8.89,
            "rank": 22,
            "aired_on": "Mar 2023 - Nov 2023",
            "myanimelist_id": 51535
        },
        {
            "title": "Monster",
            "picture_url": "https://cdn.myanimelist.net/images/anime/10/18793.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/19/Monster",
            "score": 8.88,
            "rank": 23,
            "aired_on": "Apr 2004 - Sep 2005",
            "myanimelist_id": 19
        },
        {
            "title": "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1776/96566.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/37491/Gintama__Shirogane_no_Tamashii-hen_-_Kouhan-sen",
            "score": 8.88,
            "rank": 24,
            "aired_on": "Jul 2018 - Oct 2018",
            "myanimelist_id": 37491
        },
        {
            "title": "Owarimonogatari 2nd Season",
            "picture_url": "https://cdn.myanimelist.net/images/anime/6/87322.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/35247/Owarimonogatari_2nd_Season",
            "score": 8.87,
            "rank": 25,
            "aired_on": "Aug 2017 - Aug 2017",
            "myanimelist_id": 35247
        },
        {
            "title": "Violet Evergarden Movie",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1825/110716.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/37987/Violet_Evergarden_Movie",
            "score": 8.86,
            "rank": 26,
            "aired_on": "Sep 2020 - Sep 2020",
            "myanimelist_id": 37987
        },
        {
            "title": "Boku no Kokoro no Yabai Yatsu 2nd Season",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1643/138581.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/55690/Boku_no_Kokoro_no_Yabai_Yatsu_2nd_Season",
            "score": 8.85,
            "rank": 27,
            "aired_on": "Jan 2024 - Mar 2024",
            "myanimelist_id": 55690
        },
        {
            "title": "Kimi no Na wa.",
            "picture_url": "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/32281/Kimi_no_Na_wa",
            "score": 8.84,
            "rank": 28,
            "aired_on": "Aug 2016 - Aug 2016",
            "myanimelist_id": 32281
        },
        {
            "title": "Jujutsu Kaisen 2nd Season",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1792/138022.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/51009/Jujutsu_Kaisen_2nd_Season",
            "score": 8.82,
            "rank": 29,
            "aired_on": "Jul 2023 - Dec 2023",
            "myanimelist_id": 51009
        },
        {
            "title": "Kingdom 3rd Season",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1443/111830.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/40682/Kingdom_3rd_Season",
            "score": 8.82,
            "rank": 30,
            "aired_on": "Apr 2020 - Oct 2021",
            "myanimelist_id": 40682
        },
        {
            "title": "Gintama.: Shirogane no Tamashii-hen",
            "picture_url": "https://cdn.myanimelist.net/images/anime/12/89603.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/36838/Gintama__Shirogane_no_Tamashii-hen",
            "score": 8.81,
            "rank": 31,
            "aired_on": "Jan 2018 - Mar 2018",
            "myanimelist_id": 36838
        },
        {
            "title": "Vinland Saga Season 2",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1170/124312.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/49387/Vinland_Saga_Season_2",
            "score": 8.81,
            "rank": 32,
            "aired_on": "Jan 2023 - Jun 2023",
            "myanimelist_id": 49387
        },
        {
            "title": "Mob Psycho 100 II",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1918/96303.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/37510/Mob_Psycho_100_II",
            "score": 8.79,
            "rank": 33,
            "aired_on": "Jan 2019 - Apr 2019",
            "myanimelist_id": 37510
        },
        {
            "title": "Kizumonogatari III: Reiketsu-hen",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1084/112813.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/31758/Kizumonogatari_III__Reiketsu-hen",
            "score": 8.78,
            "rank": 34,
            "aired_on": "Jan 2017 - Jan 2017",
            "myanimelist_id": 31758
        },
        {
            "title": "Shingeki no Kyojin: The Final Season",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1000/110531.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season",
            "score": 8.78,
            "rank": 35,
            "aired_on": "Dec 2020 - Mar 2021",
            "myanimelist_id": 40028
        },
        {
            "title": "Bocchi the Rock!",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1448/127956.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/47917/Bocchi_the_Rock",
            "score": 8.78,
            "rank": 36,
            "aired_on": "Oct 2022 - Dec 2022",
            "myanimelist_id": 47917
        },
        {
            "title": "Haikyuu!! Karasuno Koukou vs. Shiratorizawa Gakuen Koukou",
            "picture_url": "https://cdn.myanimelist.net/images/anime/7/81992.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/32935/Haikyuu_Karasuno_Koukou_vs_Shiratorizawa_Gakuen_Koukou",
            "score": 8.78,
            "rank": 37,
            "aired_on": "Oct 2016 - Dec 2016",
            "myanimelist_id": 32935
        },
        {
            "title": "Hajime no Ippo",
            "picture_url": "https://cdn.myanimelist.net/images/anime/4/86334.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/263/Hajime_no_Ippo",
            "score": 8.77,
            "rank": 38,
            "aired_on": "Oct 2000 - Mar 2002",
            "myanimelist_id": 263
        },
        {
            "title": "Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1670/130060.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/52198/Kaguya-sama_wa_Kokurasetai__First_Kiss_wa_Owaranai",
            "score": 8.77,
            "rank": 39,
            "aired_on": "Dec 2022 - Dec 2022",
            "myanimelist_id": 52198
        },
        {
            "title": "Sen to Chihiro no Kamikakushi",
            "picture_url": "https://cdn.myanimelist.net/images/anime/6/79597.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/199/Sen_to_Chihiro_no_Kamikakushi",
            "score": 8.77,
            "rank": 40,
            "aired_on": "Jul 2001 - Jul 2001",
            "myanimelist_id": 199
        },
        {
            "title": "Monogatari Series: Second Season",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1807/121534.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/17074/Monogatari_Series__Second_Season",
            "score": 8.76,
            "rank": 41,
            "aired_on": "Jul 2013 - Dec 2013",
            "myanimelist_id": 17074
        },
        {
            "title": "Shingeki no Kyojin: The Final Season Part 2",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1948/120625.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/48583/Shingeki_no_Kyojin__The_Final_Season_Part_2",
            "score": 8.76,
            "rank": 42,
            "aired_on": "Jan 2022 - Apr 2022",
            "myanimelist_id": 48583
        },
        {
            "title": "The First Slam Dunk",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1745/129284.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/45649/The_First_Slam_Dunk",
            "score": 8.76,
            "rank": 43,
            "aired_on": "Dec 2022 - Dec 2022",
            "myanimelist_id": 45649
        },
        {
            "title": "Vinland Saga",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/37521/Vinland_Saga",
            "score": 8.75,
            "rank": 44,
            "aired_on": "Jul 2019 - Dec 2019",
            "myanimelist_id": 37521
        },
        {
            "title": "Cowboy Bebop",
            "picture_url": "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/1/Cowboy_Bebop",
            "score": 8.75,
            "rank": 45,
            "aired_on": "Apr 1998 - Apr 1999",
            "myanimelist_id": 1
        },
        {
            "title": "Kimetsu no Yaiba: Yuukaku-hen",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1908/120036.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/47778/Kimetsu_no_Yaiba__Yuukaku-hen",
            "score": 8.75,
            "rank": 46,
            "aired_on": "Dec 2021 - Feb 2022",
            "myanimelist_id": 47778
        },
        {
            "title": "Kingdom 4th Season",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1566/122794.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/50160/Kingdom_4th_Season",
            "score": 8.74,
            "rank": 47,
            "aired_on": "Apr 2022 - Oct 2022",
            "myanimelist_id": 50160
        },
        {
            "title": "Kingdom 5th Season",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1050/139641.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/53223/Kingdom_5th_Season",
            "score": 8.74,
            "rank": 48,
            "aired_on": "Jan 2024 - Mar 2024",
            "myanimelist_id": 53223
        },
        {
            "title": "Shiguang Dailiren",
            "picture_url": "https://cdn.myanimelist.net/images/anime/1135/114867.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/44074/Shiguang_Dailiren",
            "score": 8.74,
            "rank": 49,
            "aired_on": "Apr 2021 - Jul 2021",
            "myanimelist_id": 44074
        },
        {
            "title": "Mushishi Zoku Shou 2nd Season",
            "picture_url": "https://cdn.myanimelist.net/images/anime/9/68095.jpg",
            "myanimelist_url": "https://myanimelist.net/anime/24701/Mushishi_Zoku_Shou_2nd_Season",
            "score": 8.73,
            "rank": 50,
            "aired_on": "Oct 2014 - Dec 2014",
            "myanimelist_id": 24701
        }
    ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPopularAnime = async () => {
            try {
                const response = await authGet(`v1/anime/popular`);
                const data = response;
                setAnimeList(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        // fetchPopularAnime();
    }, []);

    return (
        <PopularAnimeContext.Provider value={{ animeList, loading, error }}>
            {children}
        </PopularAnimeContext.Provider>
    );
};