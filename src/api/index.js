import Request from './request'
import SearchApi from './search'

class ApiClient {
  constructor() {
    this.request = new Request()
  }

  search() {
    return new SearchApi(this.request)
  }
}

export default new ApiClient()
