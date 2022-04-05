import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail(){
    // useParams()를 사용하면 url에 있는 변수값(param)을 받아올 수 있음.
    const {id} = useParams();
    /* console.log(id); */
    // detail 페이지로 접속 후, 한 번만 디테일 정보들을 받아올 것.
    const getMovieDetail = async() => {
        const json = (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    }
    
    useEffect(() => {
        getMovieDetail();
    }, []);
    return <h1>Detail</h1>
}

export default Detail;