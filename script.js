//Developed by: XPLegend
//Start of development: 17/05/2024

//Display Current Time
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

//calculate date difference

function calculateDateDiff() {
	const startDate = document.getElementById("date-input-first").value;
	const finishDate = document.getElementById("date-input-last").value;

	let startDay = startDate.day;
	let startMonth = startDate.month;
	let startYear = startDate.year;

	let finishDay = finishDate.day;
	let finishMonth = finishDate.month;
	let finishYear = finishDate.year;

	//debug
	console.log(startDay);
	console.log(startMonth);
	console.log(startYear);

	console.log(finishDay);
	console.log(finishMonth);
	console.log(finishYear);

}