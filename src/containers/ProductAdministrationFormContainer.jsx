import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router';
import ProductAdministrationFormComponent from '../components/ProductAdministrationFormComponent'

class ProductAdministrationFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            image: "",
            description: "",
            price: "",
            quantity: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post("https://itpro2017.herokuapp.com/api/products", {
            "description": e.target.description.value,
            "id": 0,
            "image": e.target.image.value,
            "price": e.target.price.value,
            "quantity": e.target.quantity.value,
            "title": e.target.title.value
        }).then(() => this.props.history.push('/admin/products'))

        this.setState({
            title: "",
            image: "",
            description: "",
            price: "",
            quantity: ""
        })

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <ProductAdministrationFormComponent handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        )
    }
}

export default withRouter(ProductAdministrationFormContainer);
