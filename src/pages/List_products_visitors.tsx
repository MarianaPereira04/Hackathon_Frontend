// src/pages/list_products_visitors.tsx
import React, { useMemo, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { logoWhatsapp } from "ionicons/icons";
import BaseLayout3 from "../components/BaseLayout3";
import "../theme/Login.css"; // reutilizamos .login-btn

type Empresa = {
  nombre: string;
  descripcion: string;
  logo: string;
  telefono?: string;
};

type Producto = {
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number; // en COP (o la moneda que uses)
};

const ListProductsVisitors: React.FC = () => {
  const location = useLocation<{ empresa?: Empresa }>();
  const history = useHistory();
  const empresa = location.state?.empresa;

  if (!empresa) {
    history.replace("/home_visitors");
    return null;
  }

  // 🔹 Productos con descripción y precio
  const productosPorEmpresa: Record<string, Producto[]> = useMemo(
    () => ({
      "Shalena Chocolatería": [
        {
          nombre: "Tableta 70% Cacao",
          imagen: "/imagenes/prod_choco1.png",
          descripcion: "Tableta artesanal con notas afrutadas y tostadas.",
          precio: 12000,
        },
        {
          nombre: "Bombones Surtidos",
          imagen: "/imagenes/prod_choco2.png",
          descripcion: "Caja surtida de bombones rellenos (9 unidades).",
          precio: 18000,
        },
        {
          nombre: "Cacao en polvo",
          imagen: "/imagenes/prod_choco3.png",
          descripcion: "Cacao 100% puro para bebidas y repostería.",
          precio: 15000,
        },
      ],
      "Huellitas Saludables": [
        {
          nombre: "Galletas de pollo",
          imagen: "/imagenes/prod_huellas1.png",
          descripcion: "Snack horneado para perros, alto en proteína.",
          precio: 9000,
        },
        {
          nombre: "Figuras de perro",
          imagen: "/imagenes/prod_huellas2.png",
          descripcion: "Galletas con formas divertidas, sin conservantes.",
          precio: 8500,
        },
        {
          nombre: "Bocaditos mixtos",
          imagen: "/imagenes/prod_huellas3.png",
          descripcion: "Mix de sabores naturales: res, pollo y hígado.",
          precio: 10000,
        },
      ],
      "Charms Beauty": [
        {
          nombre: "Set de collares",
          imagen: "/imagenes/prod_charms1.png",
          descripcion: "Collares ajustables con baño dorado.",
          precio: 28000,
        },
        {
          nombre: "Aretes minimal",
          imagen: "/imagenes/prod_charms2.png",
          descripcion: "Aretes hipoalergénicos de diseño minimalista.",
          precio: 15000,
        },
        {
          nombre: "Kit belleza",
          imagen: "/imagenes/prod_charms3.png",
          descripcion: "Kit con espejo, brochitas y cosmetiquera.",
          precio: 35000,
        },
      ],
      "Herbolaria Ancestral": [
        {
          nombre: "Té de hierbas",
          imagen: "/imagenes/prod_herbo1.png",
          descripcion: "Infusión relajante con mezcla de hierbas del Huila.",
          precio: 12000,
        },
        {
          nombre: "Ungüento natural",
          imagen: "/imagenes/prod_herbo2.png",
          descripcion: "Ungüento calmante con extractos naturales.",
          precio: 18000,
        },
        {
          nombre: "Aceite esencial",
          imagen: "/imagenes/prod_herbo3.png",
          descripcion: "Aceite aromático para masajes y difusor.",
          precio: 26000,
        },
      ],
    }),
    []
  );

  const productos = productosPorEmpresa[empresa?.nombre] || [];

  // 🔸 Estado para expandir/colapsar detalles por índice
  const [abiertos, setAbiertos] = useState<Set<number>>(new Set());

  const toggleDetalle = (idx: number) => {
    setAbiertos((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  // Formateador simple de precio COP
  const money = (v: number) =>
    new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(v);

  return (
    <BaseLayout3
      image={empresa.logo || "/imagenes/logo2.png"}
      title={empresa.nombre}
      description={empresa.descripcion}
      backTo="/home_visitors"
    >
      {/* 🔹 Ícono de WhatsApp (ligeramente a la derecha) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8px",
          marginBottom: "10px",
          transform: "translateX(30px)",
        }}
      >
        <a
          href={`https://wa.me/${empresa.telefono || "573001112233"}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Contactar por WhatsApp"
        >
          <IonIcon
            icon={logoWhatsapp}
            style={{
              fontSize: "2.2rem",
              color: "#25D366",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>
      </div>

      {/* 🔸 Línea divisoria */}
      <div
        style={{
          width: "72%",
          height: "2px",
          backgroundColor: "#000",
          margin: "0.6rem auto 0.8rem auto",
        }}
      />

      {/* 🔸 Listado de productos */}
      <div
        style={{
          width: "100%",
          display: "grid",
          placeItems: "center",
          gap: 12,
          padding: "0.2rem 0 1rem 0",
          boxSizing: "border-box",
        }}
      >
        {productos.map((p, idx) => {
          const abierto = abiertos.has(idx);
          return (
            <div
              key={idx}
              style={{
                width: "92%",
                maxWidth: 370,
                display: "flex",
                alignItems: "center",
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                padding: "10px 12px",
                gap: 12,
                flexDirection: "column", // para que el detalle se vea debajo
              }}
            >
              {/* Fila superior: imagen + nombre + botón */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  gap: 12,
                }}
              >
                {/* Imagen */}
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "2px solid #000",
                    background: "#f5f5f5",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Título + botón */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: "1rem",
                      color: "#111",
                      fontWeight: 800,
                      lineHeight: 1.15,
                    }}
                  >
                    {p.nombre}
                  </h4>

                  <div style={{ marginTop: 4, display: "flex", gap: 8 }}>
                    <button
                      className="login-btn login-btn--secondary"
                      style={{
                        width: "auto",
                        padding: "8px 12px",
                        fontSize: "0.9rem",
                      }}
                      onClick={() => toggleDetalle(idx)}
                    >
                      {abierto ? "Ocultar" : "Ver detalle"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Panel de detalle (colapsable) */}
              {abierto && (
                <div
                  style={{
                    width: "100%",
                    marginTop: 8,
                    borderTop: "1px solid #eee",
                    paddingTop: 8,
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 6px 0",
                      fontSize: "0.95rem",
                      color: "#333",
                      lineHeight: 1.35,
                    }}
                  >
                    <strong>Descripción: </strong>
                    {p.descripcion}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1rem",
                      color: "#111",
                      fontWeight: 700,
                    }}
                  >
                    Precio: {money(p.precio)}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </BaseLayout3>
  );
};

export default ListProductsVisitors;
