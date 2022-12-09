// o "import from prop-types" ja e uma function do react
import PropTypes from 'prop-types';

function Item({marca, anoLancamento}){
    return(
        <>
            <li>{marca} - {anoLancamento}</li>
        </>
    )
}

/* essa comando é para definir a prop para ter uma boa prática de programação, para que não tenha
 erro de envio nos valores. */

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number.isRequired,
}

// definindo um valor padrao.
Item.defaultProps = {
    marca: "Sem valor informado",
    anoLancamento: 0,
}

export default Item