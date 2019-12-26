import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import NearbyPlaces from '../NearbyPlaces/NearbyPlaces';
import './ItemDetails.css';
import loader from '../../images/loader.svg';

const ItemDetails = (props) => {

    const dispalyBackgroundImage = useCallback(node => {
        if (node) {
            node.style.backgroundImage = `url(${image}), url(${loader})`;
        }
      }, []);


     if (props.items.length === 0) {
        return <Redirect to="/" /> 
     }

    const id = props.location.pathname.slice(7);
    const index = Number(id) - 1;
    const address = props.items[index].address;
    const phone = props.items[index].phone;
    const email = props.items[index].email;
    const image = props.items[index].image; 

    let nearbyPlaces = [];
    nearbyPlaces = props.items.filter((item) => {
        return (item.address.country === address.country) && !(item.id == id)
    });

    return (
        <React.Fragment>
            
            <section className="item-details"> 
                <div className="item">
                    <div ref={dispalyBackgroundImage} className="item-image"></div>
                    <div className="item-info">
                        <div className="item-address">
                            <h2>Address</h2>
                            <span>
                                {address.number} {address.street} {address.zip}<br></br>
                                {address.city}<br></br>
                                {address.country}
                            </span>
                        </div>
                        <div className="item-contact">
                            <h2>Contact</h2>
                            <span>
                                {phone}<br></br>
                                {email}
                            </span>
                        </div>
                        <div className="item-nearby-places">
                            <h2>Nearby Places</h2>
                            <NearbyPlaces nearbyPlaces={nearbyPlaces} />
                        </div>
                    </div>
                </div>
            </section>        
        </React.Fragment>
    );
}

ItemDetails.propTypes = {
    items: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        items: state.fetchItemsReducer.clients
    }
}

export default connect(mapStateToProps, null)(ItemDetails);