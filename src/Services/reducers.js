import {
  LOGIN,
} from './constatnts'

const initialState = {
  login: '',
  isLoading: '',
  loginReply: "please Login",
  lazyLoadReply: '',
}

// replace tods with your function and in all redux flow
export default function todos(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginReply: action.loginReply,

      }
    default:
      return state
  }
}

