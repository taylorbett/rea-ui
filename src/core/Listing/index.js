import React from 'react';
import './index.css';

class Listing extends React.PureComponent {
    render() {
        const listingStyle = {
            borderColor: '#ffe512',
        };
        const listingImage = {
            color: 'green',
            backgroundImage: 'url(http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg)',
        };
        return (
            <div className='listing' style={listingStyle} >
                <div className='listing__image' style={listingImage} />
                <img className='listing__logo' src='http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif' />
                <p className='listing__price'>$999,999</p>
            </div>
        );
    }
}

export default Listing;