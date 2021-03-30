document.getElementById("getThatshit").addEventListener("click", () => {
	let userInput = document.getElementById("userInput").value;
	let count = userInput.length;
	let result = document.getElementById("result");
	result.innerText = count;
});
