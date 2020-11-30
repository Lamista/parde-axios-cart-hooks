import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CurrentUserContext from '../context/CurrentUserContext';
import CartInfo from './CartInfoComponent'
import UsernameComponent from './UsernameComponent'

const Navigation = () => {
    const { currentUser } = useContext(CurrentUserContext);
    return (
        <nav className="navbar navbar-light navbar-expand" style={{ backgroundColor: "#e3f2fd" }}>
            <div className='container'>
                <ul className="nav navbar-nav">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                    <NavLink className='nav-link' to={`/admin/products`}>Admin</NavLink>
                    <UsernameComponent />
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <NavLink className="nav-link" to={`/users/${currentUser}/cart-products`}>
                        <CartInfo />
                    </NavLink>
                </ul>
            </div>
        </nav >
    )
}

export default Navigation;