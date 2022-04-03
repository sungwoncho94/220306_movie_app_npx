import {useEffect, useState} from 'react';
import Movie from '../components/Movie';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
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
    /* console.log(movies)가 두 번 실행되는 이유 = 1. setMovies()  2. setLoading() */

    /* 
    map()함수 안의 key값은 map함수 안에서 component들을 render할 때 필요하다. 
    so, Movie 에서 필요한게 아니라 이 페이지에서 map함수를 사용할 때 필요한 것 
    */
    return(
        <div>
            {loading ? <h1>Loading...</h1> : 
            <div>{movies.map(m => (
                <Movie key={m.id} coverImg={m.medium_cover_image} title={m.title} rating={m.title} synopsis={m.synopsis} genres={m.genres} />
            ))}</div>}
        </div>
    )
}

export default Home;