import React, { Component } from 'react';
import axios from 'axios';
import Card from '../components/CardComponent';
import WelcomeMsg from '../components/WelcomeComponent';

class CardList extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios
            .get("https://itpro2017.herokuapp.com/api/products")
            .then(res => this.setState({ products: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container" >
                <WelcomeMsg />
                <div className="row row-cols-1 row-cols-md-4">
                    {this.state.products.map(({ id, ...otherProps }) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                {...otherProps}
                            />
                        )
                    })}
                </div>
            </div >
        )
    }
}

export default CardList;