import React, { Component } from 'react';

import FeatureBox from '../components/FeatureBox';

// import photo1 from '../img/nat-1-large.jpg';
// import photo2 from '../img/nat-2-large.jpg';
// import photo3 from '../img/nat-3-large.jpg';

class Features extends Component {
    render() {
        return (
            <section className="section-features" id="features">   
                <div className="row">
                    <FeatureBox 
                            title='Explore the world' 
                            icon='feature-box__icon icon-basic-world'
                            text='Of all the books in the world, the best stories are found between the pages of a passport.'/>
                    <FeatureBox 
                            title='Meet nature' 
                            icon='feature-box__icon icon-basic-compass'
                            text='Keep close to Nature’s heart… and break clear away, once in a while, and climb a mountain or spend a week in the woods. Wash your spirit clean.'/>
                    <FeatureBox 
                            title='find your way' 
                            icon='feature-box__icon icon-basic-map'
                            text='Travelers are dreamers who make their desires for adventure a reality.'/>
                    <FeatureBox 
                            title='live a healthier life' 
                            icon='feature-box__icon icon-basic-heart'
                            text='You go to Nature to be soothed and healed, and to have your senses put together.'/>
                </div>
            </section>
        )
    }
}

export default Features