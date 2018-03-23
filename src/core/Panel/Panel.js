import React from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

class Panel extends React.PureComponent {
    render() {
        return (
            <div className="panel">
                { this.props.title ? <h2 className="panel__title">{this.props.title}</h2> : null}
                {this.props.children}
            </div>
        );
    }
}

Panel.defaultProps = {
    title: null,
    children: null,
};

Panel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Panel;