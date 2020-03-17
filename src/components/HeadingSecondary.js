import React, { Component } from 'react';


class HeadingSecondary extends Component {
    render() {
        return (
        <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">{this.props.title}</h2> 
         </div>
        )
    }
}

export default HeadingSecondary