import React, { Component } from 'react';

import logo from '../img/logo-white.png';
import Button from '../components/Button';

class Header extends Component {
    render() {
        return (
        <header class="header">
            <div class="header__logo-box">
                <img src={logo} alt="natours logo" class="header__logo"/>
            </div>
            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Skytours</span>
                    <span class="heading-primary--sub">know nature like a pro</span>
                </h1>
                <Button href='#tours' class='btn btn--white btn--animated' text='See the Tours' />
            </div>
        </header>
        )
    }
}

export default Header