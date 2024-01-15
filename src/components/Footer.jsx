import classes from '../modules/Footer.module.scss'
import layout from '../modules/Layout.module.scss'
import down1 from '../assets/play-store.jpg'
import down2 from '../assets/app-store.jpg'
import {Fade} from "react-awesome-reveal";
import {Link} from "react-router-dom";
const Footer = () => {

    return <>
        <Fade>
            <section className={`${classes['footer-wrapper']}`}>

                <div className={`${layout['container']} ${classes['container']}`}>
                    <div className={classes['footer-contact']}>
                        <Link to={'/'}>
                            <h2>The Jarba </h2>
                        </Link>
                        <span>Download App</span>
                        <figure>
                            <img src={down1} alt=""/>
                            <img src={down2} alt=""/>
                        </figure>

                    </div>

                    <div className={classes['footer-categories']}>
                        <span>Most Popular Categories</span>
                        <nav>
                            <ul>
                                <Link to={'/products'}>
                                    <li>Staples</li>
                                </Link>
                                <Link to={'/products'}>
                                    <li>Beverages</li>
                                </Link>
                                <Link to={'/products'}>
                                    <li>Personal Care</li>
                                </Link>
                                <Link to={'/products'}>
                                    <li>Home Care</li>
                                </Link>
                                <Link to={'/products'}>
                                    <li>Baby Care</li>
                                </Link>
                                <Link to={'/products'}>
                                    <li>Vegetables & Fruits</li>
                                </Link>
                                <Link to={'/products'}>
                                    <li>Snacks & Foods</li>
                                </Link>
                                <Link to={'/products'}>
                                    <li>Dairy & Bakery</li>
                                </Link>
                            </ul>
                        </nav>
                    </div>

                    <div className={classes['footer-categories']}>
                        <span>Customer Services</span>
                        <nav>
                            <ul>
                                <Link to={'/contact'}><li>About Us</li></Link>
                                <Link to={'/contact'}><li>Terms & Conditions</li></Link>
                                <Link to={'/contact'}><li>FAQ</li></Link>
                                <Link to={'/contact'}><li>Privacy Policy</li></Link>
                                <Link to={'/contact'}><li>E-waste Policy</li></Link>
                                <Link to={'/contact'}><li>Cancellation & Return Policy</li></Link>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={`${layout['container']} ${classes['under-footer-bar']}`}>
                    <span>© 2023 All rights reserved. Natro</span>
                </div>

            </section>
        </Fade>

    </>;
}

export default Footer;