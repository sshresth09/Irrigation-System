var dates =[12,13,14,15];
var preci =[1,5,3,7];
var prob =[20];
var output = [];

function display(){
	output = [1.1, 3.2, 4.6, 0.7];

	/output.push(document.getElementById("12g").value);
	output.push(document.getElementById("13g").value);
	output.push(document.getElementById("14g").value);
	output.push(document.getElementById("15g").value);

	var ct = document.getElementById("chart");
	var c = new Chart(ct, {
		type: 'line',
		data: {
			label: days,
			datasets: [
			{
				data: output,
				label: "duration",
				borderColor: "green",
				fill: false
			},]
		}
	});
}