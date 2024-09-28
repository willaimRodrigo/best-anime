import { CardAnime } from "./CardAnime"

import style from "./style.module.scss";


export const LiAnime = ({liAnime}) => {
    
    return (
        <ul className={style.list}>
            {liAnime.map((anime, index) => (
                <CardAnime key={index} anime={anime} />
            ))}
        </ul>
    )
}