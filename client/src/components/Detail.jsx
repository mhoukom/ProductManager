import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link, useParams, useHistory} from "react-router-dom";
    
const Detail = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data.product);
            })
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then( res => {
                console.log(res.data);
                history.push("/products");
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
            <Link to="/products">Home</Link>
        </div>
    )
}
    
export default Detail;