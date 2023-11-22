import React, { useEffect, useState } from "react";
import GetDetailMovie from "../../utils/networks/GetDetailMovie";
import { useParams } from "react-router-dom";
import Button from "../../components/ui/Button";
import styled from "styled-components";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  const url_image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  const getDetail = async (id) => {
    const data = await GetDetailMovie(id);
    await setMovie(data);
    await setGenres(data.genres);
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  console.log(movie);

  return (
    <DeatilStyle>
      <div className="container">
        <section className="detail">
          <div className="detail__left">
            <h2 className="detail__title">{movie.title}</h2>
            <h4 className="detail__release">{movie.release_date}</h4>
            <h4 className="detail__duration">{movie.runtime} min</h4>
            {
                genres.map(
                    function(item){
                        return(
                            <h4 className="detail__genre">{item.name}</h4>
                        )
                    }
                )
            }
            <h3 className="detail__description">{movie.overview}</h3>
            <Button variant="primary">Watch</Button>
          </div>
          <div className="detail__right">
            <img className="detail__image" src={url_image} alt="placeholder" />
          </div>
        </section>
      </div>
    </DeatilStyle>
  );
};

const DeatilStyle = styled.div`
  .container {
    margin: 1rem;
  }

  .detail {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .detail__left {
    margin-bottom: 1rem;
  }

  .detail__title {
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  .detail__release {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  .detail__duration {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  .detail__genre {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  .detail__description {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .detail__button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #0c0c1d;
    color: white;
  }

  .detail__image {
    max-width: 100%;
    height: auto;
    margin-top: 1rem;
    border-radius: 25px;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 8rem auto;
    }
    .detail {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
    .detail__right {
      margin-left: 1rem;
      flex-basis: 60%;
    }
  }
`;

export default Detail;
