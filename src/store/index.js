import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

// reducers
import example from './example/index.redux'

// sagas
import sagas from './example/sagas'

const sagaMiddleware = createSagaMiddleware()

// combine reducer
const rootReducer = combineReducers({ example })

const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    process.env.NODE_ENV === 'development' && logger
  )
)

// run the sagas
sagaMiddleware.run(sagas)

export default store
