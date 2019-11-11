import React, { Fragment } from 'react';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer'

const Layout = (props) => {
    return ( 
        <Fragment>
            <Navbar />
            <div className="margin">
                {props.children}
            </div>
            <Footer />
        </Fragment>
     );
}
 
export default Layout;