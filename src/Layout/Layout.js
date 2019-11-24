import React from 'react';
import Header from '../Layout/Header/Header';
import './Layout.css';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default Layout;