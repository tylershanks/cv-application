import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import uuid from 'react-uuid';
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
        phoneNumber: '9999999999',
        spacingLine: ' | ',
      },

      workExperienceEntry: [
        {

          identity: uuid(),
          companyName: '',
          positionTitle: '',
          companyLocation: '',
          companyStartDate: '',
          companyEndDate: '',
          spacingDash: ' - ',
        },
      ],

      educationEntry: [
        {
          identity: uuid(),
          schoolName: '',
          schoolDegree: '',
          schoolLocation: '',
          schoolGraduationDate: '',
        },
      ],
    };
    this.changeHandlerEducation = this.changeHandlerEducation.bind(this);
  }

  // personal info
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

  changeHandlerPersonalInfoNumber = (event) => {
    event.persist();
    const re = /^[0-9\b]+$/;

    const value = event.target.value;

    if (event.target.value === '' || re.test(event.target.value)) {
    // Changes the state without breaking anything that is already there
      this.setState((prevState) => ({
        personalInfo: {
          ...prevState.personalInfo,
          [event.target.id]: value,
        },
      }));
    }
  };

  // Work Experience
  // Any time an input field is changed in the work experience section,
  // update the state which links to the right hand side's text.
  changeHandlerWorkExperience = (event) => {
    // eslint-disable-next-line max-len
    if (['companyName', 'positionTitle', 'companyLocation', 'companyStartDate', 'companyEndDate'].includes(event.target.name)) {
      const workExperienceEntry = [...this.state.workExperienceEntry];
      // eslint-disable-next-line max-len
      workExperienceEntry[event.target.id][event.target.name] = event.target.value;
      this.setState({workExperienceEntry});
    } else {
      this.setState({[event.target.name]: event.target.value});
    }
  };

  // Education
  // Any time an input field is changed in the education section,
  // update the state which links to the right hand side's text.
  // eslint-disable-next-line require-jsdoc
  changeHandlerEducation = (event) => {
    // eslint-disable-next-line max-len
    if (['schoolName', 'schoolDegree', 'schoolLocation', 'schoolGraduationDate'].includes(event.target.name)) {
      const educationEntry = [...this.state.educationEntry];
      // eslint-disable-next-line max-len
      educationEntry[event.target.id][event.target.name] = event.target.value;
      this.setState({educationEntry});
    } else {
      this.setState({[event.target.name]: event.target.value});
    }
  };

  // add work experience
  clickedWorkXP = () => {
    console.log('add work xp clicked');
    this.setState({workExperienceEntry: [...this.state.workExperienceEntry, {
      identity: uuid(),
      companyName: '',
      positionTitle: '',
      companyLocation: '',
      companyStartDate: '',
      companyEndDate: '',
      spacingDash: ' - ',
    }]});
  };

  // delete work experience
  clickedDeleteWorkXP = (index) => {
    console.log('delete work xp clicked');
    const array = [...this.state.workExperienceEntry];
    const id = index.target.id;
    array.splice(id, 1);
    this.setState({workExperienceEntry: array});
  };

  // add education
  clickedAddEducation = () => {
    console.log('add education clicked');
    this.setState({educationEntry: [...this.state.educationEntry, {
      identity: uuid(),
      schoolName: '',
      schoolDegree: '',
      schoolLocation: '',
      schoolGraduationDate: '',
    }]});
  };

  // delete education
  clickedDeleteEducation = (index) => {
    console.log('delete education clicked');
    const array = [...this.state.educationEntry];
    const id = index.target.id;
    array.splice(id, 1);
    this.setState({educationEntry: array});
  };

  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <div className='linkAndContainer'>
        <a href="https://github.com/tylershanks/cv-application" target="_blank" rel="noreferrer" className='githubLink'>Tyler Shanks Github</a>
        <div className='container'>
          <div className='entrySide'>

            {/* Personal Info */}
            <PersonalInfo
              personalInfo={this.state.personalInfo}
              onChange={this.changeHandlerPersonalInfo}
              onChangeNumber={this.changeHandlerPersonalInfoNumber}
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
                  educationEntry={this.state.educationEntry}
                  clickedDeleteEducation={this.clickedDeleteEducation}
                  onChange={this.changeHandlerEducation}
                />
                <button id='addEducation'
                  onClick={this.clickedAddEducation}
                >Add Education</button>
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
        </div>
      </div>
    );
  }
}

export default App;
