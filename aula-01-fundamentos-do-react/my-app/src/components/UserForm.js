import {useState} from "react";

const UserForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

     // Criando a função que irá receber os dados do formulário e enviar para o back-end
    const handleSubmit = (event) => {
        // Evita o comportamento padrão do formuário e não recarrega a página
        event.preventDefault() 

        // Aqui seria feito o envio dos dados para a API, porém iremos simular com um concole.log
        console.log(name, email);
    };

return (
    <>
    <h1>Formulário de cadastro</h1>
    <br/>

    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite seu nome" value ={name} onChange = {(e) => setName(e.target.value)}/>
        <input type="email" placeholder="Digite seu e-mail" value ={email} onChange = {(e) => setEmail(e.target.value)}/>
    <br/>
        <button type="submit">Cadastro</button>
    </form>

    {name}
    {email}
    
    </>
)

}

export default UserForm