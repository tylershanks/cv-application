/* eslint-disable react/prop-types */
import React from 'react';
import {adjustedDate} from './DateAdjust';

const WorkExperienceCVEntry = (props) => {
  const workExperienceFormList = props.workExperienceEntry.map((entry, index) =>
    <div className='workExperienceEntry' key={index} id={index}>
      <div className='companyNameResume'>
        {props.workExperienceEntry[index].companyName}
        {props.personalInfo.spacingLine}
      </div>
      <div className='positionTitleResume'>
        {props.workExperienceEntry[index].positionTitle}
      </div>
      <div className='companyLocationResume'>
        {props.workExperienceEntry[index].companyLocation}
        {props.personalInfo.spacingLine}
      </div>
      <div className='companyStartFinishResume'>
        {adjustedDate(props.workExperienceEntry[index].companyStartDate)}
        {props.workExperienceEntry[index].spacingDash}
        {adjustedDate(props.workExperienceEntry[index].companyEndDate)}
      </div>
    </div>,
  );

  return (
    <div>{workExperienceFormList}</div>
  );
};

export default WorkExperienceCVEntry;
