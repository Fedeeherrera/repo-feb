import { useState, createContext, useEffect } from "react";

const AfiliadosContext = createContext()

const AfiliadosProvider = ({children}) => {
  const [afiliados, setAfiliados] = useState('')  
  const URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSc4mWTLRAcXOoHtVo1mQCIH_fwEULlVg-qZaLrA-LgkzbGVbCfGStZfYIUDZitTiaZImICkW2P1zqc/pub?output=csv';

  useEffect(() => {
    fetch(URL)
      .then(res => res.text())
      .then(data => {
        const afiliadosCsv = data.split('\n').slice(1).map(fila => {
          const [id, nombre, apellido, fechaAfiliado, dni] = fila.split(",");
          return { id, nombre, apellido, fechaAfiliado, dni };
        })
        setAfiliados(afiliadosCsv)
      })
      .catch(err => console.error("Problemas al hacer el fetch." + err))
  }, [])




  return (
    <AfiliadosContext.Provider value={{ afiliados }}>
      {children}
    </AfiliadosContext.Provider>
  );
};

export { AfiliadosProvider };

export default AfiliadosContext;