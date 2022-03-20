/* eslint-disable react/prop-types */
import React from 'react';

const EducationSectionForm = (props) => {
  const EducationSectionForm = props.educationEntry.map((entry, index) =>
    <div className='educationSectionForm' key={index}>
      <input
        placeholder='School'
        name='schoolName'
        maxLength='28'
        id={index}
        value={props.educationEntry[index].schoolName}
        onChange={props.onChange}
      />
      <input
        placeholder='Degree'
        name='schoolDegree'
        maxLength='14'
        id={index}
        value={props.educationEntry[index].schoolDegree}
        onChange={props.onChange}
      />
      <input
        placeholder='School Location'
        name='schoolLocation'
        maxLength='14'
        id={index}
        value={props.educationEntry[index].schoolLocation}
        onChange={props.onChange}
      />
    Graduation Date
      <input
        type="date"
        name='schoolGraduationDate'
        id={index}
        value={props.educationEntry[index].schoolGraduationDate}
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
