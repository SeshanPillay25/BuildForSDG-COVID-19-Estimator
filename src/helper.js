// Convert months and weeks to days
export const convertToDays = (data) => {
  if (data.periodType === 'weeks') {
    return data.timeToElapse * 7;
  }
  if (data.periodType === 'months') {
    // As per instructions -  expect 30 days in a month
    return data.timeToElapse * 30;
  }
  return data.timeToElapse;
};

export const projectedInfections = (data) => {
  if (data.periodType === 'days') {
    if (data.timeToElapse > 2) {
      // currentlyInfected doubles every 3 days, so you'd have to multiply it by a factor of 2
      return 2 ** Math.trunc(data.timeToElapse / 3);
    }
  } else {
    return 2 ** Math.trunc(convertToDays(data) / 3);
  }

  return data.timeToElapse;
};
