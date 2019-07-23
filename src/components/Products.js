import React from 'react';
import { useContext } from "react"
import {ProductContext} from "../contexts/ProductContext"

// Components
import Product from './Product';

const Products = () => {
	const { products, addItem } = useContext(ProductContext);
	console.log(products)
	console.log(addItem)
	console.log(ProductContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.key}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
