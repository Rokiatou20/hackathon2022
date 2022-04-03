import axios from 'axios';

const apiUrl= process.env.REACT_APP_API;
console.log('urlapi')
console.log(apiUrl)
//user related apis
const authHeaders= (token)=>{
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
  }
  
const loginGetToken =( email, password)=>{
    const params = new URLSearchParams();
    params.append('username', email);
    params.append('password', password);
    return axios.post(`${apiUrl}/api/v1/login/access-token`, params)


}
const getUsers =(token)=>{
  return axios.get(`${apiUrl}/api/v1/users`, authHeaders(token))
}
const postUser=(jsonform, token)=>{
  return axios.post(`${apiUrl}/api/v1/users/`, jsonform, authHeaders(token))
}

const updateUser=(id, jsonform, token)=>{
  return axios.put(`${apiUrl}/api/v1/users/${id}`, jsonform, authHeaders(token))
}
export {
  loginGetToken,getUsers,  postUser, updateUser
}