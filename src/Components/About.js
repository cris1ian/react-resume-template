import React, { Component } from 'react';

export default function About(props) {
    const hideDownloadButton = props.isPrintableVersion;
    const text = props.text || {};

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
            <div className="row avoid-page-break">
                <div className="three columns">
                    <img className="profile-pic" src={profilepic} alt="Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>{text.aboutMe}</h2>
                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>{text.contactDetails}</h2>
                            <p className="address">
                                <span>{name}</span><br />
                                <span>{birthdate}</span><br />
                                <span><a href={`mailto:${email}`} target='_blank'>{email}</a></span><br />
                                <span><a href={whatsappLink} target='_blank'>{phone}</a></span><br />
                                <span>{city}, {state}</span><br />
                                {/* <span>{street}, {city} {state}, {zip}</span><br /> */}
                            </p>
                        </div>
                        <div className="columns download printable-hide">
                            <p className="printable-hide">
                                <a href={resumeDownload} className="button"><i className="fa fa-download"></i>{text.downloadCv}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div >

        </section >
    );
    // }
}
