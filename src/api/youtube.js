import React from "react";
import axios from 'axios';

const KEY = 'AIzaSyCJKs-SfU90gHi7QMAGOjT0GPQ8Zdku5Z0';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params : {
        part: 'snippet',
        maxResult:5,
        key: KEY,
        type:'video'

    }
});