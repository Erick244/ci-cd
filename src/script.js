import { sum } from "./utils/functions.js";

const calculate = () => {
	const x = +document.getElementById("number1").value;
	const y = +document.getElementById("number2").value;

	document.getElementById("result").textContent = sum(x, y);
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", calculate);
