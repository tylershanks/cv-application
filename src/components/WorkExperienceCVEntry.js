/* eslint-disable react/prop-types */
import React from 'react';

const WorkExperienceCVEntry = (props) => {
  const workExperienceFormList = props.workExperienceEntry.map((entry, index) =>
    <div className='workExperienceEntry' key={index} id={index}>
      <div className='companyNameResume'>
        {/* eslint-disable-next-line max-len*/}
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
        {props.workExperienceEntry[index].companyStartDate}
        {props.workExperienceEntry[index].spacingDash}
        {props.workExperienceEntry[index].companyEndDate}
      </div>
    </div>,
  );

  return (
    <div>{workExperienceFormList}</div>
  );
};

export default WorkExperienceCVEntry;
