import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// icons
import './icons'

// reset
import 'normalize.css/normalize.css'

// index css
import './index.scss'

// redux
import { Provider } from 'react-redux'
import store from './store'

// axios global config
import './plugins/axios'

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
