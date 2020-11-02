import axios from 'axios'

export default class Request {
  constructor() {
    this.api = axios.create({
      baseURL: `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.VUE_APP_OMDB_KEY}`,
      timeout: 10000
    })
  }

  call({ method = 'GET', url = '', data, params, timeout = 10000 }) {
    return new Promise((resolve, reject) => {
      this.api({
        method,
        url,
        params,
        data,
        timeout
      })
        .then(response => resolve(response.data))
        .catch(error => {
          reject(error)
        })
    })
  }
}
