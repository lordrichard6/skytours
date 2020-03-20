import React, { Component } from 'react';


class Navigation extends Component { 
    constructor(props) {
        super(props);
        this.state = {
        isChecked: false,
        };
    }
    toggleChange = () => {
        this.setState({
        isChecked: !this.state.isChecked,
        });
    }

    render() {
        return (
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" checked={this.state.isChecked} onChange={this.toggleChange}/>
                <label for="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="#about" className="navigation__link" onClick={this.toggleChange} >About Skytours</a></li>
                        <li className="navigation__item"><a href="#features" className="navigation__link" onClick={this.toggleChange}>Your benefits</a></li>
                        <li className="navigation__item"><a href="#tours" className="navigation__link" onClick={this.toggleChange}>popular tours</a></li>
                        <li className="navigation__item"><a href="#stories" className="navigation__link" onClick={this.toggleChange}>stories</a></li>
                        <li className="navigation__item"><a href="#book" className="navigation__link" onClick={this.toggleChange}>book now</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation