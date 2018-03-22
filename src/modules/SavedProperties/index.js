import React from 'react';
import { connect } from 'react-redux';

import Panel from '../../core/Panel';
import Listing from '../../core/Listing';

class SavedProperties extends React.Component {
    removeSavedProperty(propertyId) {
        console.log(`Removing property id: ${propertyId} from Saved Properties`);
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
        saved: state.searchReducer.saved,
    };
}

export default connect(mapStateToProps)(SavedProperties);