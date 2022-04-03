import { useState, useEffect } from "react";
import Movie from './components/Movie';
import {BrowserRouter as Router, Routes, Route, link} from "react-router-dom";
import Home from './routes/Home';
import Detail from "./routes/Detail";

function MoviePrct(){
    return <Router>
        <Routes>
            <Route path="/*" element={<Home/>}></Route>
            <Route path="/movie" element={<Detail />}></Route>
        </Routes>
    </Router>;
}

export default MoviePrct;