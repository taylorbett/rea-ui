import React from 'react';
import { connect } from 'react-redux';

import { REMOVE_SAVED_PROPERTY } from '../../constants';

import Panel from '../../core/Panel';
import Listing from '../../core/Listing';

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

export default connect(mapStateToProps, mapDispatchToProps)(SavedProperties);