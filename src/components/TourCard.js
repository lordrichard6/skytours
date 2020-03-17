import React, { Component } from 'react';

import Button from '../components/Button';

class TourCard extends Component {
    render() {
        return (
            <div class="col-1-of-3">
                <div class="card">
                    <div class="card__side card__side--front">
                        <div className={`card__picture card__picture--${this.props.nr}`}>
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class={`card__heading-span card__heading-span--${this.props.nr}`}>{this.props.title}</span>
                        </h4>
                        <div class="card__details">
                            <ul>
                                <li>{this.props.item_1}</li>
                                <li>{this.props.item_2}</li>
                                <li>{this.props.item_3}</li>
                                <li>{this.props.item_4}</li>
                                <li>{this.props.item_5}</li>
                            </ul>
                        </div>
                    </div>
                    <div class={`card__side card__side--back card__side--back-${this.props.nr}`}>
                        <div class="card__cta">
                            <div class="card__price-box">
                                <p class="card__price-only">Only</p>
                                <p class="card__price-value">{this.props.price}</p>
                            </div>
                            <Button href='#popup' class='btn btn--white' text='Book Now!' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TourCard