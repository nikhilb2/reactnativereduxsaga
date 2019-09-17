import * as actions from './constants'

const initialState = {
  authorized: false,
  signinin: false,
  signinError: null,
  signinup: false,
  signupError: null,
  user: null
}

const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGOUT_DONE:
      return Object.assign({}, state, {
        authorized: false,
        user: null,
        marsh: null
      })

    case actions.SIGNUP:
      return Object.assign({}, state, {
        signinup: true,
        signupError: null
      })
    case actions.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        signinup: false,
        signupError: null
      })
    case actions.SIGNUP_FAILED:
      return Object.assign({}, state, {
        signinup: false,
        signupError: action.error
      })

    case actions.RESTORE_SESSION_SUCCESS:
      return Object.assign({}, state, {
        user: action.session ? action.session.data : null,
        authorized: !!action.session
      })


    default:
      return state
  }
}

export default signinReducer
