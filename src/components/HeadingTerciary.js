import React, { Component } from 'react';


class HeadingTerciary extends Component {
    render() {
        return (
            <h3 className="heading-terciary u-margin-bottom-small">{this.props.title}</h3>
        )
    }
}

export default HeadingTerciary