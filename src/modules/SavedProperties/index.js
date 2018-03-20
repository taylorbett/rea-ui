import React from 'react';

import Panel from '../../core/Panel';
import Listing from '../../core/Listing';

class SavedProperties extends React.Component {
    render() {
        return(
            <Panel title={"Saved Properties"}>
                <Listing />
            </Panel>
        );
    }
}

export default SavedProperties;