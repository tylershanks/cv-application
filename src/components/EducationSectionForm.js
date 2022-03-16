/* eslint-disable react/prop-types */
import React from 'react';

const EducationSectionForm = (props) => {
  const EducationSectionForm = props.educationEntry.map((entry, index) =>
    <div className='educationSectionForm' key={index}>
      <input
        placeholder='School'
        id={index}
        onChange={props.onChange}
      />
      <input
        placeholder='Degree'
        id={index}
        onChange={props.onChange}
      />
      <input
        placeholder='School Location'
        id={index}
        onChange={props.onChange}
      />
    Graduation Date
      <input
        type="date"
        id={index}
        onChange={props.onChange}
      />
      <button
        id={index}
        onClick={props.clickedDeleteEducation}>Delete</button>
    </div>,
  );

  return (
    <div>{EducationSectionForm}</div>
  );
};

export default EducationSectionForm;
