// #region IMPORTS

import React from 'react'
import { Navigate } from 'react-router-dom'

// #endregion
// #region PRIVATE ROUTE

const PrivateRoute = ({ children }) => {
  // Vérification du token JWT dans le sessionStorage
  const token = sessionStorage.getItem('token')
  // Si l'utilisateur n'est pas authentifié, redirection vers la page de connexion
  if (!token) {
    return <Navigate to="/" />
  }
  // Si l'utilisateur est authentifié, on permet l'accès à la route protégée
  return children
}

export default PrivateRoute

// #endregion
