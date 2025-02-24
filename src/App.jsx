// #region IMPORTS

import './reset.css'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import PrivateRoute from './components/privateRoute'

import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'

// #endregion
// #region RENDER

function App() {

  return (
    <Routes>

      {/* Route pour la page d'accueil */}
      <Route path="/" element={<Home />}></Route>

      {/* Route protégée pour le tableau de bord */}
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

    </Routes>
  )
}

export default App

// #endregion
