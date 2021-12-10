import React, { Component, StyleSheet } from 'react';
import './resume.module.css';

export default class Other extends Component {
    render() {
        const text = this.props.text || {};

        if (this.props.data) {
            var other = this.props.data.other.map((other) =>
                <li key={other}><em>{other}</em></li>
            )
        }

        return (
            <div className="row work avoid-page-break">

                <div className="three columns header-col">
                    <h1><span>{text.other}</span></h1>
                </div>

                <div className="nine columns main-col other">
                    {other}
                </div>
            </div>
        );
    }
}