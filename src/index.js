import covid19ImpactEstimator from './estimator.js';

function handleData() {
  const population = document.getElementById('data-population').value;
  const reportedCases = document.getElementById('data-reported-cases').value;
  const totalHospitalBeds =
      document.getElementById('data-total-hospital-beds').value;
  const duration = document.getElementById('data-time-to-elapse').value;
  const periodType = document.getElementById('data-period-type').value;

  const data = {
    population : population,
    reportedCases : reportedCases,
    totalHospitalBeds : totalHospitalBeds,
    duration : duration,
    periodType : periodType
  };

  covid19ImpactEstimator(data);
}

document.getElementById('data-go-estimate')
    .addEventListener('click', () => { handleData(); });

const ctx = document.getElementById("myChart").getContext("2d");
let chart = new Chart(ctx, {
  // The type of chart we want to create
  type : "horizontalBar",

  // The data for our dataset
  data : {
    labels : [
      "Currently infected", "Infections", "Severe cases", "Hospital beds",
      "Cases for ICU", "Cases for ventilators", "Dollars in flight"
    ],
    datasets : [
      {
        label : "Impact",
        backgroundColor : "#459EED",
        borderColor : "#1686E9",
        data : [ 0, 10, 5, 2, 20, 30, 45 ]
      },
      {
        label : "Severe Impact",
        backgroundColor : "#EE9344",
        borderColor : "#E97916",
        data : [ 0, 10, 5, 2, 20, 30, 45 ]
      }
    ]
  },

  // Configuration options go here
  options : {}
});