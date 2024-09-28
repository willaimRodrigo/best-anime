import { LiAnime } from "../LiAnime"
import { ListAnime } from "../ListAnime"

import style from "./style.module.scss";


export const Page = () => {

    return (
        <>
            <main>
               <h1>Lista de Top Animes para maratonar</h1>

                <div className={style.ul_card}>
                    <LiAnime liAnime={ListAnime}/>
                </div>
                 
            </main>
            

            {/* <ul>
                {ListAnime.map((anime, index) => (
                    <li key={index}>
                        <img src={anime.img} alt={anime.title}></img>
                        <h2>{anime.title}</h2>
                        <h4>{anime.genre}</h4>
                        <p>{anime.episodes}</p>
                        <span>{anime.autor}</span>
                        <p>{anime.description}</p>
                    </li>
                ))}
            </ul> */}
        </>
    )
}