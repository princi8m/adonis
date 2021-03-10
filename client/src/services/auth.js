
import axios from 'axios';
const signup = (username, password) => {
  
  return axios.
    post('http://localhost:5005/auth/signup', { username, password })
  
    .then(response => {
      
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
}
const login = (username, password) => {
  return axios.
    post('http://localhost:5005/auth/login', { username, password })
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
}
const logout = () => {
  
  return axios.
    delete('http://localhost:5005/auth/logout')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data
    })
}
export { signup, login, logout };




