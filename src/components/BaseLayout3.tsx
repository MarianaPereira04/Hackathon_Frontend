import React from "react";
import { IonPage, IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";

interface BaseLayout3Props {
  image?: string;                 // Logo (opcional)
  title: string;                  // Título
  description: string;            // Descripción
  children?: React.ReactNode;     // Contenido inferior (tú manejas línea y demás)
  backTo?: string;                // Ruta opcional para la flecha (si no, goBack)
}

const BaseLayout3: React.FC<BaseLayout3Props> = ({
  image,
  title,
  description,
  children,
  backTo,
}) => {
  const history = useHistory();
  const handleGoBack = () => (backTo ? history.push(backTo) : history.goBack());

  return (
    <IonPage style={{ background: "#a8aaa9ff" }}>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#e9e9e9",
          paddingTop: "2vh",
        }}
      >
        {/* Marco tipo celular */}
        <div
          style={{
            width: "100%",
            maxWidth: "430px",
            height: "93vh",
            margin: "auto",
            marginTop: "1vh",
            borderRadius: "40px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#fdfcfcff",
          }}
        >
          {/* Flecha de retroceso */}
          <IonIcon
            icon={chevronBackOutline}
            onClick={handleGoBack}
            style={{
              position: "absolute",
              top: "18px",
              left: "18px",
              fontSize: "28px",
              color: "#000",
              cursor: "pointer",
              zIndex: 10,
            }}
          />

          {/* Header SIN línea */}
          <div
            style={{
              width: "100%",
              padding: "1.4rem 1rem 0.5rem 1rem", // sin línea aquí
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.2rem",
                width: "90%",
              }}
            >
              {/* Logo compacto */}
              {image && (
                <div
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                    border: "3px solid #000",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <img
                    src={image}
                    alt="logo"
                    style={{ width: "90%", height: "90%", objectFit: "contain" }}
                  />
                </div>
              )}

              {/* Título/Descripción */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  textAlign: "center",
                  transform: "translateX(-20px)",
                }}
              >
                <h1
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#000000ff",
                    margin: 0,
                    lineHeight: 1.1,
                  }}
                >
                  {title}
                </h1>
                <p
                  style={{
                    marginTop: "0.4rem",
                    fontSize: "0.95rem",
                    color: "#111",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    maxWidth: "90%",
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          </div>

          {/* Contenido inferior (tú agregas WhatsApp, línea y lista) */}
          <div
            style={{
              flex: 1,
              width: "100%",
              overflowY: "auto",
              padding: "0 1rem 1rem 1rem",
              boxSizing: "border-box",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </IonPage>
  );
};

export default BaseLayout3;
