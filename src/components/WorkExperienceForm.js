import React from 'react';

const workExperienceForm = (props) => {
  const workExperienceFormList = props.workExperienceEntry.map((entry, index) =>
    <div className='workExperienceForm' key={index}>
      <input
        placeholder='Company Name'
        name='companyName'
        id={index}
        value={props.workExperienceEntry[index].companyName}
        type='text'
        onChange={props.onChange}
      />
      <input
        placeholder='Position Title'
        name='positionTitle'
        id={index}
        value={props.workExperienceEntry[index].positionTitle}
        type='text'
        onChange={props.onChange}
      />
      <input
        placeholder='Company Location'
        name='companyLocation'
        id={index}
        value={props.workExperienceEntry[index].companyLocation}
        type='text'
        onChange={props.onChange}
      />
                Start Date
      <input
        type='date'
        name='companyStartDate'
        id={index}
        value={props.workExperienceEntry[index].companyStartDate}
        onChange={props.onChange}
      />
                End Date
      <input
        type='date'
        name='companyEndDate'
        id={index}
        value={props.workExperienceEntry[index].companyEndDate}
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
