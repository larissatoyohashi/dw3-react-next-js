const Description = (props) =>{
    // props (propriedades do componente)
    // props é um objeto {} e possui chaves e valores
    // Ex:props.city = "Registro"
    return(
        <>
        <div>
            <p> Cidade : {props.city}</p>
            <p> Idade : {props.age}</p>
            <p> E-mail : {props.email}</p>
        </div>
        </>
    )
}

export default Description;