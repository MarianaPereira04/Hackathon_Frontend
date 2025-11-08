import React from "react";
import { useHistory } from "react-router-dom";
import "../theme/Login.css";
import BaseLayout2 from "../components/BaseLayout2";

const Login: React.FC = () => {
  const history = useHistory();

  // 🔹 Ir al registro
  const handleRegisterClick = () => {
    history.push("/register_entrepreneurs");
  };

  // 🔹 Ir al home del emprendedor
  const handleContinueClick = () => {
    history.push("/home_entrepreneurs");
  };

  return (
    <BaseLayout2
      logo="/imagenes/logo.png"
      bottomLeftImage="/imagenes/estatua.png"
      bottomRightImage="/imagenes/cafe.png"
      backTo="/enter" // 🔹 Flecha lleva al Enter
    >
      <div className="login-container">
        <h2 className="login-title">Iniciar sesión</h2>
        <p className="login-subtitle">
          Ingresa tu usuario y contraseña para ingresar
        </p>

        <input
          type="text"
          placeholder="Nombre de empresa"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
        />

        {/* 🔹 Botón que redirige al Home de emprendedores */}
        <button
          className="login-btn login-btn--primary"
          onClick={handleContinueClick}
        >
          Continuar
        </button>

        <button
          className="login-btn login-btn--secondary"
          onClick={handleRegisterClick}
        >
          Registrate
        </button>

        <p className="login-terms">
          Al hacer clic en continuar, aceptas nuestros{" "}
          <strong>Términos de servicio</strong> y{" "}
          <strong>Política de privacidad</strong>.
        </p>
      </div>
    </BaseLayout2>
  );
};

export default Login;
