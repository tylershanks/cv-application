/* eslint-disable react/prop-types */
import React from 'react';

const EducationSectionCVEntry = (props) => {
  const EducationSectionCVEntry = props.educationEntry.map((entry, index) =>
    <div className='educationSectionEntry' key={index} id={index}>
      <div className='schoolNameResume'>
        {props.educationEntry[index].schoolName}
        {props.personalInfo.spacingLine}
      </div>
      <div className='schoolDegreeResume'>
        {props.educationEntry[index].schoolDegree}
      </div>
      <div className='schoolLocationResume'>
        {props.educationEntry[index].schoolLocation}
        {props.personalInfo.spacingLine}</div>
      <div className='schoolGraduationDateResume'>
        {props.educationEntry[index].schoolGraduationDate}
      </div>
    </div>,
  );

  return (
    <div>{EducationSectionCVEntry}</div>
  );
};

export default EducationSectionCVEntry;
