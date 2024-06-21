import React, { createContext, useState, useEffect, useContext } from 'react';
import { authGet } from '../../../utils/authFetch';
const anime_list = [
    {
        "title": "Death Note: Rewrite",
        "picture_url": "https://cdn.myanimelist.net/images/anime/13/8518.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/2994/Death_Note__Rewrite",
        "description": "When approached by a fellow death god tempted to visit the human realm, Ryuk recounts his own journey to the other side and the story of Light Yagami—a brilliant young man who impressed him there. One...read more.",
        "myanimelist_id": 2994
    },
    {
        "title": "Death Note",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1079/138100.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/1535/Death_Note",
        "description": "Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Lig...read more.",
        "myanimelist_id": 1535
    },
    {
        "title": "Satsuriku no Tenshi",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1862/95624.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/35994/Satsuriku_no_Tenshi",
        "description": "With dead and lifeless eyes, Rachel Gardner wishes only to die. Waking up in the basement of a building, she has no idea how or why she's there. She stumbles across a bandaged murderer named Zack, who...read more.",
        "myanimelist_id": 35994
    },
    {
        "title": "Death March kara Hajimaru Isekai Kyousoukyoku",
        "picture_url": "https://cdn.myanimelist.net/images/anime/4/88911.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/34497/Death_March_kara_Hajimaru_Isekai_Kyousoukyoku",
        "description": "Ichirou Suzuki, a programmer nearing his thirties, is drowning in work. Worn out, he eventually has a chance to catch up on sleep, only to wake up and discover himself in a fantasy RPG world, which is...read more.",
        "myanimelist_id": 34497
    },
    {
        "title": "Kite Liberator",
        "picture_url": "https://cdn.myanimelist.net/images/anime/11/10228.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/3323/Kite_Liberator",
        "description": "In the previous series \"Kite,\" a killer—Sawa—suddenly disappears after she avenges her parents' death, and no one knows where she is. Several years later, a figure dances airily on the dark side of a...read more.",
        "myanimelist_id": 3323
    },
    {
        "title": "Death Parade",
        "picture_url": "https://cdn.myanimelist.net/images/anime/5/71553.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/28223/Death_Parade",
        "description": "After death, either Heaven or Hell awaits most humans. But for a select few, death brings them to Quindecim—a bar where only pairs of people who die at the same time can enter. Attending the bar is an...read more.",
        "myanimelist_id": 28223
    },
    {
        "title": "City Hunter: Kinkyuu Namachuukei!? Kyouakuhan Saeba Ryou no Saigo",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1920/92378.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/1479/City_Hunter__Kinkyuu_Namachuukei_Kyouakuhan_Saeba_Ryou_no_Saigo",
        "description": "City Hunter, Saeba Ryo, after months of idleness, finally scores a client and it is none other than the beautiful Mega City TV newscaster, Sayaka, who fears for her life. What's more, the enemy are he...read more.",
        "myanimelist_id": 1479
    },
    {
        "title": "Shinigami Bocchan to Kuro Maid",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1471/115593.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/47257/Shinigami_Bocchan_to_Kuro_Maid",
        "description": "As the elegant, frail flower petals wither away into lifeless ashes, the young duke is tragically reminded of the despicable power forced upon him—the ability to kill anything he touches. Scorned by h...read more.",
        "myanimelist_id": 47257
    },
    {
        "title": "Lord El-Melloi II Sei no Jikenbo: Rail Zeppelin Grace Note",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1107/111530.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/38959/Lord_El-Melloi_II_Sei_no_Jikenbo__Rail_Zeppelin_Grace_Note",
        "description": "Ten years after facing defeat in the Fourth Holy Grail War, Waver Velvet, now Lord El-Melloi II, teaches classes at the Clock Tower—the center of education for mages. However, his new status as Lord c...read more.",
        "myanimelist_id": 38959
    },
    {
        "title": "Dead Mount Death Play",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1930/133758.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/53613/Dead_Mount_Death_Play",
        "description": "A powerful necromancer known as the Corpse God dies during a legendary battle, only to be reborn as Polka Shinoyama, a young boy in modern-day Tokyo. In the process of trying to adapt to his new physi...read more.",
        "myanimelist_id": 53613
    },
    {
        "title": "Shinigami no Ballad.",
        "picture_url": "https://cdn.myanimelist.net/images/anime/5/16086.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/789/Shinigami_no_Ballad",
        "description": "A girl wrapped in white, her name is Momo...in her hand lies a blunt yet shiny scythe. By her side is a winged black cat by the name of Daniel. Carrying the souls of humans, the girl's existence paral...read more.",
        "myanimelist_id": 789
    },
    {
        "title": "Mashiro no Oto",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1841/111554.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/42590/Mashiro_no_Oto",
        "description": "Setsu Sawamura runs away from his small home village following the death of his grandfather, the legendary shamisen master Matsugorou Sawamura. On his deathbed, Matsugorou told Setsu to give up the sh...read more.",
        "myanimelist_id": 42590
    },
    {
        "title": "Tenki no Ko",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1880/101146.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/38826/Tenki_no_Ko",
        "description": "Tokyo is currently experiencing rain showers that seem to disrupt the usual pace of everyone living there to no end. Amidst this seemingly eternal downpour arrives the runaway high school student Hoda...read more.",
        "myanimelist_id": 38826
    },
    {
        "title": "Death Billiards",
        "picture_url": "https://cdn.myanimelist.net/images/anime/11/48721.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/14353/Death_Billiards",
        "description": "Two men have just arrived at a location known as Quindecim and are unable to remember how they got there. They are immediately greeted by a young woman who escorts them to a small bar, where a bartend...read more.",
        "myanimelist_id": 14353
    },
    {
        "title": "Dead Mount Death Play Part 2",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1005/139809.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/54743/Dead_Mount_Death_Play_Part_2",
        "description": "Polka Shinoyama's life takes a dramatic turn after being forced to use his magical powers in public. His divination cabinet attracts the attention of several people hellbent on exposing his true natur...read more.",
        "myanimelist_id": 54743
    },
    {
        "title": "Shiyakusho",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1713/120885.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/50993/Shiyakusho",
        "description": "",
        "myanimelist_id": 50993
    },
    {
        "title": "Shinigami Bocchan to Kuro Maid 2nd Season",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1078/136947.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/49858/Shinigami_Bocchan_to_Kuro_Maid_2nd_Season",
        "description": "The duke, full of love and kindness, treads carefully around every living being, be it a tender flower or his seductive maid, Alice Lendrott. Were it not for the devotion Alice shows him and the fondn...read more.",
        "myanimelist_id": 49858
    },
    {
        "title": "Soukihei MD Geist 2: Death Force",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1351/96371.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/1286/Soukihei_MD_Geist_2__Death_Force",
        "description": "After unleashing the Death Force machines all over the planet Jerra, Geist has kept himself busy by dismantling them one by one. But now he faces a formidable opponent in the form of Krauser, another...read more.",
        "myanimelist_id": 1286
    },
    {
        "title": "Shinigami Bocchan to Kuro Maid 3rd Season",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1988/142714.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/56738/Shinigami_Bocchan_to_Kuro_Maid_3rd_Season",
        "description": "Although everything the young duke touches perishes, his existence is far from lonely. His spirited siblings Viola and Walter, loyal butler Rob, and the eccentric witches Cuff and Zain are regularly l...read more.",
        "myanimelist_id": 56738
    },
    {
        "title": "Shigurui",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1440/115872.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/2216/Shigurui",
        "description": "At the beginning of the Edo Era, when people enjoyed a time of peace, Lord Tokugawa Tadanaga holds a fighting tournament. In the past, matches were fought with wooden swords. This time, real swords wi...read more.",
        "myanimelist_id": 2216
    },
    {
        "title": "Nido to Mezamenu Komoriuta",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1676/126492.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/7273/Nido_to_Mezamenu_Komoriuta",
        "description": "An animated film describing the bullying of a Japanese child.",
        "myanimelist_id": 7273
    },
    {
        "title": "Grimms Notes The Animation",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1708/96962.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/37154/Grimms_Notes_The_Animation",
        "description": "Within one's Book of Fate is their destiny. Written by the mysterious Story Tellers, these books decide every small detail of one's life. Some Story Tellers, however, choose to interfere with the stor...read more.",
        "myanimelist_id": 37154
    },
    {
        "title": "Soul Eater NOT!",
        "picture_url": "https://cdn.myanimelist.net/images/anime/2/63563.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/21507/Soul_Eater_NOT",
        "description": "Soul Eater NOT! is a spin-off and side story that takes place one year prior to the events of the original Soul Eater. At the Death Weapon Meister Academy, humans born with the power to transform into...read more.",
        "myanimelist_id": 21507
    },
    {
        "title": "Magical Death",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1209/109527.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/42989/Magical_Death",
        "description": "Music video by AC-bu for the song MAGICAL DEATH by Japanese hip-hop group Zamagi that was included on their second single.",
        "myanimelist_id": 42989
    },
    {
        "title": "Kaze no Tairiku",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1796/114316.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/1777/Kaze_no_Tairiku",
        "description": "Three adventurers—a warrior, a priest, and a young woman—traverse a land devastated by centuries of environmental calamities searching only for a way to survive. In their journeys they stumble across...read more.",
        "myanimelist_id": 1777
    },
    {
        "title": "Shinseiki Evangelion Movie: Shi to Shinsei",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1993/113122.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/31/Shinseiki_Evangelion_Movie__Shi_to_Shinsei",
        "description": "In the year 2015, more than a decade has passed since the catastrophic event known as Second Impact befell mankind. During this time of recovery, a select few learned of beings known as the Angels—col...read more.",
        "myanimelist_id": 31
    },
    {
        "title": "Bulg-eunmae",
        "picture_url": "https://cdn.myanimelist.net/images/anime/12/11531.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/1776/Bulg-eunmae",
        "description": "Gang terror and chaos reign in the land of Chungwon. The Camelia Blossoms are the most powerful of the warring gangs and they use this time of unrest to wrestle control of the country from the ailing...read more.",
        "myanimelist_id": 1776
    },
    {
        "title": "Biohazard: Death Island",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1348/133200.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/54398/Biohazard__Death_Island",
        "description": "D.S.O. agent Leon S. Kennedy is on a mission to rescue Dr. Antonio Taylor from kidnappers, when a mysterious woman thwarts his pursuit. Meanwhile, B.S.A.A. agent Chris Redfield is investigating a zomb...read more.",
        "myanimelist_id": 54398
    },
    {
        "title": "Digimon Xros Wars: Aku no Death General to Nanatsu no Oukoku",
        "picture_url": "https://cdn.myanimelist.net/images/anime/11/28688.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/10444/Digimon_Xros_Wars__Aku_no_Death_General_to_Nanatsu_no_Oukoku",
        "description": "Returning to the Digital World, Taiki and Shoutmon learn that the Bagra Army has taken it over and reformatted the world to have Seven Kingdoms, each ruled by a general. (Source: AniDB)",
        "myanimelist_id": 10444
    },
    {
        "title": "Shi no Shounin",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1399/127243.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/52856/Shi_no_Shounin",
        "description": "One day a boy encounters a street vendor who sells chicks. Even the boy knows these birds will die very soon. To his eyes, the man is selling none other than death itself. (Source: IMDB)",
        "myanimelist_id": 52856
    },
    {
        "title": "Baki: Most Evil Death Row Convicts Special Anime",
        "picture_url": "https://cdn.myanimelist.net/images/anime/7/82055.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/33566/Baki__Most_Evil_Death_Row_Convicts_Special_Anime",
        "description": "As if bound by fate, five of the world’s most dangerous convicts escape from their respective prisons and converge at Mitsunari Tokugawa’s coliseum, where they seek but one thing: the taste of defeat....read more.",
        "myanimelist_id": 33566
    },
    {
        "title": "Gakkou no Kaidan: Kubinashi Rider!! Shi no Noroi",
        "picture_url": "https://cdn.myanimelist.net/images/anime/2/74184.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/30825/Gakkou_no_Kaidan__Kubinashi_Rider_Shi_no_Noroi",
        "description": "A TV special of Gakkou no Kaidan that aired almost 5 months after the original anime. However, this event takes place before the Finale episode of the TV series. The story focuses on a headless motorc...read more.",
        "myanimelist_id": 30825
    },
    {
        "title": "One Piece 3D2Y: Ace no shi wo Koete! Luffy Nakama Tono Chikai",
        "picture_url": "https://cdn.myanimelist.net/images/anime/3/64755.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/25161/One_Piece_3D2Y__Ace_no_shi_wo_Koete_Luffy_Nakama_Tono_Chikai",
        "description": "After suffering great personal loss during the battle of Marineford, Monkey D. Luffy finds himself stranded on Rusukaina, a treacherous island crawling with huge and dangerous creatures. There, he has...read more.",
        "myanimelist_id": 25161
    },
    {
        "title": "DEathMAtCH: Real ni Koishiteru",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1761/124826.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/52228/DEathMAtCH__Real_ni_Koishiteru",
        "description": "Original anime short that aired during the Fuji TV's Geinin Anime Kantoku (Entertainer Anime Director) variety show.",
        "myanimelist_id": 52228
    },
    {
        "title": "Sokushi Cheat ga Saikyou sugite, Isekai no Yatsura ga Marude Aite ni Naranai n desu ga.",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1734/139673.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/53730/Sokushi_Cheat_ga_Saikyou_sugite_Isekai_no_Yatsura_ga_Marude_Aite_ni_Naranai_n_desu_ga",
        "description": "During a school trip, a bus full of students is suddenly transported to another world by a sage named Sion. She bestows most of the students with powers called Gifts, seeking to recruit them to become...read more.",
        "myanimelist_id": 53730
    },
    {
        "title": "Mazinkaiser: Shitou! Ankoku Dai Shogun",
        "picture_url": "https://cdn.myanimelist.net/images/anime/5/51795.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/2734/Mazinkaiser__Shitou_Ankoku_Dai_Shogun",
        "description": "Koji is on holiday when the 7 generals from Mikene attacks the world, under the leadership of the general of darkness.How will Koji be able to stop them... (Source: AniDB)",
        "myanimelist_id": 2734
    },
    {
        "title": "XYZ Note",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1084/126357.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/52566/XYZ_Note",
        "description": "",
        "myanimelist_id": 52566
    },
    {
        "title": "Gundam: G no Reconguista Movie V - Shisen wo Koete",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1876/125206.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/43206/Gundam__G_no_Reconguista_Movie_V_-_Shisen_wo_Koete",
        "description": "The fifth and final film in the five-part Gundam: G no Reconguista Movie series. ",
        "myanimelist_id": 43206
    },
    {
        "title": "Nightmare x Deathscythe: Hangyaku no Resonance",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1013/134726.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/54849/Nightmare_x_Deathscythe__Hangyaku_no_Resonance",
        "description": "",
        "myanimelist_id": 54849
    },
    {
        "title": "Ayatsuri Haramase DreamNote",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1910/103819.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/6635/Ayatsuri_Haramase_DreamNote",
        "description": "Masaya is a university student, who works as a home tutor part-time. One day, he receives a parcel. That is a notebook. He frowns when he reads a letter, which is also in the parcel. It says, \"If you...read more.",
        "myanimelist_id": 6635
    },
    {
        "title": "Tesla Note",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1511/116890.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/48680/Tesla_Note",
        "description": "Mission T is a secret operation to save the world from destruction. Trained as a ninja from a young age, Botan Negoro, raised to become the ultimate spy, teams up with another excellent spy, Kuruma. T...read more.",
        "myanimelist_id": 48680
    },
    {
        "title": "Highschool of the Dead",
        "picture_url": "https://cdn.myanimelist.net/images/anime/11/78311.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/8074/Highschool_of_the_Dead",
        "description": "It happened suddenly: The dead began to rise and Japan was thrown into total chaos. As these monsters begin terrorizing a high school, Takashi Kimuro is forced to kill his best friend when he gets bit...read more.",
        "myanimelist_id": 8074
    },
    {
        "title": "Astro Note",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1372/141859.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/57391/Astro_Note",
        "description": "Takumi, a gifted chef, was just let go from his job. He lands a gig at an old boarding house called Astro-sou but hesitates to accept after learning he must also live there full-time. That is until he...read more.",
        "myanimelist_id": 57391
    },
    {
        "title": "Gunslinger Girl: Il Teatrino OVA",
        "picture_url": "https://cdn.myanimelist.net/images/anime/12/12641.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/4765/Gunslinger_Girl__Il_Teatrino_OVA",
        "description": "Episodes 14 and 15 of Gunslinger Girl: Il Teatrino.",
        "myanimelist_id": 4765
    },
    {
        "title": "Buzzer Beater",
        "picture_url": "https://cdn.myanimelist.net/images/anime/6/57421.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/406/Buzzer_Beater",
        "description": "Hideyoshi is a homeless boy living in New York in the near future, who survives by hustling other kids in basketball games. But now he's been drafted into a pro team-a pro team with a very unique goal...read more.",
        "myanimelist_id": 406
    },
    {
        "title": "One Piece: Dai Tannou Kikaku! \"Shi no Gekai\" Trafalgar Law",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1868/141248.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/58015/One_Piece__Dai_Tannou_Kikaku_Shi_no_Gekai_Trafalgar_Law",
        "description": "The first recap special of Egghead arc that covers Trafalgar Law's history with narration by Bepo and Chopper.",
        "myanimelist_id": 58015
    },
    {
        "title": "Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru.",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1007/141625.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/54913/Shinmai_Ossan_Boukensha_Saikyou_Party_ni_Shinu_hodo_Kitaerarete_Muteki_ni_Naru",
        "description": "It is common knowledge that it is best to become an adventurer when you are as young as possible because the magical power that is the basis of an adventurer's strength will hardly grow if you don't t...read more.",
        "myanimelist_id": 54913
    },
    {
        "title": "Wind: A Breath of Heart (TV)",
        "picture_url": "https://cdn.myanimelist.net/images/anime/11/75506.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/546/Wind__A_Breath_of_Heart_TV",
        "description": "Okano Makoto transferred to the school in his home town. There, he spent normal but happy school days with his sister, Hinata, a jokey classmate, Tachibana Tsutomu, Shikouin Kasumi, Tsutomu's childhoo...read more.",
        "myanimelist_id": 546
    },
    {
        "title": "Lord El-Melloi II Sei no Jikenbo: Rail Zeppelin Grace Note Special",
        "picture_url": "https://cdn.myanimelist.net/images/anime/1845/120313.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/49361/Lord_El-Melloi_II_Sei_no_Jikenbo__Rail_Zeppelin_Grace_Note_Special",
        "description": "A letter is delivered to Lord El-Melloi II informing him of a Clock Tower reunion. One morning, as the reunion's date draws near, Lord El-Melloi II takes a look in the mirror and reels in shock. He is...read more.",
        "myanimelist_id": 49361
    },
    {
        "title": "Majin Sentai Death Ranger: Ubawareta Pudding!",
        "picture_url": "https://cdn.myanimelist.net/images/anime/8/72096.jpg",
        "myanimelist_url": "https://myanimelist.net/anime/30094/Majin_Sentai_Death_Ranger__Ubawareta_Pudding",
        "description": "Stop-motion animation about pudding.",
        "myanimelist_id": 30094
    }
];

export const AnimeSearchContext = createContext();

export const AnimeSearchProvider = ({ children }) => {
    const [animeSearchResults, setAnimeSearchResults] = useState(null)
    const [query, setQuery] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const searchAnime = async () => {
            try {
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

    return (
        <AnimeSearchContext.Provider value={{ animeSearchResults, query, setQuery, loading, error }}>
            {children}
        </AnimeSearchContext.Provider>
    );
};

export const useAnimeSearch = () => useContext(AnimeSearchContext);
