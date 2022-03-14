/* eslint-disable react/prop-types */
import React from 'react';

const EducationSectionCVEntry = (props) => (
  <div className='educationSectionEntry'>
    <div className='schoolNameResume'>
      {props.educationEntry.schoolName}
      {props.personalInfo.spacingLine}
    </div>
    <div className='schoolDegreeResume'>
      {props.educationEntry.schoolDegree}
    </div>
    <div className='schoolLocationResume'>
      {props.educationEntry.schoolLocation}
      {props.personalInfo.spacingLine}</div>
    <div className='schoolGraduationDateResume'>
      {props.educationEntry.schoolGraduationDate}
    </div>
  </div>

);

export default EducationSectionCVEntry;
