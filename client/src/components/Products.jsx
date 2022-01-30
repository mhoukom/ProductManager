import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import Form from './Form'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data.products);
                setProducts(res.data.products);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Form
            products = {products}
            setProducts = {setProducts}
            />
            <hr/>
            <h1>All Products:</h1>
            {
                products.map((product, i) => {
                    return (
                        <div key={i}>
                            <h3>
                                <Link to={`/products/${product._id}`}>{product.title}</Link>
                            </h3>
                            <Link to={`/products/update/${product._id}`}>Update</Link>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Products;