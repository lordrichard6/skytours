import React, { Component } from 'react';

import HeadingTerciary from './HeadingTerciary';


class FeatureBox extends Component {
    render() {
        return (
            <div className="col-1-of-4">
                <div className="feature-box">
                    {/* <i className="feature-box__icon icon-basic-world"></i> */}
                    <i className={this.props.icon}></i>
                    <HeadingTerciary title={this.props.title}/>
                    <p className="feature-box__text">
                        {this.props.text}
                    </p>
                </div>
            </div>
        )
    }
}

export default FeatureBox