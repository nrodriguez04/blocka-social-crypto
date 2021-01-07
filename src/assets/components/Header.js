import React, { Component } from 'react';

//components
import Welcome from './Welcome';

//styles
import '../../styles/_header.scss';


class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <Welcome />
                <span className="title">Social X Crypto</span>
                <p className="description">Join the best crypto community today!</p>
                <form className="header-signup">
                    <input type="email" placeholder="email@emailprovider.com" required />
                    <button className="header-button">Register</button>
                </form>
            </div>
        );
    }
};

export default Header;