import React, { useContext, useEffect } from 'react';
import axios from 'axios'
import CurrentUserContext from '../context/CurrentUserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartSummaryComponent = () => {
    const { currentUser, cartCount, updateCartCount } = useContext(CurrentUserContext);

    useEffect(() => {
        if (currentUser !== undefined) {
            axios
                .get(`https://itpro2017.herokuapp.com/api/users/${currentUser}/cart-products`)
                .then(res => updateCartCount(res.data.length))
                .catch(err => console.log(err))
        }
    }, [currentUser, updateCartCount])

    return (
        <div>
            <h2><FontAwesomeIcon icon={faShoppingCart} /> {cartCount}</h2>
        </div>
    )
}

export default CartSummaryComponent