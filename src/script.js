import { subtraction, sum } from "./utils/functions.js";

const calculate = () => {
	const sum_x = +document.getElementById("sum1").value;
	const sum_y = +document.getElementById("sum2").value;

	document.getElementById("sum_result").textContent = sum(sum_x, sum_y);

	const sub_x = +document.getElementById("sub1").value;
	const sub_y = +document.getElementById("sub2").value;

	document.getElementById("sub_result").textContent = subtraction(sub_x, sub_y);
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", calculate);
