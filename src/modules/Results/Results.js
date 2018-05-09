import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as SearchActions from '../../actions/searchActions';

import Panel from '../../core/Panel';
import Listing from '../../core/Listing';

/**
 * Container for displaying property results after a filter or search.
 * 
 * Renders an array of [Listing](/#listing) components with a CTAs to add to Saved Properties, at which point the listing will be removed from Results.
*/
class Results extends React.Component {
    constructor(props) {
        super(props);

        this.addSavedProperty = this.addSavedProperty.bind(this);
        this.disableResult = this.disableResult.bind(this);
    }
    
    addSavedProperty(propertyId) {
        this.props.dispatch(SearchActions.addSavedProperty(propertyId));
    }

    disableResult(propertyId) {
        this.props.dispatch(SearchActions.disableResult(propertyId));
    }
    
    renderListings() {
        if (!this.props.results || !this.props.results.length) {
            return(
                <p>Oops! You're all out of results!</p>
            );
        }
        console.log('rendering Results with', this.props.results);
        return this.props.results.map((result, n) => {
            return(
                <Listing
                    key={n}
                    data={result}
                    primaryCtaText={'Add'}
                    primaryCtaFn={this.addSavedProperty}
                    negativeCtaText={'Disable'}
                    negativeCtaFn={this.disableResult}
                />
            );
        });
    }
    
    render() {
        return(
            <Panel title={"Results"}>
                {this.renderListings()}
            </Panel>
        );
    }
}

function mapStateToProps(state) {
    return {
        results: state.search.results,
    };
}

function mapDispatchToProps(dispatch) {
    return { 
        actions: bindActionCreators(SearchActions.addSavedProperty, dispatch),
        dispatch
    };
}

Results.defaultProps = {
    results: [],
};

Results.propTypes = {
    /** An array of objects each containing the required data for a listing */
    results: PropTypes.arrayOf(
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

export default connect(mapStateToProps, mapDispatchToProps)(Results);