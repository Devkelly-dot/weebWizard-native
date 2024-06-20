import { useLocalSearchParams } from "expo-router";
import { AnimeDetailProvider } from "../../../context/animeDetailContext/animeDetailContext";
import AnimeAvailabilityFetcher from "./animeAvailabilityFetcher";

export default function AnimeDetailFetcher() {
    const { id } = useLocalSearchParams();

    /*
    https://weeb-wizard-backend-96cbca1cf907.herokuapp.com/v1/anime/search/${id}
    {
        "picture_url": "https://cdn.myanimelist.net/images/anime/1032/135088.jpg",
        "synopsis": "In the year 2010, the Holy Empire of Britannia is establishing itself as a dominant military nation, starting with the conquest of Japan. Renamed to Area 11 after its swift defeat, Japan has seen significant resistance against these tyrants in an attempt to regain independence.\n\r\nLelouch Lamperouge, a Britannian student, unfortunately finds himself caught in a crossfire between the Britannian and the Area 11 rebel armed forces. He is able to escape, however, thanks to the timely appearance of a mysterious girl named C.C., who bestows upon him Geass, the \"Power of Kings.\" Realizing the vast potential of his newfound \"power of absolute obedience,\" Lelouch embarks upon a perilous journey as the masked vigilante known as Zero, leading a merciless onslaught against Britannia in order to get revenge once and for all.\n\r\n[Written by MAL Rewrite]",
        "title_en": "Code Geass: Lelouch of the Rebellion",
        "title_ov": "Code Geass: Hangyaku no Lelouch",
        "statistics": {
            "score": 8.7,
            "ranked": 57,
            "popularity": 22,
            "members": 2263394,
            "favorites": 109099
        }
    }
    */

    return (
        <AnimeDetailProvider animeId={id}>
            <AnimeAvailabilityFetcher/>
        </AnimeDetailProvider>
    )
}