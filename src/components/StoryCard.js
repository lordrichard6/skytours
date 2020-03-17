import React, { Component } from 'react';

import HeadingTerciary from '../components/HeadingTerciary';

class StoryCard extends Component {
    render() {
        return (
        <div class="row">
            <div class="story">
                <figure class="story__shape">
                    <img class="story__img" src={this.props.img} alt=""/>
                    <figcaption class="story__caption">{this.props.name}</figcaption>
                </figure>
                <div class="story__text">
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