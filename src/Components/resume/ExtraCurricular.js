import React, { Component, StyleSheet } from 'react';
import './resume.module.css';

export default class ExtraCurricular extends Component {
    render() {
        const text = this.props.text || {};

        if (this.props.data) {
            var extraCurricular = this.props.data.extraCurricular.map((extraCurricular) =>
                <li key={extraCurricular}>
                    <em className={"extra-curricular-body"}>
                        {extraCurricular}
                    </em>
                </li>
            )
        }

        return (
            <div className="row work avoid-page-break">

                <div className="three columns header-col">
                    <h1><span className="extra-curricular-title">{text.extraCurricular}</span></h1>
                </div>

                <div className="nine columns main-col other">
                    {extraCurricular}
                </div>
            </div>
        );
    }
}