import React from 'react';

import Panel from '../../core/Panel';
import Listing from '../../core/Listing';

class Results extends React.Component {
    addSavedProperty(propertyId) {
        console.log(`Adding property id: ${propertyId} to Saved Properties`);
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

export default Results;