import React, { Component } from 'react';

import HeadingSecondary from '../components/HeadingSecondary';
import TourCard from '../components/TourCard';
import Button from '../components/Button';


class Tours extends Component {
    render() {
        return (
            <section className="section-tours" id="tours">
                <div className="u-center-text u-margin-bottom-big">
                    <HeadingSecondary title='Our popular tours' />
                </div>
                <div className="row">
                   <TourCard    nr='1'
                                title='The sea explorer'
                                item_1='3 day tour'
                                item_2='Up to 30 people'
                                item_3='2 tour guide'
                                item_4='Sleep in cozy hotels'
                                item_5='Difficulty: easy'
                                price='CHF 399'/>
                    <TourCard    nr='2'
                                title='The Forest Hiker'
                                item_1='7 day tour'
                                item_2='Up to 40 people'
                                item_3='6 tour guide'
                                item_4='Sleep in provided tents'
                                item_5='Difficulty: medium'
                                price='CHF 599'/>
                    <TourCard    nr='3'
                                title='The snow adventurer'
                                item_1='5 day tour'
                                item_2='Up to 15 people'
                                item_3='3 tour guide'
                                item_4='Sleep in provided tents'
                                item_5='Difficulty: hard'
                                price='CHF 899'/>
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <Button href='#' class='btn btn--green' text='Discover all tours' />
                </div>
            </section>
        )
    }
}

export default Tours