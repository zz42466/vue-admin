import axios from 'axios';

let config = {
  baseURL: 'http://ylbsaas.yuanlinbang.net/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
};

export default axios.create(config);