import React, { useContext } from 'react';

import CurrentUserContext from '../context/CurrentUserContext';

const WelcomeMsg = () => {
    const { currentUser } = useContext(CurrentUserContext);

    return (
        <div className='mx-auto' style={{ width: '400px' }}>
            <h3>Hello {currentUser}!</h3>
        </div >
    )
}

export default WelcomeMsg