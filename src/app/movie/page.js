import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "../styles/common.module.css";
import { resolve } from "styled-jsx/css";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d60903d5femsh168dbdafa7797fbp16642ajsnf870cc30a1ec",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const mainData = result.titles;

  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Series & Movies</h1>
        <div className={styles.card_section}>
          {mainData.map((ele) => {
            return <MovieCard key={ele.id} {...ele} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Movie;
