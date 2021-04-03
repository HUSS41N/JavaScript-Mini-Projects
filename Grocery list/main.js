const addBtn = document.getElementById("addBtn");
let userInput = document.getElementById("input");
let groceryItems = document.querySelector(".grocery-items");
let section = document.getElementById("main");

addBtn.addEventListener("click", () => {
	section.style.display = "block";
	let div = document.createElement("div");
	div.classList.add("grocery-item");
	let li = document.createElement("li");
	li.innerText = userInput.value;
	let delBtn = document.createElement("button");
	delBtn.innerText = "delete";
	delBtn.name = "delete";
	div.appendChild(li);
	div.appendChild(delBtn);
	groceryItems.appendChild(div);
	userInput.value = "";
});

groceryItems.addEventListener("click", (e) => {
	if (e.target.name == "delete") {
		e.target.parentNode.remove();
	}
});

document.getElementById("clearAll").addEventListener("click", () => {
	while (groceryItems.firstChild) {
		groceryItems.firstChild.remove();
	}
	section.style.display = "none";
});
