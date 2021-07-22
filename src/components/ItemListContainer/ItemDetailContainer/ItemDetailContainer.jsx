import React, { useState, useEffect }from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router'; 

const ItemDetailContainer = () => {
    const productsArray = [
        {
            id: '0',
            product: 'Lavanda morada en maceta 28cm',
            description: `La oreja de elefante (Alocasia) es miembro de la familia de Tulipán Verde. Se trata de una planta de hojas muy grandes, proveniente de Asia. Es una variedad estupenda para la ambientación de áreas internas y externas con gran estilo.
            Incluye una maceta y plato de arcilla pintados a mano.`,
        },
        {
            id: '1',
            product: 'Suculenta cola de burro en maceta 12cm',
            description: `La oreja de elefante (Alocasia) es miembro de la familia de Tulipán Verde. Se trata de una planta de hojas muy grandes, proveniente de Asia. Es una variedad estupenda para la ambientación de áreas internas y externas con gran estilo.
            Incluye una maceta y plato de arcilla pintados a mano.`,
        },
        {
            id: '2',
            product: 'Suculenta árbol de Jade en maceta 9cm',
            description: `La oreja de elefante (Alocasia) es miembro de la familia de Tulipán Verde. Se trata de una planta de hojas muy grandes, proveniente de Asia. Es una variedad estupenda para la ambientación de áreas internas y externas con gran estilo.
            Incluye una maceta y plato de arcilla pintados a mano.`,
        },
        {
            id: '3',
            product: 'Suculenta Calanchoe en maceta 9.5cm',
            description: `La oreja de elefante (Alocasia) es miembro de la familia de Tulipán Verde. Se trata de una planta de hojas muy grandes, proveniente de Asia. Es una variedad estupenda para la ambientación de áreas internas y externas con gran estilo.
            Incluye una maceta y plato de arcilla pintados a mano.`,
        },
        {
            id: '4',
            product: 'Lavanda4',
            description: `La oreja de elefante (Alocasia) es miembro de la familia de Tulipán Verde. Se trata de una planta de hojas muy grandes, proveniente de Asia. Es una variedad estupenda para la ambientación de áreas internas y externas con gran estilo.
            Incluye una maceta y plato de arcilla pintados a mano.`,
        }
    ]

    const [ itemToDisplay, setItemToDisplay] = useState([]);

    const { id } = useParams();

    const getSelectItem = () => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(productsArray.find((item) => item.id === id)), 2000);
        });
    };
    
    useEffect(() => {
        setItemToDisplay();
        getSelectItem().then(result => setItemToDisplay(result));
    }, [id]);

      
    return (
        <div className="detail-wrapper">
            <h2>{ itemToDisplay?.product }</h2>
            <p>{ itemToDisplay?.description }</p>
        </div>
    )
}

export default ItemDetailContainer;