---
layout: default
title: "Base64 Font Generator"
permalink: /base64-font-generator/
scripts: "/assets/js/fontkit.min.js"
---

<div class="base64-font mt-3 mt-lg-5">
	<form action="#" method="post">
		<div class="row justify-content-center">
			<div class="col-md-4">
				<div class="mb-3">
					<input class="form-control" type="file" name="font">
				</div>
			</div>
			<div class="col-md-8">
				<div class="row">
					<div class="col-md-5">
						<div class="input-group mb-3">
							<span class="input-group-text">Font Family</span>
							<input class="form-control" type="text" name="font-family">
						</div>
					</div>
					<div class="col-md-3">
						<div class="input-group mb-3">
							<span class="input-group-text">Font Weight</span>
							<select class="form-select" name="font-weight">
								<option value="100">100</option>
								<option value="200">200</option>
								<option value="300">300</option>
								<option value="400" selected>400</option>
								<option value="500">500</option>
								<option value="600">600</option>
								<option value="700">700</option>
								<option value="800">800</option>
								<option value="900">900</option>
							</select>
						</div>
					</div>
					<div class="col-md-4">
						<div class="input-group mb-3">
							<span class="input-group-text">Font Style</span>
							<select class="form-select" name="font-style">
								<option value="normal">Normal</option>
								<option value="italic">Italic</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card text-bg-light mb-3">
			<div class="card-header">
				<h5 class="card-title mb-0 fw-normal">Font Family <strong class="font-active-name"></strong></h5>
			</div>
			<div class="card-body">
				<span class="material-icons" data-copy="css">content_copy</span>
				<div class="css-code font-monospace"></div>
			</div>
			<div class="card-footer text-body-secondary">
				<div><strong>Note:</strong> If you belive that the <code>font-family</code>, <code>font-weight</code> and <code>font-style</code> appear incorrectly, kindly change it from the dropdown.</div>
			</div>
		</div>
	</form>
</div>
<script>
const fontActiveName = document.querySelector('.font-active-name');
const cssCode = document.querySelector('.css-code');
const fontInputFile = document.querySelector('[name="font"]');
const fontInputFamily = document.querySelector('[name="font-family"]');
const fontInputWeight = document.querySelector('[name="font-weight"]');
const fontInputStyle = document.querySelector('[name="font-style"]');

function getFontMatch(fontName) {
	const weightList = {
		100: ['thin'],
		200: ['extralight', 'ultralight'],
		300: ['light'],
		400: ['regular'],
		500: ['medium'],
		600: ['semibold', 'demibold'],
		700: ['bold'],
		800: ['extrabold', 'ultrabold'],
		900: ['black', 'heavy'],
	};

	let cleanFontName = function(fontName, depthClean=false) {
		const cleanedName = fontName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
		if(depthClean) {
			//return cleanedName.replace(/(\w)([A-Z])/g, '$1 $2');
			return cleanedName.replace(/(\w)([A-Z])|([A-Z])([A-Z][a-z])|(\s)([A-Z])/g, (match, p1, p2, p3, p4, p5, p6) => {
				if (p1 && p2) {
					return `${p1} ${p2}`;
				} else if (p3 && p4) {
					return `${p3} ${p4}`;
				} else if (p5 && p6) {
					return `${p5}${p6}`;
				}
			});
		}else {
			return cleanedName;
		}
	}

	let baseFontName = cleanFontName(fontName);
	let fontWeight = 400;
	let fontStyle = "normal";

	const italicIndex = baseFontName.toLowerCase().indexOf('italic');
	if (italicIndex !== -1) {
		fontStyle = 'italic';
		baseFontName = baseFontName.slice(0, italicIndex) + baseFontName.slice(italicIndex + 'italic'.length);
	}

	const regexWeight = {
		'Extra Bold': 'Extrabold',
		'ExtraBold': 'Extrabold',
		'Semi Bold':'Semibold',
		'SemiBold':'Semibold',
		'Demi Bold':'Demibold',
		'DemiBold':'Demibold',
		'Ultra Bold':'Ultrabold',
		'UltraBold':'Ultrabold',
	};
	const matchedWeight = Object.keys(regexWeight).find(key => new RegExp(key, 'i').test(baseFontName));

	if (!baseFontName.toLowerCase().includes('italic')) {
		for (const weight in weightList) {
			const weightNames = weightList[weight];

			for (const name of weightNames) {
				const normalizedFontName = baseFontName.toLowerCase();
				if (normalizedFontName === name.toLowerCase()) {
					baseFontName = "";
					fontWeight = parseInt(weight);
					break;
				}
				if(matchedWeight) {
					baseFontName = baseFontName.replace(matchedWeight,'').trim();
					fontWeight = parseInt(weight);
					break;
				}
				if (normalizedFontName.includes(name.toLowerCase())) {
					baseFontName = baseFontName.replace(new RegExp(name, 'i'), '').trim();
					fontWeight = parseInt(weight);
					break;
				}
			}
		}
	}
	baseFontName = cleanFontName(baseFontName,true).trim();
	return {
		name: baseFontName,
		weight: fontWeight,
		style: fontStyle
	};
}

