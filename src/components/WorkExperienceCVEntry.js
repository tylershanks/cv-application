/* eslint-disable react/prop-types */
import React from 'react';

const WorkExperienceCVEntry = (props) => {
  const workExperienceFormList = props.workExperienceEntry.map((entry, index) =>
    <div className='workExperienceEntry' key={index}>
      <div className='companyNameResume'>
        {props.workExperienceEntry.companyName}
        {props.personalInfo.spacingLine}
      </div>
      <div className='positionTitleResume'>
        {props.workExperienceEntry.positionTitle}
      </div>
      <div className='companyLocationResume'>
        {props.workExperienceEntry.companyLocation}
        {props.personalInfo.spacingLine}
      </div>
      <div className='companyStartFinishResume'>
        {props.workExperienceEntry.companyStartDate}
        {props.workExperienceEntry.spacingDash}
        {props.workExperienceEntry.companyEndDate}
      </div>
    </div>,
  );

  return (
    <div>{workExperienceFormList}</div>
  );
};

export default WorkExperienceCVEntry;
