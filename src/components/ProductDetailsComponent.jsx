import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../images/samsung.jpg'
import ServicesContext from '../services/ServicesContext';

const ProductDetailsComponent = ({ id, title, image, description, price, quantity }) => {
    const { userService } = useContext(ServicesContext);
    const addToCart = () => {
        console.log(id);
        console.log(userService.username);
        axios
            .post(`https://itpro2017.herokuapp.com/api/users/${userService.username}/cart-products`,
                {
                    "id": id,
                    "image": image,
                    "title": title
                })
            .then(() => console.log("success"))
            .catch(err => console.log(err))

    }

    return (
        <div>
            <div className="media">
                <img className="align-self-start mr-3" src={img} alt={title} style={{
                    height: '25rem'
                }} />
                <div className="media-body mt-3">
                    <h5 className="mt-0">{title}</h5>
                    <p>{description}</p>
                    <p>{price}€</p>
                    <p>{quantity}</p>
                </div>
            </div>
            <div className='row ml-5 mt-3'>
                <button className="btn btn-primary mr-1" onClick={addToCart}>Add to cart</button>
                <Link to={'/'} className="btn btn-secondary">Back</Link>
            </div>
        </div>

    )
}

export default ProductDetailsComponent;