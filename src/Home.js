import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div>
          <div className="container">
            <div className="card">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
                <h2 className="card-header">Training Mode in Sapient</h2>
                <p className="card-para">
                Sapient provides a highly useful,productive technical skill training.Through this training i have gain a lot of knowledge in frontened as well as in backened. Basically it gives you full stack developer knowledege to some extent that one can create simple websites. Apart from classroom training they provide training in using webx every week on different different important topics.Unlike most other one-size-fits-all adoption programs, this unique blend appeals to all learning types and, because it is delivered over time, it maximizes retention and effectiveness. Additionally, the e-learning series is driven on a top-notch interface by an engaging video host that takes end users through an informative and enjoyable learning journey that introduces the new company sales philosophy and methodology, along with step-by-step Salesforce process demonstrations, knowledge checks, and even a little singing and a hell lot of fun party.I feel proud to be a part of this journey
                </p>
                <button className= "read-more" type="button">READ MORE</button>
            </div>
            
            <div className="card">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
                <h2 className="card-header">Sapient Culture</h2>
                <p className="card-para">
                Client-Focused Delivery, Creativity, Leadership, Openness, People Growth, Relationships are SapientRazorfish core values which helps in overall development of employees and the smooth functioning of the firm.While openness may be a stated value, if the actions of the organization do not support it (for e.g. rejecting ideas from junior employees without merit based investigation, rolling out policies without consulting the consumers of that policy etc.) an employee’s perception of that organization is at conflict with the stated value. This is when things start going downhill and employees start doubting everything the organization says, creating trust deficit. Instead of focusing on what is being said, employees spend their energy on what the organization really means or intends to do, often inventing conspiracy theories of their own.
                </p>
                <button className= "read-more" type="button">READ MORE</button>
            </div>
                        <div className="card">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                          <h2 className="card-header">Tech Skills</h2>
                          <p className="card-para">
                          HTML5, CSS3, JavaScript, as well as CSS framework like Bootstrap and Material Design UI, Angular 2 ,React and libraries like jQuery.
                          </p>
                          {/* <button className= "read-more" type="button">READ MORE</button> */}
                      </div>
          </div>
        </div>
    );
  }
}

export default Home;