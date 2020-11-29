import React, { Component } from "react";
import axios from "axios";
import AdminTableComponent from "../components/AdminTableComponent";
import img from '../images/samsung.jpg'
import defaultImg from '../images/default.png'
import { Link } from "react-router-dom";

export default class AdminListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        axios
            .get("https://itpro2017.herokuapp.com/api/products")
            .then((prod) => {
                this.setState({ products: prod });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { data } = this.state.products;
        if (data) {
            console.log(data);
            return (
                <div className="container mt-5">
                    <Link to={`/admin/products/new`} className="btn btn-primary mb-5">
                        Add new product
                    </Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                            </tr>
                        </thead>
                        {data.map(({ id, image, ...otherProps }) => (
                            <AdminTableComponent
                                key={id}
                                id={id}
                                itemImg={image === '/samsung.jpg' ? img : defaultImg}
                                {...otherProps}
                            />
                        ))}
                    </table>
                </div>
            );
        } else {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }
    }
}