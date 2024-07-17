//Developed by: XPLegend
//Start of development: 17/05/2024

//DISPLAY CURRENT TIME
function currentTime() {
	const time = document.getElementById('display-time');
	const date = document.getElementById('display-date');
	const currentTime = new Date();
	
	const hour = String(currentTime.getHours()).padStart(2, '0');
    const minute = String(currentTime.getMinutes()).padStart(2, '0');
    const second = String(currentTime.getSeconds()).padStart(2, '0');
	
	const day = String(currentTime.getDate()).padStart(2, '0');
    const month = String(currentTime.getMonth() + 1).padStart(2, '0'); // I mesi vanno da 0 a 11
    const year = currentTime.getFullYear();
    
	time.textContent = `${hour}:${minute}:${second}`;
	date.textContent = `${day}/${month}/${year}`;
}

currentTime();
setInterval(currentTime, 1000);

//CALCULATE DAY DIFFERENCES 
//I wanted to experiment with something more difficult so I used "addEventListener" instead of "onClick"

document.getElementById("calculate-date-btn").addEventListener('click', function() {
	const startDateValue = document.getElementById("date-input-first").value;
	const finishDateValue = document.getElementById("date-input-last").value;
	//DEGUB
	console.log('Start date:', startDateValue, 'Finish date:', finishDateValue);

	if(startDateValue && finishDateValue) {
		const startDate = new Date(startDateValue);
		const finishDate = new Date(finishDateValue);

		const timeDifference = (finishDate - startDate) / (1000 * 3600 * 24); //From milliseconds to days
		//DEBUG
		console.log(timeDifference);
		//Display in label
		document.getElementById("label-date-output").innerText = `${timeDifference} days`
	} else {
		if (startDateValue) {
			document.getElementById("label-date-output").innerText = 'Second Date Missing'
		} else if(finishDateValue) {
			document.getElementById("label-date-output").innerText = 'First Date Missing'
		} else {
			document.getElementById("label-date-output").innerText = 'Date Missing'
		}
	}
});