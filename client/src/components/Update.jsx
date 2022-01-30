import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from 'axios';

const Update = () => {

    const history = useHistory();
    const {id} = useParams();
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data.product);
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch(err => console.log(err));
    }, [])

    const update = (e) => {
        e.preventDefault();

        const newProduct = {
            title,
            price,
            description
        }

        axios.put(`http://localhost:8000/api/products/${id}`, newProduct)
            .then(res => {
                console.log(res.data);
                history.push("/products");
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={update}>
            <h1>Update Product</h1>
            <div>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>
            <div>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </div>
            <div>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </div>
            <button>Update</button>
        </form>
    )
}

export default Update;