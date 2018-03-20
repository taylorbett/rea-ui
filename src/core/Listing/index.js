import React from 'react';
import './index.css';

class Listing extends React.PureComponent {
    render() {
        const listingStyle = {
            borderColor: `${this.props.data.agency.brandingColors.primary}`,
        };
        const listingImage = {
            backgroundImage: `url(${this.props.data.mainImage})`,
        };
        return (
            <div className='listing' style={listingStyle} key={this.props.data.id}>
                <div className='listing__image' style={listingImage} />
                <img className='listing__logo' src={this.props.data.agency.logo} />
                <p className='listing__price'>{this.props.data.price}</p>
                <button className="listing__primary-cta" onClick={() => this.props.ctaFn(this.props.data.id)}>{this.props.ctaText}</button>
            </div>
        );
    }
}

export default Listing;