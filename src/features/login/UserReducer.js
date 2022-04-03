import * as type from './actionTypes';

const initialState = {
    token: undefined,
    isLoggedIn: false,
    logInError: false,
    email: undefined,
    lang: undefined,
};

const reducer = (state = initialState, action) => {
  console.log("ZOMA")
  switch (action.type) {
    case `LOGIN`:
      return {
        ...state,
        token:action.payload.token,
        isLoggedIn:true,
        email: action.payload.email,
        lang: action.payload.lang
      };

      case type.FRONT_LANG:
        return {
          ...state,
          frontLang: action.payload.frontLang
        };      

    case `LOGOUT`:
      return {
        ...state,
        token:undefined,
        isLoggedIn:false,
        email: undefined,
        lang:undefined
      };
    default:
      return state;
  }
};

export default reducer;
