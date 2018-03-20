import React from 'react';

import Panel from '../../core/Panel';
import Listing from '../../core/Listing';

class SavedProperties extends React.Component {
    removeSavedProperty(propertyId) {
        console.log(`Removing property id: ${propertyId} from Saved Properties`);
    }
    
    renderListings() {
        return this.props.savedProperties.map((result, n) => {
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

export default SavedProperties;