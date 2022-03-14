/* eslint-disable react/prop-types */
import React from 'react';

const PersonalInfoCVSide = (props) => (
  <div className='personalInfoResume'>
    <div className='fullNameResume'>
      {props.personalInfo.fullName}
    </div>
    <div className='emailPhoneNumber'>
      {props.personalInfo.email}
      {props.personalInfo.spacingLine}
      {props.personalInfo.phoneNumber}
    </div>
  </div>
);

export default PersonalInfoCVSide;
