import React, { Component } from 'react'
import ServicesContext from '../services/ServicesContext.js';

class UsernameComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            submittedName: ''
        }
    }
    // componentDidMount = () => {
    //     this.setState({ username: (UserService.username === 'anonymous' ? '' : UserService.username) })
    // }
    //     <ServicesContext.Consumer>
    //         {({ userService }) => this.setState({ username: userService.username })}
    //     </ServicesContext.Consumer>
    // }
    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.username.value;
        this.setState({ submittedName: name })
        console.log(name);
        let { userService } = this.context;
        console.log(userService.username)
        // userService.setUsername(name);
        userService.username = name;
        console.log(userService.username)
        //cia noreciau susubmitinta username perduoti userservisui
    }
    render() {
        return (
            <form className="navbar-form" onSubmit={this.handleSubmit}  >
                <input onChange={this.handleChange} className="form-control mr-sm-2" type="text" name='username'
                    placeholder={this.state.submittedName === '' ? "Username" : this.state.submittedName} value={this.state.name} />
            </form>
        )
    }
}

UsernameComponent.contextType = ServicesContext;

export default UsernameComponent