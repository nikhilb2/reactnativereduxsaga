import * as actions from './constants'

export const restoreSession = () => ({
  type: actions.RESTORE_SESSION
})

export const restoreSessionSuccess = session => ({
  type: actions.RESTORE_SESSION_SUCCESS,
  session
})



export const signup = (name, origin) => ({
  type: actions.SIGNUP,
  name,
  origin
})


export const signupsuccess = result => ({
  type: actions.SIGNUP_SUCCESS,
  result
})

export const signupfailed = error => ({
  type: actions.SIGNUP_FAILED,
  error
})

export const logout = () => ({
  type: actions.LOGOUT
})

export const logoutDone = () => ({
  type: actions.LOGOUT_DONE
})
