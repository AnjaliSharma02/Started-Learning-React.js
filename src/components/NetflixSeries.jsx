import { SeriesCard } from "./seriesCard";
import seriesData from "../api/seriesData.json";

export const NetflixSeries = () => {
  return (
    <>
      
      <ul className="grid grid-three--cols">
        {seriesData.map((curElem) => (
          <SeriesCard key={curElem.id} curElem={curElem} />
        ))}
      </ul>
    </>
  );
};

export default NetflixSeries;
