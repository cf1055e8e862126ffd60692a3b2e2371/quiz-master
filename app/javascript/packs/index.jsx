import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import AppRouter from './router'
import Reducers from './reducers'
import Sagas from './sagas'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  Reducers,
  applyMiddleware(sagaMiddleware, logger),
)
sagaMiddleware.run(Sagas)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
