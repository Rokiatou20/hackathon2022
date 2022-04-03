import {useSelector} from 'react-redux';

/**
 * Custom React Hook to get count value from state.
 * @see https://reactjs.org/docs/hooks-custom.html
 */
const useIsLoggedIn = () => useSelector(state => state.login.isLoggedIn);
const  getToken = ()=>useSelector(state=>state.login.token);
const getUserLang=()=>useSelector(state=>state.login.lang);
const getFrontLang=()=>useSelector(state=>state.login.frontLang);

export  {useIsLoggedIn, getToken, getUserLang, getFrontLang};
