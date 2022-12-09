// Trabalhar com formularios
import {useState} from 'react';
import Button from './evento/Button';

function Form() {
  function cadastrarUser(e) {
    e.preventDefault();
    console.log(`Cadastrado ${name} com a senha ${password}`);
  }

  function maisUm() {
    console.log(`+ um`)
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Cadastro:</h1>
      <form onSubmit={cadastrarUser}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite uma senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="cadastrar" />
        </div>
      </form>
      <h3>Adicione:</h3>
      <Button event={maisUm} text="+"/>
    </div>
  );
}

export default Form;
