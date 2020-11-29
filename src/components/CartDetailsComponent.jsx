import axios from 'axios';
import React, { Component } from 'react';
import ServicesContext from '../services/ServicesContext';
import img from '../images/samsung.jpg'
import defaultImg from '../images/default.png'

class CartDetailsComponent extends Component {
    constructor() {
        super();
        this.state = {
            userProducts: []
        }
    }

    componentDidMount = () => {
        let { userService } = this.context;
        axios
            .get(`https://itpro2017.herokuapp.com/api/users/${userService.username}/cart-products`)
            .then(res => this.setState({ userProducts: res.data }))
            .catch(err => console.log(err))
    }

    deleteFromCart = (e) => {
        let { userService } = this.context;
        axios.delete(`https://itpro2017.herokuapp.com/api/users/${userService.username}/cart-products/${e.target.value}`)
    }

    render() {
        console.log(this.state.userProducts)
        if (this.state.userProducts.length > 0) {
            return (
                <div className="container mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        {this.state.userProducts.map(({ id, image, title }) => (
                            <tbody key={id}>
                                <tr>
                                    <td>
                                        <img
                                            src={image === '/samsung.jpg' ? img : defaultImg}
                                            className="card-img-top"
                                            style={{ width: 50, height: 50 }}
                                            alt={title}
                                        />
                                    </td>
                                    <td>{title}</td>
                                    <td><button className='btn btn-danger' onClick={this.deleteFromCart} value={id}>Remove from cart</button></td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            );
        } else {
            return (
                <div className="d-flex justify-content-center">
                    <h1>No products selected</h1>
                </div>
            );
        }
    }
}


CartDetailsComponent.contextType = ServicesContext;

export default CartDetailsComponent