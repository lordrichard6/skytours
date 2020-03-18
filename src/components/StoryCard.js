import React, { Component } from 'react';

import HeadingTerciary from '../components/HeadingTerciary';

class StoryCard extends Component {
    render() {
        return (
        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img className="story__img" src={this.props.img} alt=""/>
                    <figcaption className="story__caption">{this.props.name}</figcaption>
                </figure>
                <div className="story__text">
                    <HeadingTerciary title={this.props.title} />
                    <p>
                        {this.props.text}
                    </p>
                </div>
            </div>
        </div>
        )
    }
}

export default StoryCard