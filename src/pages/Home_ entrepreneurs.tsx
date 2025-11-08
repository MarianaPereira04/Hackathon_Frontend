// src/pages/Home_entrepreneurs.tsx
import React from "react";
import { useHistory } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { cubeOutline, handRightOutline } from "ionicons/icons";
import BaseLayout1 from "../components/BaseLayout1";

const Home_entrepreneurs: React.FC = () => {
  const history = useHistory();

  // 🔹 Navegaciones
  const goAddProduct = () => history.push("/add_product");
  const goViewProducts = () => history.push("/entrepreneur_products");
  const goProfile = () => history.push("/profile_entrepreneurs"); // ✅ nuevo
  const logout = () => history.push("/enter");

  return (
    <BaseLayout1
      image="/imagenes/logo2.png"
      title="Wilapp"
      description="Donde el talento huilense se encuentra con el mundo"
      backTo="/enter"
    >
      {/* Contenedor centrado */}
      <div
        style={{
          width: "100%",
          maxWidth: 380,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "1rem 1.2rem 2rem",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            margin: "0.5rem 0 1rem",
            fontSize: "1.3rem",
            fontWeight: 800,
            color: "#111",
            textAlign: "center",
          }}
        >
          Mis negocios
        </h2>

        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            border: "2px solid #000",
            overflow: "hidden",
            background: "#f5f5f5",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/imagenes/huellitas.png"
            alt="Huellitas saludables"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* ✅ Botón con navegación al perfil */}
        <button
          onClick={goProfile}
          style={{
            width: "90%",
            padding: "14px 16px",
            marginBottom: "1.2rem",
            borderRadius: 12,
            border: "2px solid #000",
            background: "#fff",
            color: "#111",
            fontSize: "1rem",
            fontWeight: 600,
            textAlign: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            cursor: "pointer",
          }}
          title="Huellitas saludables"
        >
          Huellitas saludables
        </button>

        {/* Botones outline */}
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <button
            onClick={goAddProduct}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 12,
              border: "2px solid #000",
              background: "#fff",
              color: "#111",
              fontSize: "1rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              cursor: "pointer",
            }}
          >
            Agregar producto
            <IonIcon icon={cubeOutline} style={{ fontSize: 24, color: "#111" }} />
          </button>

          <button
            onClick={goViewProducts}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 12,
              border: "2px solid #000",
              background: "#fff",
              color: "#111",
              fontSize: "1rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              cursor: "pointer",
            }}
          >
            Ver productos
            <IonIcon
              icon={handRightOutline}
              style={{ fontSize: 24, color: "#111" }}
            />
          </button>
        </div>

        <button
          onClick={logout}
          style={{
            width: "90%",
            padding: "14px 16px",
            border: "none",
            borderRadius: 12,
            background: "#000",
            color: "#fff",
            fontWeight: 800,
            fontSize: "1rem",
            marginTop: "2rem",
            boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
            cursor: "pointer",
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </BaseLayout1>
  );
};

export default Home_entrepreneurs;
