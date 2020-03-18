import React, { Component } from 'react';

import HeadingSecondary from '../components/HeadingSecondary';
import Button from '../components/Button';

import photo1 from '../img/nat-1-large.jpg';
import photo2 from '../img/nat-2-large.jpg';
import photo3 from '../img/nat-3-large.jpg';

class About extends Component {
    render() {
        return (
            <section className="section-about" id="about">
                <HeadingSecondary title='Exciting tours for adventurous people' />
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-terciary u-margin-bottom-small">You're going to fall in love with nature</h3>
                        <p className="paragraph">
                            When vacation time finally comes around, we would like to find ourselves far from the hustle and bustle of daily life. What better way to do this than with a nature tour?
                        </p>
                        <h3 className="heading-terciary u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p className="paragraph">
                            Skytours has put together the perfect list of guided tours, allowing the nature lover in all of us to escape the city and take the perfect pre-planned trip.
                        </p>
                        <Button href='#' class='btn-text' text='Learn more &rarr;' />
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={photo1} alt="photo1" className="composition__photo composition__photo--p1"/>
                            <img src={photo2} alt="photo2" className="composition__photo composition__photo--p2"/>
                            <img src={photo3} alt="photo3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About