import React, { Component } from 'react';


class Navigation extends Component {

    render() {
        const navListItems = document.getElementsByClassName("navigation__item");
        for(let i = 0; i < navListItems.length; i++){ 
            navListItems[i].onclick = () => {
                document.getElementById("navi-toggle").checked = false;
            };
        }

        return (
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
                <label for="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="#about" className="navigation__link">About Skytours</a></li>
                        <li className="navigation__item"><a href="#features" className="navigation__link">Your benefits</a></li>
                        <li className="navigation__item"><a href="#tours" className="navigation__link">popular tours</a></li>
                        <li className="navigation__item"><a href="#stories" className="navigation__link">stories</a></li>
                        <li className="navigation__item"><a href="#book" className="navigation__link">book now</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation