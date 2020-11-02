import Request from './request'

class ApiClient {
  constructor() {
    this.request = new Request()
  }

  searchByTitle(params) {
    return this.request.call({ method: 'GET', params })
  }
}

export default new ApiClient()
