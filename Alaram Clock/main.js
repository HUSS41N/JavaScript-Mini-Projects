getTimeFromUser = () => {
	let userHourInput = document.getElementById("hour").value;
	let userMinuteInput = document.getElementById("minutes").value;
	let timeZone = document.getElementById("timePeriod").value;
	// console.log(`${userHourInput}:${userMinuteInput} ${timeZone}`);
	return `${userHourInput}:${userMinuteInput} ${timeZone}`;
};

AlarmClock = () => {
	let userInput = getTimeFromUser();
	let sound = document.getElementById("sound");
	let date = new Date();
	let time = date.toLocaleString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});
	// console.log(time);
	if (`${userInput}` === `${time}`) {
		sound.play();
	}
};
showCurrentTime = () => {
	let currentTime = document.getElementById("currentTime");
	let date = new Date();
	let time = date.toLocaleString("en-US", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: true,
	});
	currentTime.innerText = time;
};
setInterval(showCurrentTime, 1000);
document.getElementById("submitBtn").addEventListener("click", () => {
	setInterval(AlarmClock, 1000);
});
