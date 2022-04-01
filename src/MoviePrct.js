import { useState, useEffect } from "react";

function MoviePrct(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // fetch.then 보다 async() => {await }를 더 많이 사용함.
    const getMovies = async() => {
        const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    console.log("movies", movies);
    /* useEffect(() => {
        fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
        .then((response) => response.json())
        .then((json) => {
            setMovies(json.data.movies);
            setLoading(false);
        })
    }, []); */
    /* console.log(movies)가 두 번 실행되는 이유 = 1. setMovies()  2. setLoading() */

    return(
        <div>
            {loading ? <h1>Loading...</h1> : <div>{movies.map(m => (
                <figure key={m.id}>
                    <img src={m.medium_cover_image}/>
                    <figcaption>
                        <h3>{m.title} ({m.rating})</h3>
                        <span>{m.synopsis}</span>
                        <ul>{m.genres.map(g => (
                            <li key={m.index}>{g}</li>
                        ))}</ul>
                    </figcaption>
                </figure>
                
            ))}</div>}
        </div>
    )
}

export default MoviePrct;