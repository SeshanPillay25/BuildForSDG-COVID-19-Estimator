import impact from './impact.js';
import severeImpact from './severeImpact.js';

const covid19ImpactEstimator = (data) =>
    ({data, impact : impact(data), severeImpact : severeImpact(data)});

export default covid19ImpactEstimator;
