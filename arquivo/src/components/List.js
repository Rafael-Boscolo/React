import Item from "./Item";

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" anoLancamento={2018}/>
                <Item marca="Porsche" anoLancamento={2015}/>
                <Item  />
            </ul>
        </>
    )
}

export default List;