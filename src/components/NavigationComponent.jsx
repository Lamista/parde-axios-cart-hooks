import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ServicesContext from '../services/ServicesContext';
import CartInfo from './CartInfoComponent'
import UsernameComponent from './UsernameComponent'

const Navigation = () => {
    const { userService } = useContext(ServicesContext);
    return (
        <nav className="navbar navbar-light navbar-expand" style={{ backgroundColor: "#e3f2fd" }}>
            <div className='container'>
                <ul className="nav navbar-nav">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                    <NavLink className='nav-link' to={`/admin/products`}>Admin</NavLink>
                    <UsernameComponent />
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <NavLink className="nav-link" to={`/users/${userService.username}/cart-products`}>
                        <CartInfo />
                    </NavLink>
                </ul>
            </div>
        </nav >
    )
}

export default Navigation;