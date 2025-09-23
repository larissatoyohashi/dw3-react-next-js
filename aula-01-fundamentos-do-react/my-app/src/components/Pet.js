const Pet = ({name, breed, age}) => {
    return (
        <>
        <div>
            <p> Informações do Pet: </p>
            <ul>
                <li> Nome: {name}</li>
                <li> Raça: {breed} </li>
                <li> Idade: {age}</li>
            </ul>
        </div>
        </>
    )
}

export default Pet;