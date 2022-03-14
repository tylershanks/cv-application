import React from 'react';

const PersonalInfo = () => (
  <div className='personalInfo'>
    <input
      placeholder='Full Name'
      id='fullName'
      type='text'
      // onChange={this.changeHandlerPersonalInfo}
    />
    <input
      placeholder='Email'
      id='email'
      type='text'
      // onChange={this.changeHandlerPersonalInfo}
    />
    <input
      placeholder='Phone #'
      id='phoneNumber'
      type='tel'
      pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
      // onChange={this.changeHandlerPersonalInfo}
    />
  </div>
);

export default PersonalInfo;
