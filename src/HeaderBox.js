import React, { Component } from 'react';
import './HeaderBox.css';
import searchIcon from './search-icon.png';


class HeaderBox extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false
        };
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render() {
        let searchForm = this.state.showForm ? (
            <form className="menu__search-form" method="POST">
                <input className="menu__search-input" placeholder="Type and hit enter" />
            </form>
        ) : '';

        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
            ) : (
                <a className="menu__link" href={link.link}>{link.label}</a>
            );

            return (
                <li key={index} className="menu__list-item">
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav className="menu">
                <h1 className="menu__Title">BlackJack Tutor</h1>

                <div className="menu__right active">
                    <ul className="menu__list active">
                        {linksMarkup}
                    </ul>

                    <button onClick={this.showForm.bind(this)} style={{
                    backgroundImage: 'url(' + searchIcon + ')'
                    }} className="menu__search-button"></button>

                    {searchForm}
                </div>
                
            </nav>
        );
    }
}

export default HeaderBox;