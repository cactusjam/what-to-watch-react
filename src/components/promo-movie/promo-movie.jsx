import React, {Fragment} from 'react';
import {movieDetails} from "../../types/types";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getPromoMovie} from "../../store/selectors";

const PromoMovie = (props) => {
  const {promoMovie, onPlayButtonClick} = props;
  return (
    // <section className="movie-card">
    //   <div className="movie-card__bg">
    //     <img src={promoMovie.cover} alt={promoMovie.title} />
    //   </div>

    //   <h1 className="visually-hidden">WTW</h1>
    <Fragment>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoMovie.poster} alt={promoMovie.title + ` poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoMovie.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoMovie.genre}</span>
              <span className="movie-card__year">{promoMovie.releaseYear}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayButtonClick(promoMovie.id)}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PromoMovie.propTypes = {
  promoMovie: movieDetails,
  onPlayButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
});

export default connect(mapStateToProps)(PromoMovie);
