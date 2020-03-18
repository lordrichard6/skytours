import React, { Component } from 'react';

import logo from '../img/logo-green-2x.png';


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__logo-box">
                    <img src={logo} alt="full logo" className="footer__logo"/>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item"><a href="#header" class="footer__link">Company</a></li>
                                <li className="footer__item"><a href="#header" class="footer__link">Contact us</a></li>
                                <li className="footer__item"><a href="#header" class="footer__link">Carers</a></li>
                                <li className="footer__item"><a href="#header" class="footer__link">Privacy policy</a></li>
                                <li className="footer__item"><a href="#header" class="footer__link">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <p className="footer__copyright">
                            Built by <a href="https://www.pauloreizinho.com/" className="footer__link">Paulo Reizinho</a>. Copyright &copy; by Paulo Reizinho
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer