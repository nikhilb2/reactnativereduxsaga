import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import profileReducer from './profile/reducer'
import profileSaga from './profile/saga'


const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const appReducer = combineReducers({
    profileReducer
  })
  const store = createStore(appReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(profileSaga)
  return store
}