function displayFontInfo(name, text) {
	const fontInfo = getFontMatch(name);
	const cssHeader = `@font-face { \r\n` +
		`	font-family: "${fontInfo.name || " "}";\r\n` +
		`	font-weight: "${fontInfo.weight}";\r\n` +
		`	font-style: "${fontInfo.style}";\r\n` +
		`	src: url(`;
	const cssFooter = `);\r\n` +
	`}`;

	if(fontInfo.weight) {
		fontInputWeight.value = fontInfo.weight;
	}
	if(fontInfo.style != null) {
		fontInputStyle.value = fontInfo.style;
	}
	fontActiveName.innerHTML = name;
	fontInputFamily.value = fontInfo.name;
	cssCode.innerHTML = cssHeader + text + cssFooter;
}

function convertFontFile() {
	const file = fontInputFile.files[0];
	const fileName = file.name;
	const getFileNameWithoutExtension = (filePath) => filePath.split('.').slice(0, -1).join('.');
	let fontName = getFileNameWithoutExtension(fileName);
	let fontBase64 = "";
	const readerFontkit = new FileReader();
	const readerBase64 = new FileReader();

	try {
		if (fileName.endsWith(".woff2") || fileName.endsWith(".woff") || fileName.endsWith(".ttf")) {
			readerFontkit.readAsArrayBuffer(file);
			readerFontkit.onload = (e) => {
				const arrayBuffer = readerFontkit.result;
				const fontkitBuffer = new Buffer(arrayBuffer);
				const font = fontkit.create(fontkitBuffer);
				fontName = font.familyName
			}
			readerBase64.readAsDataURL(file);
			readerBase64.onload = (e) => {
				fontBase64 = e.target.result;
				displayFontInfo(fontName, fontBase64);
			}
			displayFontInfo(fontName, fontBase64);
		} else {
			mk.toastr({head:{text:'Unable to convert'},body:`<p>This tool couldn't read <strong>${fileName}</strong></p><p>Please kindly try another format</p>`},'danger');
			fontInputFile.value = '';
		}
	} catch (e) {
		console.log(e);
	} finally {
		
	}
}

function fontInputChange() {
	let newCssCode = cssCode.textContent;
	newCssCode = newCssCode.replace(/font-family:\s*"[^"]+"/, `font-family: "${fontInputFamily.value || " "}"`);
	newCssCode = newCssCode.replace(/font-weight:\s*"[^"]+"/, `font-weight: "${fontInputWeight.value || " "}"`);
	newCssCode = newCssCode.replace(/font-style:\s*"[^"]+"/, `font-style: "${fontInputStyle.value || " "}"`);
	cssCode.innerHTML = newCssCode;
}

window.addEventListener("DOMContentLoaded", function () {
	fontInputFile.addEventListener("change", convertFontFile, false);
	displayFontInfo(" ", " ");
	fontInputFamily.addEventListener("input", fontInputChange);
	fontInputWeight.addEventListener("change", fontInputChange);
	fontInputStyle.addEventListener("change", fontInputChange);
	document.querySelector('[data-copy]').addEventListener('click',function() {
		let base64Data = this.closest('.card-body').querySelector('.css-code').textContent;
		if(base64Data) {
			mk.copyToClipboard(base64Data);
		}
	});
});
</script>