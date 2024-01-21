---
layout: default
title: "Date Converter"
permalink: /date-converter/
---

<div class="date-convert">
	<div class="d-flex justify-content-center">
		<a class="btn-convert btn m-3 btn-primary" href="#convert=AD">BS to AD</a>
		<a class="btn-convert btn m-3 btn-secondary" href="#convert=BS">AD to BS</a>
	</div>
	<form action="#" method="post">
		<div class="row justify-content-center">
			<div class="col-lg-6 d-flex flex-wrap flex-sm-nowrap">
				<select class="form-select m-3" name="year"></select>
				<select class="form-select m-3" name="month"></select>
				<select class="form-select m-3" name="date"></select>
			</div>
		</div>
	</form>
	<div class="result d-flex justify-content-center">
		<div class="result-item text-center">
			<div class="result-left">
				<div class="year"></div>
				<div class="month"></div>
				<div class="date"></div>
				<div class="day"></div>
			</div>
		</div>
		<button type="button" class="btn btn-switch btn-primary" title="Swap or Switch"><span class="material-icons">swap_horiz</span></button>
		<div class="result-item text-center">
			<div class="result-right">
				<div class="alt-year"></div>
				<div class="alt-month"></div>
				<div class="alt-date"></div>
				<div class="alt-day"></div>
			</div>
		</div>
	</div>
</div>
<script>
function setHashParameters(params) {
	const hashValue = Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
	window.location.hash = hashValue;
}
function getHashParameters(url) {
	let hashValue;
	if(url) {
		hashValue = url.slice(1);
	} else {
		hashValue = window.location.hash.slice(1);
	}
	const paramsArray = hashValue.split('&');
	const params = {};
	paramsArray.forEach(param => {
		const [key, value] = param.split('=');
		params[key] = value;
	});
	return params;
}
function makeActiveButton() {
	let convert = getHashParameters().convert;
	const btn = document.querySelector('.date-convert .btn-convert');
	const btnActive = document.querySelector('[href="#convert=' + convert + '"]');

	if (btn && btnActive) {
		const allButtons = document.querySelectorAll('.date-convert [href^="#convert="]');
		allButtons.forEach(button => {
			button.classList.remove('btn-primary', 'btn-secondary');
			button.classList.add('btn-secondary');
		});
		btn.classList.remove('btn-primary', 'btn-secondary');
		btn.classList.add('btn-secondary');

		btnActive.classList.remove('btn-primary', 'btn-secondary');
		btnActive.classList.add('btn-primary');
	}
}

function showMsg(msg) {
	if(msg) {
		mk.toastr({head:{text:'Error'},body: msg},'danger');
	}
}
function loadAltResult() {
	let convert = getHashParameters().convert;
	const resultYear = document.querySelector('.result .year').getAttribute('data-year');
	const resultMonth = document.querySelector('.result .month').getAttribute('data-month');
	const resultDate = document.querySelector('.result .date').getAttribute('data-date');

	const resAltYear = document.querySelector('.result .alt-year');
	const resAltMonth = document.querySelector('.result .alt-month');
	const resAltDate = document.querySelector('.result .alt-date');
	const resAltDay = document.querySelector('.result .alt-day');

	let resDate;
	if(convert=='AD') {
		resDate = cal.getNepDate(resultYear, resultMonth, resultDate, showMsg);
	} else {
		resDate = cal.getEngDate(resultYear, resultMonth, resultDate, showMsg);
	}
	resAltYear.innerHTML = resDate.y;
	resAltMonth.innerHTML = resDate.M;
	resAltDate.innerHTML = resDate.d;
	resAltDay.innerHTML = resDate.l;
}

