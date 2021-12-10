import React, { Component } from 'react';

class Header extends Component {

    render() {
        const renderHeaderNav = !this.props.isPrintableVersion;
        const text = this.props.text || {};

        if (this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            var city = this.props.data.address.city;
            var networks = this.props.data.social.map(
                (network) => <li key={network.name}>
                    <a href={network.url}>
                        <i className={network.className}></i>
                    </a>
                </li>
            )
        }

        return (
            <header id="home">

                <nav id="nav-wrap" >
                    <div className="printable-hide">

                        {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">{text.showNavigation}</a> */}
                        {/* <a className="mobile-btn" href="#home" title="Hide navigation">{text.hideNavigation}</a> */}

                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">{text.home}</a></li>
                            <li><a className="smoothscroll" href="#about">{text.about}</a></li>
                            <li><a className="smoothscroll" href="#resume">{text.resume}</a></li>
                            {/* <li><a className="smoothscroll" href="#portfolio">{text.portfolio}</a></li> */}
                            <li><a className="smoothscroll" href="#testimonials">{text.testimonials}</a></li>
                            {/* <li><a className="smoothscroll" href="#contact">{text.contact}</a></li> */}
                            <li>
                                <button onClick={this.props.toggleLanguage}>
                                    <i className="fas fa-language" />{this.props.useSpanish ? ' Español' : ' English'}
                                </button>
                            </li>
                        </ul>
                    </div>

                </nav>

                <div className="row banner avoid-page-break">
                    <div className="banner-text">
                        <h1 className="responsive-headline">{name}</h1>
                        <h3>{text.iAmAn} <span>{occupation}</span> {text.livingIn} {city}. {description}.</h3>
                        <hr />
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>


                <p className="scrolldown printable-hide">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header>
        );
    }
}

export default Header;
