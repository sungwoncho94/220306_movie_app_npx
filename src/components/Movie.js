import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, rating, synopsis, genres, id }){
    return (
        <div>
            <figure>
                <img src={coverImg}/>
                <figcaption>
                    <Link to={`/movie/${id}`}><h3>{title} ({rating})</h3></Link>
                    <span>{synopsis}</span>
                    <ul>{genres.map(g => (
                        <li key={g}>{g}</li>
                    ))}</ul>
                </figcaption>
            </figure>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;