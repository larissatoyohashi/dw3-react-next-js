// Importando o book useState do React
import { useState } from "react";

const Counter = () => {

 //   let x = 0;
 //   console.log(x);

 // [Consultar valor, Alterar Valor]

 const [count, setCount] = useState(0);

    return (

        // <>
        // <p> Contador : {x} </p>
        // <button onClick = {() => (x = x + 1)}> Aumentar </button>
        // </>

        <div>
            <p> Contador: {count} </p>
            <button onClick = {() => setCount(count + 1)}>Aumentar</button>
        </div>



    )
}

export default Counter