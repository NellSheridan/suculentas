import React from 'react';
import './Welcome.scss';
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Welcome = () => {
    return (
        <div className="welcome-wrapper">
                <h1 className="title-welcome">
                #Si acabas de llegar bienvenido, si ya te vas vuelve pronto
                </h1>
                <h2 className="title-secondary">
                    Colecciones
                    <br />
                    Suculentas - Cactus y más
                </h2>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur enim aut laborum voluptas accusamus rerum error, dolorum, iste hic ducimus labore, nam provident eaque autem accusantium aliquid obcaecati impedit?</p>
                <button className="btn-shop">Conoce nuestros Productos <FontAwesomeIcon icon={faArrowCircleDown} /></button>
        </div>
    )
}

export default Welcome;