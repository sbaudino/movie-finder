import Movie from '../Movie'
import mockMovies from '@/api/__mocks__/mockMovies'

describe('Movie tests', () => {
  let movie
  let mockMovie

  beforeEach(() => {
    mockMovie = mockMovies[2]
    movie = new Movie(mockMovie)
  })

  it('It maps all the objects by default', () => {
    expect(movie.imdbId).toEqual(mockMovie.imdbID)
  })

  it('It returns false method hasPoster', () => {
    expect(movie.hasPoster()).toBe(false)
  })
})
