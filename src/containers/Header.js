import React, { Component } from 'react';

import logo from '../img/logo-white.png';
import Button from '../components/Button';

class Header extends Component {
    render() {
        return (
        <header className="header" id='header'>
            <div className="header__logo-box">
                <img src={logo} alt="natours logo" className="header__logo"/>
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Skytours</span>
                    <span className="heading-primary--sub">know nature like a pro</span>
                </h1>
                <Button href='#tours' class='btn btn--white btn--animated' text='See the Tours' />
            </div>
        </header>
        )
    }
}

export default Header