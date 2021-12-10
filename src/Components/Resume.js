import React, { Component, StyleSheet } from 'react';
import './resume/resume.module.css';
import Experience from './resume/Experience';
import ExtraCurricular from './resume/ExtraCurricular';
import Other from './resume/Other';
import Skills from './resume/Skills';
import Studies from './resume/Studies';

export default class Resume extends Component {
    render() {

        return (
            <section id="resume" >

                <Studies {...this.props} />
                <Experience {...this.props} />
                <Skills {...this.props} />
                <Other {...this.props} />
                <ExtraCurricular {...this.props} />

            </section>
        );
    }
}