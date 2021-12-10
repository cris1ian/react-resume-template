import React, { Component, useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const USE_PRINTABLE_VERSION = false;

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

export default function App(props) {
    const [useSpanish, setUseSpanish] = useState(true);
    const [resumeData, setResumeData] = useState({});
    const [resumeText, setResumeText] = useState({});

    useEffect(() => {
        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);
    }, [])

    useEffect(() => {
        getResumeData();
        getResumeText();
    }, [useSpanish])

    const toggleLanguage = () => {
        setUseSpanish(!useSpanish);
    }

    const getResumeData = () => {
        $.ajax({
            url: useSpanish ? '/resumeDataSpanish.json' : '/resumeDataEnglish.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                setResumeData(data)
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    const getResumeText = () => {
        $.ajax({
            url: useSpanish ? '/resumeTextSpanish.json' : '/resumeTextEnglish.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                setResumeText(data)
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <div className="App">
                    <Header data={resumeData.main} text={resumeText.main} useSpanish={useSpanish} toggleLanguage={toggleLanguage} isPrintableVersion={USE_PRINTABLE_VERSION} />
                    <About data={resumeData.main} text={resumeText.main} isPrintableVersion={USE_PRINTABLE_VERSION} />
                    <Resume data={resumeData.resume} text={resumeText.resume} />
                    {/* <Portfolio data={resumeData.portfolio} text={}/> resumeText.portfolio*/}
                    <Testimonials data={resumeData.testimonials} text={resumeText.testimonials} />
                    {/* <Contact data={resumeData.main} text={}/> resumeText.main*/}
                    <Footer data={resumeData.main} text={resumeText.main} />
                </div>
            </Page>
        </Document >
    );
}
