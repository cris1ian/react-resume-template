import React, { Component } from 'react';

export default function About(props) {
    const renderDownloadButton = false;

    const name = props.data && props.data.name;
    const profilepic = props.data && "images/" + props.data.image;
    const bio = props.data && props.data.bio;
    const street = props.data && props.data.address.street;
    const city = props.data && props.data.address.city;
    const state = props.data && props.data.address.state;
    const zip = props.data && props.data.address.zip;
    const phone = props.data && props.data.phone;
    const whatsappLink = props.data && props.data.whatsappLink;
    const email = props.data && props.data.email;
    const birthdate = props.data && props.data.birthdate;
    const resumeDownload = props.data && props.data.resumedownload;

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilepic} alt="Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>About me</h2>
                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact details</h2>
                            <p className="address">
                                <span>{name}</span><br />
                                <span>{birthdate}</span><br />
                                <span><a href={`mailto:${email}`} target='_blank'>{email}</a></span><br />
                                <span><a href={whatsappLink} target='_blank'>{phone}</a></span><br />
                                <span>{street}, {city} {state}, {zip}</span><br />
                            </p>
                        </div>
                        {renderDownloadButton ? <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download CV</a>
                            </p>
                        </div> : null}
                    </div>
                </div>
            </div >

        </section >
    );
    // }
}
