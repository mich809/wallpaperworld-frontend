import axios from 'axios'


axios.defaults.baseURL = "http://localhost:8080/api/user";
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('jwt')

export const register = async () => await axios.post('/register', { username : 'react51', password: 'password' })
                                               .then(function(response){console.log('success')})
                                               .catch(function(error){console.log(error + "status code: " + error.res)})

export const login = async () => await axios.post('/login', { username : 'react51', password: 'password' })
                                            .then(function(response){localStorage.setItem('jwt', response.data['jwt'])})
                                            .catch(function(error){console.log(error + "status code: " + error.res)})

export const addToFavorites = async () => await axios.put('/AddToFavorites', { username : 'react51', password: 'password' })
                                            .then(function(response){})
                                            .catch(function(error){console.log(error + "status code: " + error.res)})

export const removeFromFavorites = async (pictureID) => await axios.put('/removeFromFavorites', {param: {pictureID : pictureID} })
                                            .then(function(response){})
                                            .catch(function(error){console.log(error + "status code: " + error.res)})
                                    
export const getUserInfo = async (username) => await axios.get('/getUser',{params: {username: username}})
                                            .then(function(response){console.log(response)})
                                            .catch(function(error){console.log(error + "status code: " + error.res)})
        

    

