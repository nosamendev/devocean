import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItems } from '../../store/actions'; 
import Item from '../Item/Item';
import Loader from '../Loader/Loader';

const ItemList = (props) => {

    useEffect(() => {
        props.fetchItems();
    }, []);

    const displayItems = () => {

        if (props.error) {
            return (
                <tr>
                    <td colSpan="2" className="error">{props.errorDescription}</td>
                </tr>
            )
        }
        if (props.items) {
            const items = props.items.map((_, i) => {
                return <Item 
                    id={props.items[i].id} 
                    name={props.items[i].name} 
                    description={props.items[i].description} 
                    key={i} />            
            });
            return items;
        }    
    }

    if (props.loading) {
        return <Loader />;
    }
    
    return (
        <React.Fragment>
            <section className="item-list"> 
                <table>
                    <thead>
                        <tr>
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayItems()}  
                    </tbody>
	            </table>                        
            </section>
        </React.Fragment>
    );
}

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    fetchItems: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    errorDescription: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
        items: state.fetchItemsReducer.clients,
        errorDescription: state.fetchItemsReducer.description.message,
        error: state.fetchItemsReducer.error,
        loading: state.fetchItemsReducer.loading
    }
}

export default connect(mapStateToProps, { fetchItems })(ItemList);