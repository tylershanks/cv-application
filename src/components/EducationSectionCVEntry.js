/* eslint-disable react/prop-types */
import React from 'react';
import {adjustedDate} from './DateAdjust';

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
        {adjustedDate( props.educationEntry[index].schoolGraduationDate)}
      </div>
    </div>,
  );

  return (
    <div>{EducationSectionCVEntry}</div>
  );
};

export default EducationSectionCVEntry;
