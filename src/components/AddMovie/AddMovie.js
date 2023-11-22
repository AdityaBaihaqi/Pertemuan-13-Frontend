import React, { useState } from "react";
import Button from "../ui/Button";
import styled from "styled-components";

const AddMovie = (props) => {
  // props yang datanya berasal dari main
  const { movies, setMovies } = props;

  // state yang menghandle proses inputan
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [genre, setGenre] = useState("");

  // arrow function menhandle inputan title
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleLink = (e) => {
    setLink(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  // arrow function menhandle inputan date
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  // arrow function menhandle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" && date === "") {
      alert("title dan date kosong");
    } else if (title === "") {
      alert("title kosong");
    } else if (date === "") {
      alert("date kosong");
    } else {
      const movie = {
        id: 14,
        title: title,
        date: date,
        image: link,
        genre: genre,
      };

      setMovies([...movies, movie]);
      alert("Berhasil menambahkan movie baru");
    }
  };

  const options = [
    "Crime",
    "Action",
    "Adventure",
    "Romance",
    "Comedy",
    "Mistery",
    "Drama",
    "Horror",
    "History",
  ];

  return (
    <AddMovieStyle>
      <div className="container">
        <form className="addmovie" onSubmit={handleSubmit}>
          <h2>Tambah Koleksi Movie</h2>
          <input
            placeholder="Masukkan judul"
            className="addmovie__input"
            id="title"
            type="text"
            value={title}
            onChange={handleTitle}
          />
          <input
            placeholder="Masukkan link"
            className="addmovie__input"
            id="link"
            type="text"
            value={link}
            onChange={handleLink}
          />
          <select
            placeholder="Option Genre"
            className="addmovie__input"
            id="genre"
            value={genre}
            onChange={handleGenre}
          >
            <option value={""} disabled>
              Opsi genre
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <input
            className="addmovie__input"
            id="date"
            type="date"
            value={date}
            onChange={handleDate}
          />
          <Button variant="secondary">Simpan</Button>
        </form>
      </div>
    </AddMovieStyle>
  );
};

const AddMovieStyle = styled.div`
  .container {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .addmovie {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    border-radius: 15px;
    border-style: solid;
    background-color: rgb(0, 0, 0);
    border-color: rgb(124, 124, 124);
  }

  h2 {
    color: white;
    margin-bottom: 20px;
  }

  .addmovie__title {
    margin-top: 1rem;
    color: white;
    text-align: center;
    font-size: 1.6rem;
  }

  .addmovie__input {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 1rem;
    width: 250px;
    height: 30px;
  }

  @media (min-width: 768px) {
    .addmovie {
      margin: 100px;
      height: auto;
    }
    .addmovie__input {
      width: 260px;
    }
  }
`;

export default AddMovie;
