// #region IMPORTS

import axios from 'axios'

// #endregion
// #region AXIOS

// Configure une instance Axios avec des paramètres par défaut
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

// Ajoute un intercepteur pour inclure le token JWT dans les requêtes
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance

// #endregion
