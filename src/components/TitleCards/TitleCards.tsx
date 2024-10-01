import { Link } from "react-router-dom";
import "./TitleCards.css";
import { useRef, useEffect, useState } from "react";

type propsType = {
  title?: string;
  category:string;
};
interface Movie {
  backdrop_path: string;
  original_title: string;
  id:number;
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjI5YWZlZGUzYTdlNmI4YzU2NGZkZTcwOGQ1NjA0ZSIsIm5iZiI6MTcyNzY3MzY1NC42OTYxMzcsInN1YiI6IjY2ZmEzMzljN2YxM2I3YjEyYWEyNzI5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M90Goqm_wRW2MUVWhrFig8sHzT1r-YaIH5up46XuCec'
  }
};

const TitleCards = ({ title,category }: propsType) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [apiData, setApiData] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (cardRef.current) {
        cardRef.current.scrollLeft += event.deltaY;
      }
    };

    const currentRef = cardRef.current;
    currentRef?.addEventListener("wheel", handleWheel);

    return () => {
      currentRef?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="Title-cards m-4">
      <h2 className="mb-3">{title ? title : "Popular on Netflix"}</h2>
      <div className="cart-list" ref={cardRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt="card image"
              className="card-img"
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
