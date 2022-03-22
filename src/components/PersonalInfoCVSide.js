/* eslint-disable react/prop-types */
import React from 'react';
import {adjustedPhoneNumber} from './PhoneNumberAdjust';

const PersonalInfoCVSide = (props) => (
  <div className='personalInfoResume'>
    <div className='fullNameResume'>
      {props.personalInfo.fullName}
    </div>
    <div className='emailPhoneNumber'>
      {props.personalInfo.email}
      {props.personalInfo.spacingLine}
      {adjustedPhoneNumber(props.personalInfo.phoneNumber)}
    </div>
  </div>
);

export default PersonalInfoCVSide;
