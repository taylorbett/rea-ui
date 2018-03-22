import React from 'react';
import { connect } from 'react-redux';

import { ADD_SAVED_PROPERTY } from '../../constants';

import Panel from '../../core/Panel';
import Listing from '../../core/Listing';

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.addSavedProperty = this.addSavedProperty.bind(this);
    }
    
    addSavedProperty(propertyId) {
        console.log(`Adding property id: ${propertyId} to Saved Properties`);
        this.props.addSavedProperty(propertyId);
    }
    
    renderListings() {
        return this.props.results.map((result, n) => {
            return(
                <Listing
                    key={n}
                    data={result}
                    ctaText={'Add'}
                    ctaFn={this.addSavedProperty}
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
        addSavedProperty: (propertyId) => dispatch({type: ADD_SAVED_PROPERTY, propertyId}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);