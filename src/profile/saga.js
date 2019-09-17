import {
  SIGNUP,
  RESTORE_SESSION,
  LOGOUT
} from './constants'
import {
  restoreSessionSuccess,
  logoutDone,
  signupsuccess,
  signupfailed
} from './actions'
import { all, put, call, throttle, takeLatest } from 'redux-saga/effects'
import { login, restoreSession, logout, updateUserData } from './UserSession'


function* requestSignup(action) {
  //console.log(action)
  login({name: action.name, origin: action.orign})
}

export function* requestLogout(action) {
  yield call(logout)
  yield put(logoutDone())
}


function* requestRestoreSession(action) {
  const session = yield call(restoreSession)
  yield put(restoreSessionSuccess(session))
}


function* resoreSessionSaga() {
  yield takeLatest(RESTORE_SESSION, requestRestoreSession)
}


function* signupSaga() {
  yield takeLatest(SIGNUP, requestSignup)
}

function* logoutSaga() {
  yield takeLatest(LOGOUT, requestLogout)
}


function* mainSaga() {
  yield all([
    call(signupSaga),
    call(resoreSessionSaga),
    call(logoutSaga)
  ])
}

export default mainSaga
