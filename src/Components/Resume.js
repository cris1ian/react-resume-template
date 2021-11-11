import React, { Component } from 'react';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var skillmessage = this.props.data.skillmessage;

            var education = this.props.data.education.map(function (education) {
                return <div key={education.school}>
                    <h3>{education.school}</h3>
                    <p className="info">
                        {education.degree}
                        <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                </div>
            })

            var work = this.props.data.work.map(function (work) {
                return <div key={work.company}>
                    <h3>{work.company}</h3>
                    <p className="info">
                        {work.title}
                        <span>&bull;</span>
                        <em className="date">{work.years}</em>
                        {/* <span>&bull;</span> */}
                        <br />
                        <em className="date">{work.location}</em>
                    </p>
                    <p>{work.description}</p>
                </div>
            })

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

            var other = this.props.data.other.map((other) =>
                <li key={other}><em>{other}</em></li>
            )

            var extraCurricular = this.props.data.extraCurricular.map((extraCurricular) =>
                <li key={extraCurricular}><em className={"extra-curricular-body"}>{extraCurricular}</em></li>
            )
        }

        return (
            <section id="resume">

                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Formación</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span>Experiencia</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>

                <div className="row skill">

                    <div className="three columns header-col">
                        <h1><span>Habilidades</span></h1>
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

                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span>Otras</span></h1>
                    </div>

                    <div className="nine columns main-col other">
                        {other}
                    </div>
                </div>

                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span className="extra-curricular-title" >Intereses y actividades extra curriculares</span></h1>
                    </div>

                    <div className="nine columns main-col other">
                        {extraCurricular}
                    </div>
                </div>

            </section>
        );
    }
}

export default Resume;
