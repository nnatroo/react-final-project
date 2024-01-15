import classes from '../modules/Popular.module.scss'
import layout from '../modules/Layout.module.scss'
import arrow from '../assets/arrow.svg'
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Slide} from "react-awesome-reveal";
const Deals = () => {

    const [popularProducts, setPopularProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=> {
                setPopularProducts(json.slice(-5));
                console.log(json);
            })
    }, []);

    const clickHandler = (item) => {
        console.log(item)
    }

    return <>
        <Slide>
            <section className={`${classes['popular-wrapper']} ${layout['container']}`}>
                <div className={classes['popular-top-bar']}>
                    <h3>Grab the best deal on <span>Products</span> </h3>
                    <Link to={'/products'}>
                        <span>View All <img src={arrow} alt=""/></span>
                    </Link>

                </div>
                <div className={classes['popular-list']}>

                    {popularProducts.map((item, index) => (
                        <Link to={`product/${item.id}`} onClick={() => clickHandler(item)} key={index} className={classes['item-card']}>
                            <img src={item.image} alt=""/>
                            <span>{item.title.slice(0, 22)}...</span>
                            <span>{item.price} $</span>
                        </Link>
                    ))}

                </div>
            </section>
        </Slide>

    </>
};


export default Deals;