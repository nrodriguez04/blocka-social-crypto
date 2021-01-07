import React, { Component } from 'react';

//image
import logo from '../images/Logo.png';

//styles
import '../../styles/_navigation.scss';

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                    <img src={logo} alt="Blocka Logo" className="logo"/>
                    <ul>
                        <li>Home</li>    
                        <li>Markets</li> 
                        <li>Creddit</li> 
                        <li>Learn</li> 
                        <li>Finance</li> 
                    </ul>
    
                <div className="main__buttons">
                    <button>Log In</button>
                    <button>Register</button>
                </div>
            </div>
        );
    }
};

export default Navigation;