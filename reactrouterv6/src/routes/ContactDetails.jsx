import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const {id} = useParams(); //hook que extrai info das urls e entrega como objetos //

// 6 - redirect //
const navigate = useNavigate()
const handleContact = () =>{
  console.log("Contato Enviado!");
  return navigate("/")
}

  return (
    <div>
      <h1>Exibindo mais informações do contato: {id}</h1>
      <button onClick={handleContact} >Enviar mensagem</button>
      </div>
  )
}

export default ContactDetails;