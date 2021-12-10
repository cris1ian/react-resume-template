import React, { Component, StyleSheet } from 'react';
import './resume.module.css';

export default class Experience extends Component {
    render() {
        const text = this.props.text || {};

        if (this.props.data) {

            var work = this.props.data.work.map(function (work) {
                return <div key={work.company} className={"avoid-page-break"}>
                    <h3>{work.company}</h3>
                    <p>
                        {work.title}
                        <span>  &bull;  </span>
                        <em>{work.years}</em>
                        {/* <span>&bull;</span> */}
                        <br />
                        <em>{work.location}</em>
                    </p>
                    <p>{work.description}</p>
                </div>
            })
        }

        return (
            <div className="row work flexMe">

                <div className="titleContainer">
                    <h1><span>{text.experience}</span></h1>
                </div>

                <div className="worksContainer">


                    {work}
                </div>
            </div>
        );
    }
}