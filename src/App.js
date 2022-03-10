// eslint-disable-next-line no-unused-vars
import React, {Component, useState} from 'react';
import './styles/index.css';
import './styles/App.css';

/**
 * Main App.
 * @param {event} event event
 */
class App extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor() {
    super();

    this.state = {
      personalInfo: {
        fullName: 'Full Name',
        email: 'Email',
        phoneNumber: '999-999-9999',
        spacingLine: ' | ',
      },

      workExperienceEntry: {
        companyName: 'Company Name',
        positionTitle: 'Position Title',
        companyLocation: 'Company Location',
        companyStartDate: 'YYYY-MM-DD',
        companyEndDate: 'YYYY-MM-DD',
        spacingDash: ' - ',
      },

      educationEntry: {
        schoolName: 'School Name',
        schoolDegree: 'School Degree',
        schoolLocation: 'School Location',
        schoolGraduationDate: 'YYYY-MM-DD',
      },
    };
  }

  // Any time an input field is changed in the personal info section,
  // update the state which links to the right hand side's text.
  changeHandlerPersonalInfo = (event) => {
    event.persist();

    const value = event.target.value;

    // Changes the state without breaking anything that is already there
    this.setState((prevState) => ({
      personalInfo: {
        ...prevState.personalInfo,
        [event.target.id]: value,
      },
    }));
  };

  // Any time an input field is changed in the work experience section,
  // update the state which links to the right hand side's text.
  changeHandlerWorkExperience = (event) => {
    event.persist();

    const value = event.target.value;

    // Changes the state without breaking anything that is already there
    this.setState((prevState) => ({
      workExperienceEntry: {
        ...prevState.workExperienceEntry,
        [event.target.id]: value,
      },
    }));
  };

  // Any time an input field is changed in the education section,
  // update the state which links to the right hand side's text.
  changeHandlerEducation = (event) => {
    event.persist();

    const value = event.target.value;

    // Changes the state without breaking anything that is already there
    this.setState((prevState) => ({
      educationEntry: {
        ...prevState.educationEntry,
        [event.target.id]: value,
      },
    }));
  };

  // add work experience
  clickedWorkXP = () => {
    console.log('add work xp clicked');
  };

  // delete work experience

  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <div className='container'>
        <div className='entrySide'>

          {/* Personal Info */}

          <div className='personalInfo'>
            <input
              placeholder='Full Name'
              id='fullName'
              type='text'
              onChange={this.changeHandlerPersonalInfo}
            />
            <input
              placeholder='Email'
              id='email'
              type='text'
              onChange={this.changeHandlerPersonalInfo}
            />
            <input
              placeholder='Phone #'
              id='phoneNumber'
              type='tel'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              onChange={this.changeHandlerPersonalInfo}
            />
          </div>

          {/* Forms */}

          <div className='forms'>
            <div className='workExperienceFormAndButton'>
              <div className='workExperienceForm'>
                <input
                  placeholder='Company Name'
                  id='companyName'
                  type='text'
                  onChange={this.changeHandlerWorkExperience}
                />
                <input
                  placeholder='Position Title'
                  id='positionTitle'
                  type='text'
                  onChange={this.changeHandlerWorkExperience}
                />
                <input
                  placeholder='Company Location'
                  id='companyLocation'
                  type='text'
                  onChange={this.changeHandlerWorkExperience}
                />
                Start Date
                <input
                  type='date'
                  id='companyStartDate'
                  onChange={this.changeHandlerWorkExperience}
                />
                End Date
                <input
                  type='date'
                  id='companyEndDate'
                  onChange={this.changeHandlerWorkExperience}
                />
                <button id='deleteWorkExperience'>Delete</button>
              </div>
              <button
                id='addWorkExperience'
                onClick={this.clickedWorkXP}
              >Add Work Experience</button>
            </div>
            <div className='educationFormAndButton'>
              <div className='educationSectionForm'>
                <input
                  placeholder='School'
                  id='schoolName'
                  onChange={this.changeHandlerEducation}
                />
                <input
                  placeholder='Degree'
                  id='schoolDegree'
                  onChange={this.changeHandlerEducation}
                />
                <input
                  placeholder='School Location'
                  id='schoolLocation'
                  onChange={this.changeHandlerEducation}
                />
                Graduation Date
                <input
                  type="date"
                  id="schoolGraduationDate"
                  onChange={this.changeHandlerEducation}
                />
                <button
                  id='deleteEducation'>Delete</button>
              </div>
              <button id='addEducation'>Add Education</button>
            </div>
          </div>
        </div>


        {/* CV Side */}

        <div className='cvSide'>
          <div className='personalInfoResume'>
            <div className='fullNameResume'>
              {this.state.personalInfo.fullName}
            </div>
            <div className='emailPhoneNumber'>
              {this.state.personalInfo.email}
              {this.state.personalInfo.spacingLine}
              {this.state.personalInfo.phoneNumber}
            </div>
          </div>

          <div className='workExperienceResume'>
            <div className='workExperienceSectionTitle'>Work Experience</div>
            <div className='workExperienceEntry'>
              <div className='companyNameResume'>
                {this.state.workExperienceEntry.companyName}
                {this.state.personalInfo.spacingLine}
              </div>
              <div className='positionTitleResume'>
                {this.state.workExperienceEntry.positionTitle}
              </div>
              <div className='companyLocationResume'>
                {this.state.workExperienceEntry.companyLocation}
                {this.state.personalInfo.spacingLine}
              </div>
              <div className='companyStartFinishResume'>
                {this.state.workExperienceEntry.companyStartDate}
                {this.state.workExperienceEntry.spacingDash}
                {this.state.workExperienceEntry.companyEndDate}
              </div>
            </div>
          </div>

          <div className='educationSectionResume'>
            <div className='educationSectionTitle'>Education</div>
            <div className='educationSectionEntry'>
              <div className='schoolNameResume'>
                {this.state.educationEntry.schoolName}
                {this.state.personalInfo.spacingLine}
              </div>
              <div className='schoolDegreeResume'>
                {this.state.educationEntry.schoolDegree}
              </div>
              <div className='schoolLocationResume'>
                {this.state.educationEntry.schoolLocation}
                {this.state.personalInfo.spacingLine}</div>
              <div className='schoolGraduationDateResume'>
                {this.state.educationEntry.schoolGraduationDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
