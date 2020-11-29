import React from 'react'

import ServicesContext from '../services/ServicesContext.js';

const WelcomeMsg = () => (

    <ServicesContext.Consumer>

        {({ userService }) => (
            <div className='mx-auto' style={{ width: '400px' }}>
                {/* <h3>Hello, {userService.getUsername()}!</h3> */}
                <h3>Hello, {userService.username}!</h3>
            </div >
        )}

    </ServicesContext.Consumer>

)

export default WelcomeMsg