import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">

                <h1>Explore <span>Mountain</span></h1>
                <h2>Our top class mountainer</h2>
                <h3>Make a great experience</h3>
                <h3>Win the mountains</h3>
                <h2>Budget: $500000</h2>
                <h2 className="go">Let's go!</h2>

            </div>
        </div>
    );
};

export default Header;