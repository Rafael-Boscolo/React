function Pessoa({nome, foto, idade, sexo}) {
  return (
    <div>
      <img src={foto} alt={nome}></img>
      <h1>Nome: {nome}</h1>
      <p>Idade: {idade}</p>
      <p>Sexo:  {sexo}</p>
    </div>
  );
}

export default Pessoa;

/*
se passar "props na function terá que adiciona em todo atributo,
 mas se passr o valor das vaiaveis como está acima, não é preciso"
 */
