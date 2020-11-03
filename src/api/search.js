export default class SearchApi {
  constructor(request) {
    this.request = request
  }

  getMoviesByTitle(title, page = 1) {
    const params = {
      s: title,
      type: 'movie',
      page
    }
    return this.request.call({ method: 'GET', params })
  }

  getMovieById(id) {
    const params = {
      i: id,
      type: 'movie',
      plot: 'full'
    }
    return this.request.call({ method: 'GET', params })
  }
}
