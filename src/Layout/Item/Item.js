import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Item.css';

const Item = (props) => {
    return (
        <tr>
            <td>
                <Link to={`/items/${props.id}`}>{props.name}</Link>
            </td>
            <td>
                <Link to={`/items/${props.id}`}>{props.description}</Link>
            </td>
        </tr>
    );
}

Item.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
}

export default Item;