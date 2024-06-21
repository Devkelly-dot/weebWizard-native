import { AnimeSearchProvider } from "../../../context/animeSearchContext/animeSearchContext";
import AnimeSearchInteractor from "./animeSearchInteractor";

export default function AnimeSearchFetcher() {
    return (
        <AnimeSearchProvider>
            <AnimeSearchInteractor/>
        </AnimeSearchProvider>
    )
}