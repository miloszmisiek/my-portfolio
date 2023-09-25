import { TODAY } from "@/app/consts";

export const calculateYearsOfExperience = (startDate: Date): number => {
  const differenceInMilliseconds = TODAY.getTime() - startDate.getTime();
  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
  const differenceInYears = differenceInDays / 365.25; // Including leap years

  return parseFloat(differenceInYears.toFixed(3));
};

export const calculateProffesionalExperience = (startDate: Date): string => {
  const differenceInMilliseconds = TODAY.getTime() - startDate.getTime();
  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
  const differenceInYears = Math.floor(differenceInDays / 365.25);
  const differenceInMonths = Math.floor((differenceInDays % 365.25) / 30.44); // Average days per month

  if (differenceInYears === 0) {
    return `${differenceInMonths} month${differenceInMonths !== 1 ? "s" : ""}`;
  } else if (differenceInYears === 1) {
    return `${differenceInYears} year${
      differenceInMonths > 0
        ? ` and ${differenceInMonths} month${
            differenceInMonths !== 1 ? "s" : ""
          }`
        : ""
    }`;
  } else {
    return `${differenceInYears} years${
      differenceInMonths > 0
        ? ` and ${differenceInMonths} month${
            differenceInMonths !== 1 ? "s" : ""
          }`
        : ""
    }`;
  }
};
