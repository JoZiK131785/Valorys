import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../api/apiFunctions/loginFunctions";
import "./home.css"; // Importation du fichier CSS

const Home = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    pseudo: "",
    email: "",
    password: "",
  });

  // 🔹 Vérification du token et redirection automatique vers le Dashboard
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/dashboard"); // Redirige directement si un token est présent
    }
  }, [navigate]);

  // Gestion des changements dans les formulaires
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // Soumission du formulaire de connexion
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(loginData);
      alert("Connexion réussie !");
      navigate("/dashboard"); // ✅ Redirige après connexion réussie
    } catch (error) {
      alert("Échec de la connexion");
    }
  };

  // Soumission du formulaire d'inscription
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(registerData);
      alert("Inscription réussie !");
      navigate("/dashboard"); // ✅ Redirige après inscription réussie
    } catch (error) {
      alert("Échec de l'inscription");
    }
  };

  return (
    <div className="home-container">
      {/* Section Connexion */}
      <div className="form-container login">
        <h2>Connexion</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
          <button type="submit">Se connecter</button>
        </form>
      </div>

      {/* Section Inscription */}
      <div className="form-container register">
        <h2>Inscription</h2>
        <form onSubmit={handleRegisterSubmit}>
          <input
            type="text"
            name="pseudo"
            placeholder="Pseudo"
            value={registerData.pseudo}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={registerData.email}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={registerData.password}
            onChange={handleRegisterChange}
            required
          />
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
