import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_API
axios.defaults.timeout = 5e3
