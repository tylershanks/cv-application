/* eslint-disable react/prop-types */
import React from 'react';

const EducationSectionForm = (props) => (
  <div className='educationSectionForm'>
    <input
      placeholder='School'
      id='schoolName'
      onChange={props.onChange}
    />
    <input
      placeholder='Degree'
      id='schoolDegree'
      onChange={props.onChange}
    />
    <input
      placeholder='School Location'
      id='schoolLocation'
      onChange={props.onChange}
    />
    Graduation Date
    <input
      type="date"
      id="schoolGraduationDate"
      onChange={props.onChange}
    />
    <button
      id='deleteEducation'>Delete</button>
  </div>
);

export default EducationSectionForm;
