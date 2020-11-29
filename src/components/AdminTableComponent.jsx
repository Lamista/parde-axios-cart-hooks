import React from 'react';
import { Link } from 'react-router-dom';

const AdminTableComponent = ({ id, itemImg, ...otherProps }) => {
    return (
        <tbody>
            <tr>
                <th scope="row">{id}</th>
                <td>
                    <img
                        src={itemImg}
                        className="card-img-top"
                        style={{ width: 50, height: 50 }}
                        alt={otherProps.title}
                    />
                </td>
                <td><Link to={`/admin/products/${id}`}>{otherProps.title}</Link></td>
            </tr>
        </tbody>
    );
};

export default AdminTableComponent