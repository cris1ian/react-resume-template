import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    const text = this.props.text || {};

    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (testimonials) {
        return <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
          </blockquote>
        </li>
      })
    }

    return (
      <section id="testimonials" className="printable-hide">
        <div className="text-container avoid-page-break">
          <div className="row">

            <div className="two columns header-col">
              <h1><span>{text.references}</span></h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">
                {testimonials}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
