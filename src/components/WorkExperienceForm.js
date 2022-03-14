import React from 'react';

const workExperienceForm = (props) => {
  const workExperienceFormList = props.workExperienceEntry.map((entry, index) =>
    <div className='workExperienceForm' key={index}>
      <input
        placeholder='Company Name'
        id='companyName'
        type='text'
        onChange={props.onChange}
      />
      <input
        placeholder='Position Title'
        id='positionTitle'
        type='text'
        onChange={props.onChange}
      />
      <input
        placeholder='Company Location'
        id='companyLocation'
        type='text'
        onChange={props.onChange}
      />
                Start Date
      <input
        type='date'
        id='companyStartDate'
        onChange={props.onChange}
      />
                End Date
      <input
        type='date'
        id='companyEndDate'
        onChange={props.onChange}
      />
      <button
        id='deleteWorkExperience'
        onClick={props.clickedDeleteWorkXP}>Delete</button>
    </div>,
  );

  return (
    <div>{workExperienceFormList}</div>
  );
};

export default workExperienceForm;
