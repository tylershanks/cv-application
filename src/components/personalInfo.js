import React from 'react';

const PersonalInfo = (props) => (
  <div className='personalInfo'>
    <input
      // eslint-disable-next-line react/prop-types
      placeholder={props.personalInfo.fullName}
      id='fullName'
      type='text'
      // eslint-disable-next-line react/prop-types
      onChange={props.onChange}
    />
    <input
      placeholder='Email'
      id='email'
      type='text'
      // eslint-disable-next-line react/prop-types
      onChange={props.onChange}
    />
    <input
      placeholder='Phone #'
      id='phoneNumber'
      type='tel'
      pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
      // eslint-disable-next-line react/prop-types
      onChange={props.onChange}
    />
  </div>
);

export default PersonalInfo;
