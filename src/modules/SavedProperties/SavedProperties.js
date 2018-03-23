import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { REMOVE_SAVED_PROPERTY } from '../../constants';

import Panel from '../../core/Panel';
import Listing from '../../core/Listing';

/**
 * Container for displaying a user's saved properties.
 * 
 * Renders an array of [Listing](/#listing) components with a CTAs to remove from Saved Properties, at which point the listing will return to Results.
*/
class SavedProperties extends React.Component {
    constructor(props) {
        super(props);

        this.removeSavedProperty = this.removeSavedProperty.bind(this);
    }
    
    removeSavedProperty(propertyId) {
        console.log(`Removing property id: ${propertyId} from Saved Properties`);
        this.props.removeSavedProperty(propertyId);
    }
    
    renderListings() {
        if (!this.props.saved.length) {
            return(
                <p>You have no saved properties.</p>
            );
        }
        return this.props.saved.map((result, n) => {
            return(
                <Listing
                    key={n}
                    data={result}
                    ctaText={'Remove'}
                    ctaFn={this.removeSavedProperty}
                />
            );
        });
    }
    
    render() {
        return(
            <Panel title={"Saved Properties"}>
                {this.renderListings()}
            </Panel>
        );
    }
}

function mapStateToProps(state) {
    return {
        saved: state.search.saved,
    };
}

function mapDispatchToProps(dispatch) {
    return { 
        removeSavedProperty: (propertyId) => dispatch({type: REMOVE_SAVED_PROPERTY, propertyId}),
    };
}

SavedProperties.defaultProps = {
    saved: [],
};

SavedProperties.propTypes = {
    /** An array of objects each containing the required data for a listing */
    saved: PropTypes.arrayOf(
        PropTypes.shape({
            price: PropTypes.string,
            agency: PropTypes.shape({
                brandingColors: PropTypes.objectOf(PropTypes.string),
                logo: PropTypes.string,
            }),
            id: PropTypes.string,
            mainImage: PropTypes.string,
        })
    ),
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedProperties);