import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import classes from "../modules/Cart.module.scss";
import layout from "../modules/Layout.module.scss";
import {useEffect, useState} from "react";
import amex from '../assets/amex.svg'
import mastercard from '../assets/mastercard.svg'
import paypal from '../assets/paypal.svg'
import visa from '../assets/visa.svg'
import {Slide} from "react-awesome-reveal";

const Cart = () => {

    const [cartProductIds, setCartProductIds] = useState([])
    const [allProducts, setAllProducts] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=> {
                setAllProducts(json);
            })
    }, []);

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts/1')
            .then(res => res.json())
            .then(json => {
                const productIds = json.products.map(item => item.productId);
                setCartProductIds(productIds);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return <>
        <Header />
        <Slide>
            <section className={`${classes['cart-wrapper']} ${layout['container']}`}>

                <div className={classes['cart-items-wrapper']}>

                    <div className={classes['header']}>
                        <h2>MY BAG</h2>
                        <span>Items are reserved for 60 minutes</span>
                    </div>

                    <hr/>

                    <div className={classes['cart-items']}>
                        {allProducts.map((item, index) => (

                            <div key={index}>
                                {cartProductIds.includes(item.id) && <div className={classes['item']}>
                                    <figure>
                                        <img src={item.image} alt=""/>
                                    </figure>
                                    <div className={classes['item-data']}>
                                        <span className={classes['item-price']}>$ {item.price}</span>
                                        <span className={classes['item-name']}>{item.title}</span>
                                        <span>{item.description.slice(0, 200)}...</span>
                                        <span></span>
                                        <hr/>
                                    </div>
                                </div>}
                            </div>
                        ))}
                    </div>

                </div>

                <div className={classes['cart-checkout']}>
                    <div className={classes['checkout-header']}>
                        <h2>TOTAL</h2>
                        <hr/>
                        <button>
                            CHECKOUT
                        </button>

                        <div className={classes['payment-info']}>
                            <h3>WE ACCEPT:</h3>
                            <figure>
                                <img src={visa} alt=""/>
                                <img src={mastercard} alt=""/>
                                <img src={amex} alt=""/>
                                <img src={paypal} alt=""/>
                            </figure>
                            <span>Got a discount code? <p>Add it in the next step.</p></span>
                        </div>

                    </div>
                </div>

            </section>
        </Slide>

        <Footer />
    </>;
}

export default Cart;