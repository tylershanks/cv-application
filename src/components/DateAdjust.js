/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

export const adjustedDate = (originalDate) => {
  const formattedMonth = originalDate.substr(5, 2);
  const formattedYear = originalDate.substr(0, 4);

  // 0123456789
  // yyyy-mm-dd

  if (formattedMonth === '01') {
    const formattedDate = 'Jan ' + formattedYear;
    return formattedDate;
  } else if (formattedMonth === '02') {
    const formattedDate = 'Feb ' + formattedYear;
    return formattedDate;
  } else if (formattedMonth === '03') {
    const formattedDate = 'Mar ' + formattedYear;
    return formattedDate;
  } else if (formattedMonth === '04') {
    const formattedDate = 'Apr ' + formattedYear;
    return formattedDate;
  } else if (formattedMonth === '05') {
    const formattedDate = 'May ' + formattedYear;
    return formattedDate;
  } else if (formattedMonth === '06') {
    const formattedDate = 'Jun ' + formattedYear;
    return formattedDate;
  } else if (formattedMonth === '07') {
    const formattedDate = 'Jul ' + formattedYear;
    return formattedDate;
  } else if (formattedMonth === '08') {
    const formattedDate = 'Aug ' + formattedYear;
    return formattedDate;
  } else if (formattedMonth === '09') {
    const formattedDate = 'Sept ' + formattedYear;
    return formattedDate;
  } else if (formattedMonth === '10') {
    const formattedDate = 'Oct ' + formattedYear;
    return formattedDate;
  } else if (formattedMonth === '11') {
    const formattedDate = 'Nov ' + formattedYear;
    return formattedDate;
  } else if (formattedMonth === '12') {
    const formattedDate = 'Dec ' + formattedYear;
    return formattedDate;
  } else {
    return originalDate;
  }
};
