import { convertToDays, projectedInfections } from './helper';


const severeImpact = (data) => {
  // Challenge 1
  const currentlyInfected = data.reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * projectedInfections(data);

  // Challenge 2
  // Estimated number of severe positive cases that will require hospitalization to recover
  const severeCasesByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.15);
  // Determine the number of available beds exclude the servere cases
  const hospitalBedsByRequestedTime = Math.trunc(
    (0.35 * data.totalHospitalBeds) - severeCasesByRequestedTime);

  // Challenge 3
  // Number of severe positive cases require ICU care
  const casesForICUByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.05);
  // Number of severe positive cases require ventilators
  const casesForVentilatorsByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.02);

  // Estimated financial loss for region
  const regionNum = data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation;
  const dollarsInFlight = (infectionsByRequestedTime * regionNum * convertToDays(data)).toFixed(2);

  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
};

export default severeImpact;
