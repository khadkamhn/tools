---
layout: default
title: "Password Generator"
permalink: /password-generator/
scripts: "/assets/js/range-slider.min.js"
---

<form action="#" method="post">
	<div class="result p-3 border bg-body my-3">
		<div class="password"></div>
		<div class="actions d-flex flex-column justify-content-center">
			<span class="material-symbols-outlined" data-action="refresh" title="Regenerate">refresh</span>
			<span class="material-symbols-outlined" data-copy="password" title="Copy to Clipboard">content_copy</span>
		</div>
	</div>
	<div class="strength my-5">
		<div class="form-label d-flex justify-content-between">Strength <span class="label-value"></span></div>
		<div class="progress" role="progressbar">
			<div class="progress-bar" style="width: 50%"></div>
		</div>
	</div>
	<div class="pt-3 mb-4">
		<label class="form-label d-flex justify-content-between" for="length">Length <span class="label-value">12</span></label>
		<input type="range" id="length" value="12" min="6" max="64" oninput="updateSliderValue(this)" data-range>
	</div>
	<div class="pt-3 mb-4">
		<label class="form-label d-flex justify-content-between" for="digits">Digits <span class="label-value">4</span></label>
		<input type="range" id="digits" value="4" min="0" max="10" oninput="updateSliderValue(this)" data-range>
	</div>
	<div class="pt-3 mb-4">
		<label class="form-label d-flex justify-content-between" for="symbols">Symbols <span class="label-value">2</span></label>
		<input type="range" id="symbols" value="2" min="0" max="10" oninput="updateSliderValue(this)" data-range>
	</div>
</form>
<script>
function updateSliderValue(element) {
	let findLabel = element.closest('div').querySelector('.label-value');
	findLabel.textContent = element.value;
	generatePassword();
}
function generatePassword() {
	const length = parseInt(document.getElementById('length').value);
	const digitsCount = parseInt(document.getElementById('digits').value);
	const symbolsCount = parseInt(document.getElementById('symbols').value);

	const lettersSetArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const digitsSetArray = "0123456789";
	const symbolsSetArray = "=+-^?!%&*$#@|";

	let passwordArray = [];
	let availableChars = lettersSetArray;

	for (let i = 0; i < digitsCount; i++) {
		passwordArray.push(digitsSetArray.charAt(Math.floor(Math.random() * digitsSetArray.length)));
	}

	for (let i = 0; i < symbolsCount; i++) {
		passwordArray.push(symbolsSetArray.charAt(Math.floor(Math.random() * symbolsSetArray.length)));
	}

	for (let i = passwordArray.length; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * availableChars.length);
		passwordArray.push(availableChars.charAt(randomIndex));
	}

	passwordArray = passwordArray.sort(() => Math.random() - 0.5);

	const generatedPassword = passwordArray.slice(0, length).join("");
	document.querySelector('.result .password').innerHTML = '<code>'+generatedPassword+'</code>';

	const strength = calculatePasswordStrength(generatedPassword);
	updateStrength(strength);
}
/*function updateStrength(score) {
	let label, color, percentage = (score / 7) * 100;
	switch (score) {
		case 0:
			color = 'bg-0';
			label = 'Poor';
		break;
		case 1:
			color = 'bg-1';
			label = 'Weak';
		break;
		case 2:
			color = 'bg-2';
			label = 'Fair';
		break;
		case 3:
			color = 'bg-3';
			label = 'Good';
		break;
		case 4:
			color = 'bg-4';
			label = 'Excellent';
		break;
		case 5:
			color = 'bg-5';
			label = 'Strong';
		break;
		case 6:
			color = 'bg-6';
			label = 'Secure';
		break;
		case 7:
			color = 'bg-7';
			label = 'Invincible';
		break;
		default:
		break;
	}
	document.querySelector('.strength .label-value').textContent = label;
	let indicator = document.querySelector('.strength .progress');
	indicator.className = 'progress';
	indicator.classList.add(color);
	indicator.querySelector('.progress-bar').style.width = percentage+'%';
}
function calculatePasswordStrength(password) {
	var minLength = 8;
	var hasUpperCase = /[A-Z]/.test(password);
	var hasLowerCase = /[a-z]/.test(password);
	var hasNumbers = /\d/.test(password);
	var hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
	var hasNonAlphaNumeric = /\W/.test(password);
	var hasUniqueChars = [...new Set(password)].length >= 5;

	var score = 0;
	score += (password.length >= minLength) ? 1 : 0;
	score += (hasUpperCase) ? 1 : 0;
	score += (hasLowerCase) ? 1 : 0;
	score += (hasNumbers) ? 1 : 0;
	score += (hasSpecialChars) ? 1 : 0;
	score += (hasNonAlphaNumeric) ? 1 : 0;
	score += (hasUniqueChars) ? 1 : 0;

	return score;
}*/
function updateStrength(score) {
	let label, color, width;
	if (score < 30) {
		label = 'Weak';
		color = 'bg-0';
		width = 10;
	} else if (score >= 30 && score < 75) {
		label = 'Average';
		color = 'bg-2';
		width = 40;
	} else if (score >= 75 && score < 150) {
		label = 'Strong';
		color = 'bg-3';
		width = 75;
	} else {
		label = 'Secure';
		color = 'bg-4';
		width = 100;
	}
	document.querySelector('.strength .label-value').textContent = label;
	let indicator = document.querySelector('.strength .progress');
	indicator.className = 'progress';
	indicator.classList.add(color);
	indicator.querySelector('.progress-bar').style.width = width+'%';
}
function calculatePasswordStrength(password) {
	let count = { excess: 0, upperCase: 0, numbers: 0, symbols: 0 };
	let weight = { excess: 3, upperCase: 4, numbers: 5, symbols: 5, combo: 0, flatLower: 0, flatNumber: 0 };
	let score = 0, baseScore = 30;

	for (i=0; i < password.length;i++){
		if (password.charAt(i).match(/[A-Z]/g)) {count.upperCase++;}
		if (password.charAt(i).match(/[0-9]/g)) {count.numbers++;}
		if (password.charAt(i).match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/)) {count.symbols++;} 
	}
	count.excess = password.length - 6;
	if (count.upperCase && count.numbers && count.symbols) {
		weight.combo = 25; 
	} else if ((count.upperCase && count.numbers) || (count.upperCase && count.symbols) || (count.numbers && count.symbols)) {
		weight.combo = 15; 
	}
	if (password.match(/^[\sa-z]+$/)) { 
		weight.flatLower = -30;
	}
	if (password.match(/^[\s0-9]+$/)) { 
		weight.flatNumber = -50;
	}
	return baseScore +
		(count.excess * weight.excess) + 
		(count.upperCase * weight.upperCase) + 
		(count.numbers * weight.numbers) + 
		(count.symbols * weight.symbols) + 
		weight.combo + weight.flatLower + 
		weight.flatNumber;
}
document.addEventListener('DOMContentLoaded', function () {
	generatePassword();
	document.querySelector('[data-action="refresh"]').addEventListener('click',generatePassword);
	document.querySelector('[data-copy="password"]').addEventListener('click',function(){
		let password = document.querySelector('.result .password').textContent;
		mk.copyToClipboard(password);
	});
});
</script>