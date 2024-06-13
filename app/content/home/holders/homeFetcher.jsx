import { PopularAnimeProvider } from "../../../context/popularAnime/popularAnimeContext";
import HomeInteractor from "./homeInteractor";

export default function HomeFetcher() {
    return (
        <PopularAnimeProvider>
            <HomeInteractor/>
        </PopularAnimeProvider>
    )
}