import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="nav">
      <div className="header-buttons">
      <button><Link to="/">Inicio</Link></button>
        <button><Link to="/login">Iniciar sesion</Link></button>
        <button><Link to="/register">Registrarse</Link></button>
        
      </div>
    </header>
  );
};
