import {useEffect, useState} from 'react';
import classes from "../modules/Categories.module.scss";
import layout from '../modules/Layout.module.scss'
import {Fade} from "react-awesome-reveal";
import {Link} from "react-router-dom";

const Categories = () =>  {
	const [categories, setCategories] = useState([
		"electronics",
		"jewelery",
		"men's clothing",
		"women's clothing"
	]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products/categories')
			.then(res=>res.json())
			.then(json=>setCategories(json))
	}, []);


	return <>
		<Fade>
			<section className={`${classes['categories-wrapper']} ${layout['container']}`}>
				<nav>
					<ul>
						{categories.map((category, index) => (
							<div key={index}>
								<Link to={'/products'}>
									<li >{category}</li>
								</Link>
							</div>
						))}
					</ul>
				</nav>
			</section>
		</Fade>

	</>
};

export default Categories;