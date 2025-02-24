// #region IMPORTS

import axiosInstance from '../axios'
import API_ROUTES from '../apiRoutes'

// #endregion
// #region USER

// Fonction pour enregistrer un nouvel utilisateur
export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post(API_ROUTES.auth.register, userData)
    const { token, userId, userName, userEmail } = response.data
    
    // Stocke le token JWT et les informations de l'utilisateur dans le sessionStorage
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('userId', userId)
    sessionStorage.setItem('userName', userName)
    sessionStorage.setItem('userEmail', userEmail)

    return response.data
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error.response?.data || error.message)
    throw error
  }
}

// Fonction pour connecter un utilisateur
export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post(API_ROUTES.auth.login, credentials)
    const { token, userId, userName, userEmail } = response.data
    
    // Stocke le token JWT et les informations de l'utilisateur dans le sessionStorage
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('userId', userId)
    sessionStorage.setItem('userName', userName)
    sessionStorage.setItem('userEmail', userEmail)

    return response.data
  } catch (error) {
    console.error('Erreur lors de la connexion:', error.response?.data || error.message)
    throw error
  }
}

// #endregion
