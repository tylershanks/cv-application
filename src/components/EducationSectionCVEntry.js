/* eslint-disable react/prop-types */
import React from 'react';

const EducationSectionCVEntry = (props) => {
  const EducationSectionCVEntry = props.educationEntry.map((entry, index) =>
    <div className='educationSectionEntry' key={index}>
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
    </div>,
  );

  return (
    <div>{EducationSectionCVEntry}</div>
  );
};

export default EducationSectionCVEntry;
