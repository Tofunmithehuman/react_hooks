import React, { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import LifeInAYear from './Components/Media/LifeInAYear.jfif';
import CaptinMarvel from './Components/Media/CaptinMarvel.jfif';
import FiveFeetApart from './Components/Media/FiveFeetApart.jfif'
import JohnWick from './Components/Media/JohnWick.jfif';
import TheFaultInOurStars from './Components/Media/TheFaultInOurStars.jfif';
import Button from 'react-bootstrap/Button';


function App() {
  const [movies, setMovies] = useState([
    // Initial movie data
    {
      title: 'Life In A Year',
      description: 'A 17 year old finds out that his girlfriend is dying, so he sets out to give her an entire life, Life in a Year is a 2020 American romantic drama film directed by Mitja Okorn.',
      posterURL: LifeInAYear,
      rating: 5.0,
    },
    {
      title: 'Captin Marvel',
      description: 'The story follows Danvers as she becomes Captain Marvel after Earth is caught in the center of a galactic conflict between two alien civilizations.',
      posterURL: CaptinMarvel,
      rating: 4.9,
    },
    {
      title: 'Five Feet Apart',
      description: 'Teenagers Stella Grant and Will Newman have cystic fibrosis (CF), a genetic disorder that damages organs and makes patients vulnerable to infections.',
      posterURL: FiveFeetApart,
      rating: 4.6,
    },
    {
      title: 'John Wick 3',
      description: 'The film centers on John Wick going on the run from a legion of hitmen after a bounty is placed for his murder. it is a 2019 American neo-noir.',
      posterURL: JohnWick,
      rating: 4.9,
    },
    {
      title: 'The Fault In Our Stars',
      description: 'The story centers on a sixteen-year-old cancer patient, played by Woodley, where she meets and subsequently falls in love with another cancer patient.',
      posterURL: TheFaultInOurStars,
      rating: 4.8,
    },
    // Add more movies here
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleFilterChange = (value, type) => {
    if (type === 'title') {
      setTitleFilter(value);
    } else if (type === 'rating') {
      setRatingFilter(value);
    }
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="bg-secondary p-3">
      <div className="container">
        <h1>Tofunmi Movies</h1>
        <div className="filter-button">
        <Filter
          handleFilterChange={handleFilterChange}
          titleFilter={titleFilter}
          ratingFilter={ratingFilter}
          />
          <Button className='mt-3' onClick={() => addMovie({ title: 'New Movie', description: '', posterURL: '', rating: 0 })} variant="primary">
            Add Movie
            </Button>
          </div>
      </div>
      <MovieList 
        movies={movies.filter((movie) =>
          movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
          movie.rating >= ratingFilter
        )}
      />
    </div>
  );
}

export default App;