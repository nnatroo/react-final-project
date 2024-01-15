import classes from '../modules/Header.module.scss'
import layout from '../modules/Layout.module.scss'
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.jpg'
import productsLogo from '../assets/products.png'
import delivery from '../assets/delivery.svg'
import discount from '../assets/discount.svg'
import location from '../assets/location.svg'
import {Link} from "react-router-dom";

const Header = () => {

	return <>
		<section className={`${classes['above-header']}`}>

			<div className={`${classes['container']} ${layout['container']}`}>
				<div>
					<span>Welcome to worldwide The Jarba Emporium!</span>
				</div>

				<div className={classes['links-bar']} >
					<ul>
						<li>
							<img src={delivery} alt=""/>
							<span>Deliver to 423651</span>
						</li>
						<li>
							<img src={location} alt=""/>
							<span>Track your order</span>
						</li>
						<li>
							<img src={discount} alt=""/>
							<span>All Offers</span>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section className={classes['header']}>
			<div className={`${classes['container']} ${layout['container']}`}>
				<div className={classes['logo']}>
					<Link to={'/'}>
						<figure>
							<img src={logo} alt="logo"/>
							<h1>the jarba emporium</h1>
						</figure>
					</Link>
				</div>
				<div className={classes['cart-wrapper']}>
					<Link to={`/contact`}>
						<figure>
							<img src={location} alt="cart"/>
							<h2>Contact Us</h2>
						</figure>
					</Link>

					<Link to={'/products'}>
						<figure>
							<img src={productsLogo} alt="cart"/>
							<h2>All Products</h2>
						</figure>
					</Link>

					<Link to={`/cart`}>
						<figure>
							<img src={cart} alt="cart"/>
							<h2>Cart</h2>
						</figure>
					</Link>

				</div>
			</div>

		</section>
	</>
};

export default Header;