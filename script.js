var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: "horizontalBar",

	// The data for our dataset
	data: {
		labels: [
			"Currently infected",
			"Infections",
			"Severe cases",
			"Hospital beds",
			"Cases for ICU",
			"Cases for ventilators",
			"Dollars in flight"
		],
		datasets: [
			{
				label: "Impact",
				backgroundColor: "#459EED",
				borderColor: "#1686E9",
				data: [0, 10, 5, 2, 20, 30, 45]
			},
				{
				label: "Severe Impact",
				backgroundColor: "#EE9344",
				borderColor: "#E97916",
				data: [0, 10, 5, 2, 20, 30, 45]
			}
		]
	},

	// Configuration options go here
	options: {}
});