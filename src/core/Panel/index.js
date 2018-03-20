import React from 'react';
import './index.css';

class Panel extends React.PureComponent {
    render() {
        return (
            <div className="panel">
                <h2 className="panel__title">{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}

export default Panel;