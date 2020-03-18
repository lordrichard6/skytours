import React, { Component } from 'react';

import img from '../img/popup-1.jpg';


class Popup extends Component {
    render() {
        return (
            <div className="popup" id="popup">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src={img} alt="tour pic" className="popup__img"/>
                    </div>
                    <div class="popup__right">
                        <a href="#tours" className="popup__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                        <h3 className="heading-terciary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                        <p className="popup__text"> Before concluding a package travel contract, Skytours, hereinafter called "GA" 
                            is obliged to inform you (”you” or “the customer”) about all essentials of your tour booking, which are significant, 
                            and about your rights according to EU Package Travel Directive 2015/2302. You will find significant information regarding 
                            your tour in the applicable detailed tour description as well as in these terms and conditions. 
                            The EU requested information formsheet regarding your rights as customer will be on the ST website, 
                            available in your travel agent’s office and downloadable in all booking systems. <br/>
                            The following provisions shall be, as effectively agreed, incorporated content of the package travel 
                            contract between you and GA. They are supplementary to the statutory provisions of CHF 651a – y BGB (Swiss Civil Code) 
                            and the information requirements for travel organizer in accordance with Art 250, 252 EGBGB and fill it out. <br/>
                            In addition, the General Conditions of Carriage of Passengers (Conditions of Carriage/Guest Ticket Contract) 
                            for air/sea transport services of each operating air/sea carrier with regular scheduled flights/cruises 
                            with international airlines or cruise companies will become part of the contract.</p>
                        <a href="#book" className="btn btn--green">Book now!</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup