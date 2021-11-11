import React, { Component } from 'react';

class Header extends Component {

    render() {
        const renderHeaderNav = false;

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
            <header id="home" >

                {renderHeaderNav ? <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Mostrar navegación</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Ocultar navegación</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">Acerca</a></li>
                        <li><a className="smoothscroll" href="#resume">CV</a></li>
                        {/* <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li> */}
                        <li><a className="smoothscroll" href="#testimonials">Referencias</a></li>
                        {/* <li><a className="smoothscroll" href="#contact">Contacto</a></li> */}
                    </ul>

                </nav> : null}

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">{name}</h1>
                        <h3>Soy un <span>{occupation}</span> viviendo en {city}. {description}.</h3>
                        <hr />
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>

            </header>
        );
    }
}

export default Header;
