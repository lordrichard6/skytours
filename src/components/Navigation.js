import React, { Component } from 'react';


class Navigation extends Component {
    render() {
        return (
            <div class="navigation">
                <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>
                <label for="navi-toggle" class="navigation__button">
                    <span class="navigation__icon">&nbsp;</span>
                </label>
                <div class="navigation__background">&nbsp;</div>
                <nav class="navigation__nav">
                    <ul class="navigation__list">
                        <li class="navigation__item"><a href="#about" class="navigation__link">About Skytours</a></li>
                        <li class="navigation__item"><a href="#features" class="navigation__link">Your benefits</a></li>
                        <li class="navigation__item"><a href="#tours" class="navigation__link">popular tours</a></li>
                        <li class="navigation__item"><a href="#stories" class="navigation__link">stories</a></li>
                        <li class="navigation__item"><a href="#book" class="navigation__link">book now</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation