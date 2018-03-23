import React from 'react';
import PropTypes from 'prop-types';
import './Listing.css';

/**
 * Component for showing a small snapshot of a property listing.
 * 
 * Can have interaction through CTAs or presumably become a link through to a property page.
*/
class Listing extends React.PureComponent {
    render() {
        if (!this.props.data) {
            return null;
        }
        const listingStyle = {
            borderColor: `${this.props.data.agency.brandingColors.primary}`,
        };
        const listingImage = {
            backgroundImage: `url(${this.props.data.mainImage})`,
        };
        return (
            <div className='listing' style={listingStyle} key={this.props.data.id}>
                <div className='listing__image' style={listingImage} />
                <img className='listing__logo' alt='Agency logo' src={this.props.data.agency.logo} />
                <p className='listing__price'>{this.props.data.price}</p>
                {this.props.ctaText && this.props.ctaFn ?
                    <button className="listing__primary-cta" onClick={() => this.props.ctaFn(this.props.data.id)}>
                        {this.props.ctaText}
                    </button>
                : null}
            </div>
        );
    }
}

Listing.defaultProps = {
    ctaText: '+',
    ctaFn: null,
};

Listing.propTypes = {
    /** An object containing the required data for a listing */
    data: PropTypes.shape({
        price: PropTypes.string,
        agency: PropTypes.shape({
            brandingColors: PropTypes.objectOf(PropTypes.string),
            logo: PropTypes.string,
        }),
        id: PropTypes.string,
        mainImage: PropTypes.string,
    }).isRequired,
    /** Optional text label for the primary CTA. */
    ctaText: PropTypes.string,
    /** Optional function hook adding an interaction to the listing*/
    ctaFn: PropTypes.func,
};

export default Listing;