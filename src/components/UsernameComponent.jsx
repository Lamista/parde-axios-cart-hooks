import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import CurrentUserContext from '../context/CurrentUserContext';

const UsernameComponent = () => {
    const [name, setName] = useState('');

    const history = useHistory();
    const { currentUser, saveUser, updateCartCount } = useContext(CurrentUserContext);

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        saveUser(username);
    }
    const handleLogout = (e) => {
        e.preventDefault();
        saveUser(undefined);
        setName('');
        updateCartCount(0);
        history.push('/');
    }

    if (currentUser === undefined) {
        return (
            <form className="navbar-form form-inline" onSubmit={handleLogin}  >
                <input onChange={handleChange} className="form-control mr-sm-2" type="text" name='username'
                    placeholder="Username" value={name} required />
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
        )
    }
    return (
        <div className="form-inline" >
            <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
        </div>
    )

}

export default UsernameComponent