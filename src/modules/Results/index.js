import React from 'react';
import { connect } from 'react-redux';

import Panel from '../../core/Panel';
import Listing from '../../core/Listing';

class Results extends React.Component {
    addSavedProperty(propertyId) {
        console.log(`Adding property id: ${propertyId} to Saved Properties`);
    }
    
    renderListings() {
        console.log(this.props);
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
        results: state.searchReducer.results,
    };
}

export default connect(mapStateToProps)(Results);