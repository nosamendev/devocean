import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NearbyPlace.css';

const Item = (props) => {
    return (
        <tr>
            <td>
                <Link to={`/items/${props.id}`}>{props.name}</Link>
            </td>
            <td>
                <Link to={`/items/${props.id}`}>
                    {props.address.number} {props.address.street} {props.address.zip} {props.address.city} {props.address.country}
                </Link>
            </td>
        </tr>
    );
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes. object.isRequired
}

export default withRouter(Item);