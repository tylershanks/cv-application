import React from 'react';

const PersonalInfo = (props) => (
  <div className='personalInfo'>
    <input
      // eslint-disable-next-line react/prop-types
      placeholder={props.personalInfo.fullName}
      id='fullName'
      type='text'
      maxLength='28'
      // eslint-disable-next-line react/prop-types
      onChange={props.onChange}
    />
    <input
      placeholder='Email'
      id='email'
      type='text'
      maxLength='40'
      // eslint-disable-next-line react/prop-types
      onChange={props.onChange}
    />
    <input
      placeholder='Phone # (Enter Numbers)'
      id='phoneNumber'
      type='tel'
      maxLength='10'
      // eslint-disable-next-line react/prop-types
      onChange={props.onChangeNumber}
    />
  </div>
);

export default PersonalInfo;
