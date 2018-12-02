import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import App from './components/App.js'

// enable the Redux DevTools in Chrome and Firefox
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
const store = createStore(reducer, reduxDevTools && reduxDevTools())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
