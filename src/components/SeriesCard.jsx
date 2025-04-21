/* eslint-disable no-undef */

import styles from "./Netflix.module.css";

export const SeriesCard = ({ curElem }) => {
  //console.log(curElem);
    // Safeguard (temporary)
    if (!curElem) return <li>Invalid series data</li>;
  
    const btn_style={
        padding:'1.2rem 2.4rem',
            border:"none",
            fontSize:"1.6rem",
            backgroundColor:`${curElem.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
            color:"white",
    }

    const ratingClass = curElem.rating >= 8.5 ? styles.super_hit : styles.average;
    return (
      <li className={styles.card}>
      
        <div>
          <img
            src={curElem.img_url}
            alt={curElem.name}
            height={200}
            width={400}
          />
        </div>
        {/* <div className={styles[' card-content']}> */}
        <div className="flex flex-col gap-2 px-[3.2rem] py-[1.2rem]">
        <h2 className="text-3xl font-bold underline text-blue-600">Name: {curElem.name}</h2>
        <h3>Rating: <span className={`${styles.rating} ${ratingClass}`}>{curElem.rating}</span></h3>
        <p>Summary: {curElem.description}</p>
        <p>Genre: {curElem.genre}</p>
        <p>Cast: {curElem.cast}</p>
        <a href={curElem.watch_url} target="_blank" rel="noopener noreferrer">
          <button style={btn_style}>Watch now</button>
        </a>
        </div>
      </li>
    );
  };
  