document.addEventListener('DOMContentLoaded', function() {
	const cal = window.cal;
	const currentDate = new Date();
	let date = '';

	const loadForm = function(dateObj=null) {
		let year = '';
		let month = '';
		let dateDay = '';
		let convert = getHashParameters().convert;

		if(convert=='AD') {
			date = cal.getNepDate(currentDate.getFullYear(), (currentDate.getMonth()+1).toString().padStart(2,'0'), currentDate.getDate().toString().padStart(2,'0'), showMsg);
			for (let count = cal.getNumbNe(date.y,true); count >= cal.startNe; count--) {
				const optionValue = count;
				const optionText = cal.getNumbNe(count.toString());
				if(dateObj) {
					year += '<option value="'+optionValue+'"'+(count==(dateObj.nep.string.yyyy)?' selected':'')+'>'+optionText+'</option>';
				} else {
					year += '<option value="'+optionValue+'">'+optionText+'</option>';
				}
			}
			document.querySelector('[name="year"]').innerHTML = year;

			for (let count = 0; count <= 11; count++) {
				const optionValue = count;
				const optionText = cal.monthNe[count];
				if(dateObj) {
					month += '<option value="'+(optionValue+1)+'"'+(count==(dateObj.nep.string.mm-1)?' selected':'')+'>'+optionText+'</option>';
				} else {
					month += '<option value="'+(optionValue+1)+'"'+(count==(cal.getNumbNe(date.m,true)-1)?' selected':'')+'>'+optionText+'</option>';
				}
			}
			document.querySelector('[name="month"]').innerHTML = month;

			let totalDays;
			if(dateObj) {
				totalDays = cal.nepaliYears[cal.getNumbNe(dateObj.nep.y,true)][cal.getNumbNe(dateObj.nep.m,true)-1]
			} else {
				totalDays = cal.nepaliYears[cal.getNumbNe(date.y,true)][cal.getNumbNe(date.m,true)-1];
			}
			for (let count = 1; count <= totalDays; count++) {
				const optionValue = count;
				const optionText = cal.getNumbNe(count.toString());
				if(dateObj) {
					dateDay += '<option value="'+optionValue+'"'+(count==parseInt(dateObj.nep.string.dd)+1?' selected':'')+'>'+optionText+'</option>';
				} else {
					dateDay += '<option value="'+optionValue+'"'+(count==parseInt(cal.getNumbNe(date.d,true))?' selected':'')+'>'+optionText+'</option>';
				}
			}
			document.querySelector('[name="date"]').innerHTML = dateDay;
		} else if(convert=='BS') {
			date = {
				y: currentDate.getFullYear(),
				m: currentDate.getMonth() + 1,
				M: cal.monthEn[currentDate.getMonth()],
				d: currentDate.getDate(),
				l: cal.dayEn[currentDate.getDay()],
			}
			for (let count = currentDate.getFullYear(); count >= cal.startEn; count--) {
				const optionValue = count;
				const optionText = optionValue;
				if(dateObj) {
					year += '<option value="'+optionValue+'"'+(count==(dateObj.eng.string.yyyy)?' selected':'')+'>'+optionText+'</option>';
				} else {
					year += '<option value="'+optionValue+'">'+optionText+'</option>';
				}
			}
			document.querySelector('[name="year"]').innerHTML = year;

			for (let count = 0; count <= 11; count++) {
				const optionValue = count;
				const optionText = cal.monthEn[count];
				if(dateObj) {
					month += '<option value="'+(optionValue+1)+'"'+(count==(dateObj.eng.string.mm-1)?' selected':'')+'>'+optionText+'</option>';
				} else {
					month += '<option value="'+(optionValue+1)+'"'+(count+1==date.m?' selected':'')+'>'+optionText+'</option>';
				}
			}
			document.querySelector('[name="month"]').innerHTML = month;

			let totalDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
			for (let count = 1; count <= totalDays; count++) {
				const optionValue = count;
				const optionText = optionValue;
				if(dateObj) {
					dateDay += '<option value="'+optionValue+'"'+(count==parseInt(dateObj.eng.string.dd)?' selected':'')+'>'+optionText+'</option>';
				} else {
					dateDay += '<option value="'+optionValue+'"'+(count==date.d?' selected':'')+'>'+optionText+'</option>';
				}
			}
			document.querySelector('[name="date"]').innerHTML = dateDay;
		} else {
			setHashParameters({convert:'AD'});
			loadForm();
		}
	}
	loadForm();

	const loadData = function(dateObj=null) {
		let convert = getHashParameters().convert;
		const result = document.querySelector('.result');
		result.classList.remove('out-bs','out-ad');
		const resultYear = document.querySelector('.result .year');
		const resultMonth = document.querySelector('.result .month');
		const resultDate = document.querySelector('.result .date');
		const resultDay = document.querySelector('.result .day');

		let engDate, nepDate;
		if(convert=='AD') {
			if(dateObj) {
				engDate = dateObj.eng;
			} else {
				engDate = cal.getEngDate(cal.getNumbNe(date.y,true), cal.getNumbNe(date.m,true).toString().padStart(2,'0'), cal.getNumbNe(date.d,true).toString().padStart(2,'0'), showMsg);
			}
			resultYear.innerHTML = engDate.y;
			resultMonth.innerHTML = engDate.M;
			resultDate.innerHTML = engDate.d;
			resultDay.innerHTML = engDate.l;

			result.classList.add('out-ad');
			resultYear.setAttribute('data-year',engDate.y);
			resultMonth.setAttribute('data-month',engDate.m.toString().padStart(2,'0'));
			resultDate.setAttribute('data-date',engDate.d.toString().padStart(2,'0'));
		} else {
			if(dateObj) {
				nepDate = dateObj.nep;
			} else {
				nepDate = cal.getNepDate(date.y.toString(), date.m.toString().padStart(2,'0'), date.d.toString().padStart(2,'0'), showMsg);
			}
			resultYear.innerHTML = nepDate.y;
			resultMonth.innerHTML = nepDate.M;
			resultDate.innerHTML = nepDate.d;
			resultDay.innerHTML = nepDate.l;

			result.classList.add('out-bs');
			resultYear.setAttribute('data-year',cal.getNumbNe(nepDate.y,true));
			resultMonth.setAttribute('data-month',cal.getNumbNe(nepDate.m,true).padStart(2,'0'));
			resultDate.setAttribute('data-date',cal.getNumbNe(nepDate.d,true).padStart(2,'0'));
		}
	}
	loadData();
	document.querySelectorAll('.date-convert select').forEach(function(input) {
		input.addEventListener('change',function(event) {
			let result = document.querySelector('.result');
			let convert = getHashParameters().convert;
			result.classList.remove('out-ad','out-bs');
			let selectYear = document.querySelector('select[name="year"]').value;
			let selectMonth = document.querySelector('select[name="month"]').value.padStart(2,'0');
			let selectDate = document.querySelector('select[name="date"]').value.padStart(2,'0');
			let setDate, totalDays, totalDaysType;
			if(convert=='AD') {
				totalDays = cal.nepaliYears[cal.getNumbNe(selectYear,true)][cal.getNumbNe(selectMonth,true)-1];
				totalDaysType = 'BS';
				if(totalDays<parseInt(selectDate)) {
					selectDate = '01';
				}
				setDate = cal.getEngDate(selectYear, selectMonth, selectDate, showMsg);
				result.classList.add('out-ad');
			} else {
				totalDays = new Date(selectYear, parseInt(selectMonth), 0).getDate();
				totalDaysType = 'AD';
				if(totalDays<parseInt(selectDate)) {
					selectDate = '01';
				}
				setDate = cal.getNepDate(selectYear, selectMonth, selectDate, showMsg);
				result.classList.add('out-bs');
			}
			const resultYear = document.querySelector('.result .year');
			const resultMonth = document.querySelector('.result .month');
			const resultDate = document.querySelector('.result .date');
			const resultDay = document.querySelector('.result .day');
			resultYear.innerHTML = setDate.y;
			resultMonth.innerHTML = setDate.M;
			resultDate.innerHTML = setDate.d;
			resultDay.innerHTML = setDate.l;
			resultYear.setAttribute('data-year',setDate.string.yyyy);
			resultMonth.setAttribute('data-month',setDate.string.mm);
			resultDate.setAttribute('data-date',setDate.string.dd);

			if(convert=='AD') {
				totalDays = cal.nepaliYears[cal.getNumbNe(selectYear,true)][cal.getNumbNe(selectMonth,true)-1];
				totalDaysType = 'BS';
			} else {
				totalDays = new Date(selectYear, parseInt(selectMonth), 0).getDate();
				totalDaysType = 'AD';
			}

			let dateDay = '';
			for (let count = 1; count <= totalDays; count++) {
				const optionValue = count;
				const optionText = optionValue;
				if(totalDaysType=='BS') {
					dateDay += '<option value="'+optionValue+'"'+(count==parseInt(selectDate)?' selected':'')+'>'+cal.getNumbNe(optionText.toString())+'</option>';
				} else {
					dateDay += '<option value="'+optionValue+'"'+(count==parseInt(selectDate)?' selected':'')+'>'+optionText+'</option>';
				}
			}
			document.querySelector('[name="date"]').innerHTML = dateDay;
			loadAltResult();
		});
	});
	loadAltResult();
	window.addEventListener('hashchange', function() {
		makeActiveButton();
		loadAltResult();
	});
	document.querySelectorAll('.date-convert .btn-convert').forEach( function(btn) {
		btn.addEventListener('click',function() {
			let convert = getHashParameters(this.getAttribute('href')).convert;
			setHashParameters({convert:convert});
			loadForm();
			loadData();
			makeActiveButton();
			loadAltResult();
		});
	});
	document.querySelector('.date-convert .btn-switch').addEventListener('click',function() {
		let convert = getHashParameters().convert;
		const result = document.querySelector('.result');

		let resDateObj = {};
		let resYear = document.querySelector('.result .year').getAttribute('data-year');
		let resMonth = document.querySelector('.result .month').getAttribute('data-month');
		let resDate = document.querySelector('.result .date').getAttribute('data-date');

		resDateObj.year = resYear;
		resDateObj.month = resMonth;
		resDateObj.date = resDate;

		let inpDateObj = {};
		let inpYear = document.querySelector('select[name="year"]').value;
		let inpMonth = document.querySelector('select[name="month"]').value;
		let inpDate = document.querySelector('select[name="date"]').value;

		inpDateObj.year = inpYear;
		inpDateObj.month = inpMonth;
		inpDateObj.date = inpDate;

		let dateObj = {};
		if(result.classList.contains('out-ad')) {
			dateObj.eng = cal.getEngDate(inpDateObj.year, inpDateObj.month, inpDateObj.date, showMsg);
			dateObj.nep = cal.getNepDate(resDateObj.year, resDateObj.month, resDateObj.date, showMsg);
			setHashParameters({convert:'BS'});
			result.classList.remove('out-ad','out-bs');
			result.classList.add('out-ad');
		} else {
			dateObj.eng = cal.getEngDate(resDateObj.year, resDateObj.month, resDateObj.date, showMsg);
			dateObj.nep = cal.getNepDate(inpDateObj.year, inpDateObj.month, inpDateObj.date, showMsg);
			setHashParameters({convert:'AD'});
			result.classList.remove('out-ad','out-bs');
			result.classList.add('out-bs');
		}
		loadForm(dateObj);
		loadData(dateObj);
		makeActiveButton();
		loadAltResult();
	});
});
</script>