import React, { useState, useEffect }from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router'; 
import ItemCount from '../../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { Context } from '../../../services/Context'

const ItemDetailContainer = () => {
    // Refactorizar item debe venir de una props al elegir el elemento
    const productsArray = [
        {
            id: '0',
            stock: 10,
            product: 'Lavanda morada en maceta 28cm',
            description: `La oreja de elefante (Alocasia) es miembro de la familia de Tulipán Verde. Se trata de una planta de hojas muy grandes, proveniente de Asia. Es una variedad estupenda para la ambientación de áreas internas y externas con gran estilo.
            Incluye una maceta y plato de arcilla pintados a mano.`,
        },
        {
            id: '1',
            stock: 5,
            product: 'Suculenta cola de burro en maceta 12cm',
            description: `La oreja de elefante (Alocasia) es miembro de la familia de Tulipán Verde. Se trata de una planta de hojas muy grandes, proveniente de Asia. Es una variedad estupenda para la ambientación de áreas internas y externas con gran estilo.
            Incluye una maceta y plato de arcilla pintados a mano.`,
        },
        {
            id: '2',
            stock: 2,
            product: 'Suculenta árbol de Jade en maceta 9cm',
            description: `La oreja de elefante (Alocasia) es miembro de la familia de Tulipán Verde. Se trata de una planta de hojas muy grandes, proveniente de Asia. Es una variedad estupenda para la ambientación de áreas internas y externas con gran estilo.
            Incluye una maceta y plato de arcilla pintados a mano.`,
        },
        {
            id: '3',
            stock: 6,
            product: 'Suculenta Calanchoe en maceta 9.5cm',
            description: `La oreja de elefante (Alocasia) es miembro de la familia de Tulipán Verde. Se trata de una planta de hojas muy grandes, proveniente de Asia. Es una variedad estupenda para la ambientación de áreas internas y externas con gran estilo.
            Incluye una maceta y plato de arcilla pintados a mano.`,
        },
        {
            id: '4',
            stock: 8,
            product: 'Lavanda4',
            description: `La oreja de elefante (Alocasia) es miembro de la familia de Tulipán Verde. Se trata de una planta de hojas muy grandes, proveniente de Asia. Es una variedad estupenda para la ambientación de áreas internas y externas con gran estilo.
            Incluye una maceta y plato de arcilla pintados a mano.`,
        }
    ]

    const { addCart } = useContext(Context);

    const [ itemToDisplay, setItemToDisplay] = useState([]);

    const { id } = useParams();

    const getSelectItem = () => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(productsArray.find((item) => item.id === id)), 1000);
        });
    };
    
    useEffect(() => {
        setItemToDisplay();
        getSelectItem().then(result => setItemToDisplay(result));
    }, [id]);

    // Logica de entregable

    const [ count, setCount ] = useState(1);

    const [ finished, setFinished ] = useState(false);

    const handleState = () => setFinished(!finished);

    const handleSend = () => {
        addCart({ ...item, quantity: count })
    }

    return (
        <div className="detail-wrapper">
            <div className="info">
                <h2>{ itemToDisplay?.product }</h2>
                <p>{ itemToDisplay?.description }</p>
            </div>
            {
                !finished ? (
                    <div>
                        <ItemCount 
                            min={1} 
                            count={count}
                            setCount={setCount}
                            max={itemToDisplay?.stock}
                        />
                        <button onClick={() => {
                            handleState();
                            handleSend();
                        }}> Comprar </button>
                    </div>
                ) : (
                    <Link to="/bolsa" onClick={handleState}>
                        <button onClick={handleState}>Terminar mi compra</button>
                    </Link>
                )
            }
            
        </div>
    )
}

export default ItemDetailContainer;