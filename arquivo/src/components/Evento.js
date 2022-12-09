import Button from "./evento/Button";

// componente
function Evento() {
    // função
    function meuEvento() {
        console.log(`Ativando primeiro evento`)
    }

    function segundoEvento() {
        console.log(`Ativando segundo evento`)
    }

    return (
        <div>
            <p>Clique no botão para acionar um evento:</p>
            <Button event={meuEvento} text="Primeiro 1º" />
            <Button event={segundoEvento} text="Segundo 2º" />
            {/* <button onClick={meuEvento}>Acionar</button> */}
        </div>
    )
}

export default Evento;