import { AnimeAvailabilityProvider } from "../../../context/animeAvailabilityContext/animeAvailabilityContext";
import { useAnimeDetails } from "../../../context/animeDetailContext/animeDetailContext";
import AnimeDetailInteractor from "./animeDetailInteractor";

export default function AnimeAvailabilityFetcher() {
    const {animeData} = useAnimeDetails();

    return (
        <AnimeAvailabilityProvider animeTitle={animeData?.title_en?animeData.title_en:animeData?.title_ov}>
            <AnimeDetailInteractor/>
        </AnimeAvailabilityProvider>
    )
}