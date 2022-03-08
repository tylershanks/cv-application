import React, {Component} from 'react';
import './styles/index.css';
import './styles/App.css';

/**
 * Main App.
 */
class App extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor() {
    super();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <div className='container'>
        <div className='entrySide'>
          Entry Side
          <div className='personalInfo'>
            <input placeholder='First Name' id='firstName' />
            <input placeholder='Last Name' id='lastName' />
            <input placeholder='Email' id='email' />
            <input placeholder='Phone #' id='phoneNumber' />
          </div>
          Experience
          <button id='addWorkExperience'>Add Work Experience</button>
          {/*
          <div className='workExperienceEntry'>
            <input placeholder='Position Title' id='positionTitle' />
            <input placeholder='Company Name' id='companyName' />
            <input placeholder='Company Location' id='companyLocation' />
            Start Date
            <input type="date" id="companyStartDate" />
            End Date
            <input type="date" id="comapnyEndDate" />
            <button id='deleteWorkExperience'>Delete</button>
          </div>
          */}
          Education
          <button id='addEducation'>Add Education</button>
          {/*
          <div className='educationSectionEntry'>
            <input placeholder='School' id='schoolName' />
            <input placeholder='School Location' id='schoolLocation' />
            <input placeholder='Degree' id='schoolDegree' />
            Start Date
            <input type="date" id="educationStartDate" />
            End Date
            <input type="date" id="educationEndDate" />
            <button id='deleteWorkExperience'>Delete</button>
          </div>
          */}
        </div>

        <div className='cvSide'>cv Side</div>
      </div>
    );
  }
}

export default App;
