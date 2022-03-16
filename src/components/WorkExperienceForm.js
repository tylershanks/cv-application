import React from 'react';

const workExperienceForm = (props) => {
  const workExperienceFormList = props.workExperienceEntry.map((entry, index) =>
    <div className='workExperienceForm' key={index}>
      <input
        placeholder='Company Name'
        name='companyName'
        id={index}
        type='text'
        onChange={props.onChange}
      />
      <input
        placeholder='Position Title'
        name='positionTitle'
        id={index}
        type='text'
        onChange={props.onChange}
      />
      <input
        placeholder='Company Location'
        name='companyLocation'
        id={index}
        type='text'
        onChange={props.onChange}
      />
                Start Date
      <input
        type='date'
        name='companyStartDate'
        id={index}
        onChange={props.onChange}
      />
                End Date
      <input
        type='date'
        name='companyEndDate'
        id={index}
        onChange={props.onChange}
      />
      <button
        id={index}
        onClick={props.clickedDeleteWorkXP}>Delete</button>
    </div>,
  );

  return (
    <div>{workExperienceFormList}</div>
  );
};

export default workExperienceForm;
