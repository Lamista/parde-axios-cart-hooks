import React, { useContext, useEffect } from 'react';
import axios from 'axios'
import ServicesContext from '../services/ServicesContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartSummaryComponent = () => {
    const { userService } = useContext(ServicesContext);

    useEffect(() => {
        axios
            .get(`/users/${userService.username}/cart-products`)
            .then(res => userService.productCount = res.data.length())
            .catch(err => console.log(err))
    })

    return (
        <div>
            <h2><FontAwesomeIcon icon={faShoppingCart} /> {userService.productCount}</h2>
        </div>
    )
}

export default CartSummaryComponent