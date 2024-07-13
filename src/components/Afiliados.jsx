import { useContext } from "react";
import AfiliadosContext from "../context/AfiliadosProvider";

function Afiliados() {

  const {afiliados} = useContext(AfiliadosContext)

  console.log(afiliados)

  return (
    <div>Afiliados</div>
  )
}

export default Afiliados