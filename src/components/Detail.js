import React from "react";
import {useState, useEffect } from 'react';
const Detail = (props) => {
  const [detail, setDetail] = useState({});
  const id = props.idPara;
  const getMovieDetail = async (id) =>{
      const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=c9127ecc`)
      const responseJson = await response.json();
      setDetail(responseJson);
  }
  useEffect(()=>{
    getMovieDetail(id);
  },[detail])
  return (
    <div className="container-fluid d-flex mt-4 mb-4">
      <img src={detail.Poster}></img>
      <div className="col-2"></div>
      <div className="infomation">
      <h1>Title: {detail.Title}</h1>
      <p>Actor: {detail.Actors}</p>
      <p>Genre: {detail.Genre}</p>
      <p>Country: {detail.Country}</p>
      <p>Writer: {detail.Writer}</p>
      <p>Director: {detail.Director}</p>
      <p>Language: {detail.Language}</p>
      <p>Runtime: {detail.Runtime}</p>
      <p>Released: {detail.Released}</p>
      <button className="btn btn-primary"><b>Watch Movie</b></button>
      </div>
</div>
  );
};

export default Detail;
