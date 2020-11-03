export default class Movie {
  constructor(movie = {}) {
    this.imdbId = movie.imdbID
    this.title = movie.Title
    this.poster = movie.Poster
    this.director = movie.Director
    this.year = movie.Year
    this.plot = movie.Plot
  }

  hasPoster() {
    return this.poster !== 'N/A'
  }
}
