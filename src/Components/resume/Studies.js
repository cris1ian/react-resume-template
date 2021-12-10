import React, { Component, StyleSheet } from 'react';
import './resume.module.css';

export default class Studies extends Component {
    render() {
        const text = this.props.text || {};

        if (this.props.data) {
            var education = this.props.data.education.map(function (education) {
                return <div key={education.school} className={"avoid-page-break"}>
                    <h3>{education.school}</h3>
                    <p className="info">
                        {education.degree}
                        <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                </div>
            })
        }

        return (
            <div className="row education new-page-break">
                <div className="three columns header-col">
                    <h1><span>{text.studies}</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}