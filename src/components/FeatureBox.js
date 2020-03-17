import React, { Component } from 'react';

import HeadingTerciary from './HeadingTerciary';


class FeatureBox extends Component {
    render() {
        return (
            <div class="col-1-of-4">
                <div class="feature-box">
                    {/* <i class="feature-box__icon icon-basic-world"></i> */}
                    <i class={this.props.icon}></i>
                    <HeadingTerciary title={this.props.title}/>
                    <p class="feature-box__text">
                        {this.props.text}
                    </p>
                </div>
            </div>
        )
    }
}

export default FeatureBox