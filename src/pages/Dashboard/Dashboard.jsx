import { useNavigate } from "react-router-dom";
import "./dashboard.css"; // Importation du fichier CSS

const Dashboard = () => {
  const navigate = useNavigate();

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userEmail");

    alert("Déconnexion réussie !");
    navigate("/"); // Redirige vers la page d'accueil (Home)
  };

  return (
    <div className="dashboard-container">
      <h1>Bienvenue sur le Dashboard</h1>
      <button className="logout-button" onClick={handleLogout}>
        Se déconnecter
      </button>
    </div>
  );
};

export default Dashboard;
