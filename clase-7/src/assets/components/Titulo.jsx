import { useState} from "react"


const Titulo = () => {
    const [titulo, setTitulo] = useState("Andrea");
    return (
    <div>
        <h3>{titulo}</h3>
        <button onClick={()=> setTitulo("Hola")}>cambiar</button>
    </div>
)
}

export default Titulo
