import React, { Component } from 'react';

import Button from '../components/Button';

class Booking extends Component {
    render() {
        return (
            <section className="section-book" id="book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">Book now</h2> 
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Full Name" id="name" required/>
                                    <label for="name" className="form__label">Full name</label>
                                </div>
                                <div class="form__group">
                                    <input type="email" className="form__input" placeholder="Email" id="email" required/>
                                    <label for="email" className="form__label">Email</label>
                                </div>

                                <div className="form__group">
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="small" name="size"/>
                                        <label for="small" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Small tour
                                        </label>
                                    </div>
                                    <div className="form__radio-group u-margin-bottom-small">
                                        <input type="radio" className="form__radio-input" id="large" name="size"/>
                                        <label for="large" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Large tour
                                        </label>
                                    </div>
                                </div>
                                <div class="form__group">
                                    <Button href='#' class='btn btn--green' text='Next step &rarr;' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Booking