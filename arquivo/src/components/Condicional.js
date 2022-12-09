import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  }

  return (
    <div>
      <h2>Cadaste seu Email:</h2>
      <form>
        <input
          type="email"
          palceholder="Digiete seu email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button type="submit" onClick={enviarEmail}>
          Enviar e-mail
        </button>
        {userEmail}
      </form>
    </div>
  );
}

export default Condicional;
