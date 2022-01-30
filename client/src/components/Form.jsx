import React, {useState} from 'react';
import axios from 'axios';

const Form = ({products, setProducts}) => {


    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res.data);
                setProducts([...products, res.data])
            }) 
            .catch(err => console.log(err));
        
        setTitle("");
        setPrice("");
        setDescription("");
    
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
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
            <button>Create</button>
        </form>
    )
}

export default Form;