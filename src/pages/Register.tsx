import React from "react";
import { useHistory } from "react-router-dom"; // 🔹 Importar para redirigir
import "../theme/Login.css";
import BaseLayout2 from "../components/BaseLayout2";

const Register: React.FC = () => {
  const history = useHistory();

  const handleRegisterClick = () => {
    history.push("/login_entrepreneurs"); // 🔹 Redirige al login de emprendedores
  };

  return (
    <BaseLayout2
      logo="/imagenes/logo.png"
      bottomLeftImage="/imagenes/estatua.png"
      bottomRightImage="/imagenes/cafe.png"
      backTo="/login_entrepreneurs" // 🔹 Flecha también lleva al login
    >
      <div className="login-container">
        {/* Campos */}
        <input
          type="text"
          placeholder="Código NIT"
          className="login-input"
        />
        <input
          type="text"
          placeholder="Nombre de empresa"
          className="login-input"
        />
        <textarea
          placeholder="Descripción"
          className="login-input"
          style={{
            height: "18px", // 🔹 igual altura que los inputs
            resize: "none", // 🔹 evita redimensionar
          }}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
        />

        {/* Botón principal */}
        <button
          className="login-btn login-btn--primary"
          onClick={handleRegisterClick} // 🔹 Acción de registro
        >
          Registrarse
        </button>

        {/* Términos */}
        <p className="login-terms">
          Al registrarte, aceptas nuestros{" "}
          <strong>Términos de servicio</strong> y{" "}
          <strong>Política de privacidad</strong>.
        </p>
      </div>
    </BaseLayout2>
  );
};

export default Register;
