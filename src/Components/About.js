import React, { Component } from 'react';

export default function About(props) {

	console.log('props', props);
	const name = props.data && props.data.name;
	const profilepic = props.data && "images/" + props.data.image;
	const bio = props.data && props.data.bio;
	const street = props.data && props.data.address.street;
	const city = props.data && props.data.address.city;
	const state = props.data && props.data.address.state;
	const zip = props.data && props.data.address.zip;
	const phone = props.data && props.data.phone;
	const email = props.data && props.data.email;
	const resumeDownload = props.data && props.data.resumedownload;

	// render() {

	// 	if (this.props.data) {
	// 		var name = this.props.data.name;
	// 		var profilepic = "images/" + this.props.data.image;
	// 		var bio = this.props.data.bio || [];
	// 		var street = this.props.data.address.street;
	// 		var city = this.props.data.address.city;
	// 		var state = this.props.data.address.state;
	// 		var zip = this.props.data.address.zip;
	// 		var phone = this.props.data.phone;
	// 		var email = this.props.data.email;
	// 		var resumeDownload = this.props.data.resumedownload;
	// 	}

	return (
		<section id="about">
			<div className="row">
				<div className="three columns">
					<img className="profile-pic" src={profilepic} alt="Profile Pic" />
				</div>
				<div className="nine columns main-col">
					<h2>Acerca de mí</h2>
					<p>{bio}</p>
					<div className="row">
						<div className="columns contact-details">
							<h2>Detalles de contacto</h2>
							<p className="address">
								<span>{name}</span><br />
								<span>{street}<br />
									{city} {state}, {zip}
								</span><br />
								<span>{phone}</span><br />
								<span>{email}</span>
							</p>
						</div>
						<div className="columns download">
							<p>
								<a href={resumeDownload} className="button"><i className="fa fa-download"></i>Descargar CV</a>
							</p>
						</div>
					</div>
				</div>
			</div>

		</section>
	);
	// }
}
