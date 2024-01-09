import ItemListContainer from '../itemListContainer/ItemListContainer'
import './inicio.css'

const Inicio = () => {
    return (
        <>
            <div className='inicio'>
                <h1>Bienvenidos</h1>
                <p>¡Boomerang es la pagina ideal para poder conseguir la tecnologia que estas buscando, 
                    aca tendremos todos los productos en stock a tu disposicion!!,
                    cualquier consulta nos podes comunicar con el siguiente mail: chind4mo@gmail.com
                </p>
            </div>
            <div className='productos'>
                <h1>Nuestros Productos</h1>
                <ItemListContainer showAllItems={true} />
            </div>
        </>

    )
}

export default Inicio