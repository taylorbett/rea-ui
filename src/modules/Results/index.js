import React from 'react';

import Panel from '../../core/Panel';
import Listing from '../../core/Listing';

class Results extends React.Component {
    render() {
        return(
            <Panel title={"Results"}>
                <Listing />
                <Listing />
                <Listing />
            </Panel>
        );
    }
}

export default Results;