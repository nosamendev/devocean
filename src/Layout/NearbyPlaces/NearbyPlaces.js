import React from 'react';
import { withRouter } from 'react-router-dom';
import NearbyPlace from '../NearbyPlace/NearbyPlace';
import PropTypes from 'prop-types';
import './NearbyPlaces.css';

const NearbyPlaces = (props) => {

    const displayNearbyPlaces = () => {
        if (props.nearbyPlaces) {
            const items = props.nearbyPlaces.map((_, i) => {
                return <NearbyPlace 
                    id={props.nearbyPlaces[i].id} 
                    name={props.nearbyPlaces[i].name} 
                    address={props.nearbyPlaces[i].address} 
                    key={i} />            
            });
            
            return items;
        }
    }

    return (
        <table>
            <tbody>
                {displayNearbyPlaces()}
            </tbody>
        </table>
        
    );
}

NearbyPlaces.propTypes = {
    nearbyPlaces: PropTypes.array.isRequired
}

export default withRouter(NearbyPlaces);