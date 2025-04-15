"use client";

import React, { createContext, useState } from 'react';

export const ProgramacionContext = createContext({});

export const ProgramacionProvider = ({ children }) => {
  const [programas, setProgramas] = useState([
    { nombre: "Noticias en Vivo", horario: "8:00 AM - 9:00 AM", descripcion: "Las últimas noticias nacionales e internacionales." },
    { nombre: "Cocina Creativa", horario: "12:00 PM - 1:00 PM", descripcion: "Recetas innovadoras y consejos culinarios." },
    { nombre: "Deportes al Día", horario: "6:00 PM - 7:00 PM", descripcion: "Resumen de los eventos deportivos más destacados." },
  ]);

  const agregarPrograma = (nuevoPrograma) => {
    setProgramas([...programas, nuevoPrograma]);
  };

  const actualizarPrograma = (index, programaActualizado) => {
    const nuevosProgramas = [...programas];
    nuevosProgramas[index] = programaActualizado;
    setProgramas(nuevosProgramas);
  };

  const eliminarPrograma = (index) => {
    const nuevosProgramas = programas.filter((_, i) => i !== index);
    setProgramas(nuevosProgramas);
  };

  return (
    <ProgramacionContext.Provider value={{ programas, agregarPrograma, actualizarPrograma, eliminarPrograma }}>
      {children}
    </ProgramacionContext.Provider>
  );
};