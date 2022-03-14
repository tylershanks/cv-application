import React, {Component} from 'react';
import './styles/index.css';
import './styles/App.css';
import './components/personalInfo';
import PersonalInfo from './components/personalInfo';
import WorkExperienceForm from './components/WorkExperienceForm';
import EducationSectionForm from './components/EducationSectionForm';
import PersonalInfoCVSide from './components/PersonalInfoCVSide';
import WorkExperienceCVEntry from './components/WorkExperienceCVEntry';
import EducationSectionCVEntry from './components/EducationSectionCVEntry';


// eslint-disable-next-line require-jsdoc
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

      workExperienceEntry: [
        {
          companyName: 'Company Name',
          positionTitle: 'Position Title',
          companyLocation: 'Company Location',
          companyStartDate: 'YYYY-MM-DD',
          companyEndDate: 'YYYY-MM-DD',
          spacingDash: ' - ',
        },
      ],

      educationEntry: [
        {
          schoolName: 'School Name',
          schoolDegree: 'School Degree',
          schoolLocation: 'School Location',
          schoolGraduationDate: 'YYYY-MM-DD',
        },
      ],
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
    this.setState({workExperienceEntry: [...this.state.workExperienceEntry, {
      companyName: 'Company Name',
      positionTitle: 'Position Title',
      companyLocation: 'Company Location',
      companyStartDate: 'YYYY-MM-DD',
      companyEndDate: 'YYYY-MM-DD',
      spacingDash: ' - ',
    }]});
    console.log(this.state.workExperienceEntry.length);
  };

  // delete work experience
  clickedDeleteWorkXP = (index) => {
    console.log('delete work xp clicked');
    console.log(index.id);
  };

  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <div className='container'>
        <div className='entrySide'>

          {/* Personal Info */}
          <PersonalInfo
            personalInfo={this.state.personalInfo}
            onChange={this.changeHandlerPersonalInfo}
          />

          {/* Forms */}
          <div className='forms'>
            <div className='workExperienceFormAndButton'>
              <WorkExperienceForm
                workExperienceEntry={this.state.workExperienceEntry}
                clickedDeleteWorkXP={this.clickedDeleteWorkXP}
                onChange={this.changeHandlerWorkExperience}
              />

              <button
                id='addWorkExperience'
                onClick={this.clickedWorkXP}
              >Add Work Experience</button>
            </div>

            <div className='educationFormAndButton'>
              <EducationSectionForm
                onChange={this.changeHandlerEducation}
              />
              <button id='addEducation'>Add Education</button>
            </div>
          </div>
        </div>


        {/* CV Side */}

        <div className='cvSide'>
          <PersonalInfoCVSide
            personalInfo={this.state.personalInfo}
          />
          <div className='workExperienceResume'>
            <div className='workExperienceSectionTitle'>Work Experience</div>
            {/* CV Info to be added/removed */}
            <WorkExperienceCVEntry
              workExperienceEntry={this.state.workExperienceEntry}
              personalInfo={this.state.personalInfo}
            />
          </div>

          <div className='educationSectionResume'>
            <div className='educationSectionTitle'>Education</div>
            {/* CV Info to be added/removed */}
            <EducationSectionCVEntry
              educationEntry={this.state.educationEntry}
              personalInfo={this.state.personalInfo}
            />
          </div>
        </div>
        {console.log(this.state.workExperienceEntry.companyLocation)}
      </div>
    );
  }
}

export default App;
