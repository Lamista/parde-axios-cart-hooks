import React from 'react';
import { Component } from 'react';
import ProductDetailsComponent from '../components/ProductDetailsComponent'
import axios from 'axios';

class ProductDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
    }

    componentDidMount() {
        axios
            .get(`https://itpro2017.herokuapp.com/api/products/${this.props.match.params.id}`)
            .then(res => this.setState({ product: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        if (this.state.product !== null) {
            const { id, ...otherProps } = this.state.product;
            console.log(id)
            return (
                <div className='container'>
                    <div key={id}>
                        <ProductDetailsComponent
                            id={id}
                            {...otherProps}
                        />
                    </div>
                </div>
            )
        } else {
            return (<div>Loading...</div>)
        }
    }
}

export default ProductDetailsContainer