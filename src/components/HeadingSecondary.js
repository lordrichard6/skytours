import React, { Component } from 'react';


class HeadingSecondary extends Component {
    render() {
        return (
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">{this.props.title}</h2> 
         </div>
        )
    }
}

export default HeadingSecondary