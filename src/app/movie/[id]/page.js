import React from "react";
import styles from "../../styles/common.module.css";
import Image from "next/image";

const page = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d60903d5femsh168dbdafa7797fbp16642ajsnf870cc30a1ec",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const mainData = result[0].details;
  console.log(mainData);
  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        Netflix \ <span>{mainData.type}</span>
      </h2>
      <div className={styles.card_section}>
        <Image
          src={mainData.backgroundImage.url}
          alt={mainData.title}
          width={600}
          height={300}
        />
      </div>
      <div className={styles.card_data}>
        <h2>{mainData.title}</h2>
        <h3>{`Released In: ${mainData.releaseYear}`}</h3>

        <p>{mainData.synopsis}</p>
      </div>
    </div>
  );
};

export default page;
