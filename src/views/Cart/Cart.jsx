import React, { useContext } from 'react';
import { Context } from '../../services/Context';
import CartProduct from './CartProduct/CartProduct';
import './Cart.scss'

const Cart = () => {
    const { allProductsToBuy } = useContext(Context);

    const listProducts = allProductsToBuy();
    console.log(listProducts);

    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-12 col-lg-8">
                    <section className="Cart__left">
                        <h2 className="Cart__title">Carrito de Compras</h2>
                        { listProducts.map(item => <CartProduct item={item} key={item.id} /> )}
                    </section>
                </div>
                <div className="col-12 col-lg-4">
                    <section className="Cart__right">
                        <h2 className="Cart__title">Resumen de la compra</h2>
                        <div>Subtotal: S/ 400</div>
                        <div>Total: S/ 400</div>
                        <button>Continuar con el pago</button>
                    </section>
                </div>
            </div>
        </div>
    ) 
 
}

export default Cart;