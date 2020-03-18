import React, { Component } from 'react';

import Button from '../components/Button';

class TourCard extends Component {
    render() {
        return (
            <div className="col-1-of-3">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className={`card__picture card__picture--${this.props.nr}`}>
                            &nbsp;
                        </div>
                        <h4 className="card__heading">
                            <span className={`card__heading-span card__heading-span--${this.props.nr}`}>{this.props.title}</span>
                        </h4>
                        <div className="card__details">
                            <ul>
                                <li>{this.props.item_1}</li>
                                <li>{this.props.item_2}</li>
                                <li>{this.props.item_3}</li>
                                <li>{this.props.item_4}</li>
                                <li>{this.props.item_5}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`card__side card__side--back card__side--back-${this.props.nr}`}>
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">Only</p>
                                <p className="card__price-value">{this.props.price}</p>
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