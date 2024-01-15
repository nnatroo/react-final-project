import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import classes from "../modules/Product.module.scss";
import layout from "../modules/Layout.module.scss";
import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import {Slide} from "react-awesome-reveal";


const Product = () => {
    const { id } = useParams();
    const [itemData, setItemData] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=> {
                setItemData(json);
            })
    }, []);


    return <>
        <Header />
        <Slide>
            <section className={`${classes['product-wrapper']} ${layout['container']}`}>
                <figure>
                    <img src={itemData.image} alt=""/>
                </figure>
                <div className={classes['item-content']}>
                    <span>{itemData.category}</span>
                    <h2>{itemData.title}</h2>
                    <h3>$ {itemData.price}</h3>
                    <p>{itemData.description}</p>
                    <hr/>
                    <button>Add to Cart</button>
                </div>
            </section>
        </Slide>
        <Footer />
    </>;
}

export default Product;