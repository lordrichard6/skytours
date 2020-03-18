import React, { Component } from 'react';


class Button extends Component {
    render() {
        return (
            <a href={this.props.href} className={this.props.class}>{this.props.text}</a>
        )
    }
}

export default Button