/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

export const adjustedPhoneNumber = (originalNumber) => {
  const areaCode = originalNumber.substr(0, 3);
  const secondThree = originalNumber.substr(3, 3);
  const lastFour = originalNumber.substr(6, 4);
  const finalAdjusted = areaCode + '-' + secondThree + '-' + lastFour;
  return finalAdjusted;
};
