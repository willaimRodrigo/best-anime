import style from "./style.module.scss";

export const CardAnime = ({ anime }) => {
    return (
        <li>
            <img className={style.img} src={anime.img} alt={anime.title}></img>

            <div className={style.info}>
                <h2>{anime.title}</h2>
                <div className={style.genep}>
                    <h4>Genero: {anime.genre}</h4> 
                    <p className={style.episodes}> Episódios:{anime.episodes}</p>
                </div>
                
                <span className={style.span}>Autor: {anime.autor}</span>
                <p className={style.description}> Descrição: {anime.description}</p>
            </div>
            
        </li>
    )
}