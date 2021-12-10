import React, { Component, StyleSheet } from 'react';
import './resume.module.css';

export default class Skills extends Component {
    render() {
        const text = this.props.text || {};

        if (this.props.data) {
            var skillmessage = this.props.data.skillmessage;

            var skills = this.props.data.skills
                .sort((a, b) => Number(b.level.replace('%', '')) - Number(a.level.replace('%', '')))
                .map((skills) => {
                    var className = 'bar-expand ' + skills.name.toLowerCase();
                    return <li key={skills.name}>
                        <span style={{ width: skills.level }} className={className}></span>
                        <div>
                            <i className={skills.className} />
                            <em>{skills.name}</em>
                        </div>
                    </li>
                })
        }

        return (
            <div className="row skill avoid-page-break">

                <div className="three columns header-col">
                    <h1><span>{text.skills}</span></h1>
                </div>

                <div className="nine columns main-col">

                    <p>{skillmessage}</p>

                    <div className="bars">
                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}