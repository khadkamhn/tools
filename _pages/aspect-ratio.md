---
layout: default
title: "Aspect Ratio"
permalink: /aspect-ratio/
inline_styles:
  - ".result-preview {
	width: 200px;
	height: 100px;
	border: 1px solid;
  }"
---

<form action="#" method="post">
	<div class="row">
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>Input / Calculator</span>
					<span class="material-icons" data-action="reset" title="Reset">refresh</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-6 offset-6">
							<div class="mb-3">
								<label class="form-label" for="preset">Common ratios</label>
								<select class="form-select" name="ratios" id="preset">
									<option value="7680x4320">7680 x 4320 (8K UHDTV)</option>
									<option value="5120x2880">5120 x 2880 (5K, iMac with retina screen)</option>
									<option value="3840x2160">3840 × 2160 (4K UHDTV)</option>
									<option value="2048x1536">2048 x 1536 (iPad with retina screen)</option>
									<option value="1920x1200">1920 x 1200 (WUXGA)</option>
									<option value="1920x1080" selected="selected">1920 x 1080 (HD TV, iPhone 6 plus)</option>
									<option value="1334x750">1334 x 750 (iPhone 6)</option>
									<option value="1200x630">1200 x 630 (Facebook)</option>
									<option value="1136x640">1136 x 640 (iPhone 5 screen)</option>
									<option value="1024x768">1024 x 768 (iPad)</option>
									<option value="1024x512">1024 x 512 (Twitter)</option>
									<option value="960x640">960 x 640 (iPhone 4 screen)</option>
									<option value="800x600">800 x 600</option>
									<option value="728x90">728 x 90 (Common web banner ad size)</option>
									<option value="720x576">720 x 576 (PAL)</option>
									<option value="640x480">640 x 480 (VGA)</option>
									<option value="576x486">576 x 486 (NTSC)</option>
									<option value="320x480">320 x 480 (HVGA)</option>
								</select>
							</div>
						</div>
						<div class="col-6">
							<div class="mb-3">
								<label class="form-label" for="w1">Width <sub>1</sub></label>
								<input id="w1" type="number" class="form-control" name="w1" placeholder="i.e. 1920">
								<div class="form-text">Specifies the original width for calculation.</div>
							</div>
						</div>
						<div class="col-6">
							<div class="mb-3">
								<label class="form-label" for="w2">Width <sub>2</sub></label>
								<input id="w2" type="number" class="form-control" name="w2" placeholder="i.e. 1920">
								<div class="form-text">Set manually or derived from Height<sub>2</sub>.</div>
							</div>
						</div>
						<div class="col-6">
							<div class="mb-3">
								<label class="form-label" for="h1">Height <sub>1</sub></label>
								<input id="h1" type="number" class="form-control" name="h1" placeholder="i.e. 1080">
								<div class="form-text">Specifies the original height for calculation.</div>
							</div>
						</div>
						<div class="col-6">
							<div class="mb-3">
								<label class="form-label" for="h2">Height <sub>2</sub></label>
								<input id="h2" type="number" class="form-control" name="h2" placeholder="i.e. 1080">
								<div class="form-text">Set manually or derived from Width<sub>2</sub>.</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<ol class="my-2 ps-3">
						<li>Input the original dimensions (<code>Width<sub>1</sub></code> and <code>Height<sub>1</sub></code>) in the left fields.</li>
						<li>Enter either a new <code>Width<sub>2</sub></code> or <code>Height<sub>2</sub></code> on the right to automatically calculate the other.</li>
					</ol>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>Preview Info / Formula</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-md-6">
							<div class="table-responsive"></div>
						</div>
						<div class="col-md-6">
							<div class="h6">Aspect ratio is: <span class="result-ratio">16 : 9</span></div>
							<div class="result-preview"></div>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<p>To resize a <code>1600</code>x<code>1200</code> photo to <code>400</code> pixels wide while keeping the aspect ratio, calculate the new height proportionally.</p>
					<p>You would need to do the following calculation:</p>
					<p>(<code>original height</code> / <code>original width</code>) x <code>new width</code> = <code>new height</code></p>
					<p>(<code>1200</code> / <code>1600</code>) x <code>400</code> = <code>300</code></p>
				</div>
			</div>
		</div>
	</div>
</form>
<script>
const standardRatios = [
	{ name: "1:1", ratio: 1, info: {category: 'Square', title: 'Square'} },

	{ name: "3:2", ratio: 3 / 2, info: {category: 'Photography', title: '35mm photo'} },
	{ name: "2:3", ratio: 2 / 3, info: {category: 'Photography', title: 'Portrait version of 3:2'} },
	{ name: "4:5", ratio: 4 / 5, info: {category: 'Photography', title: 'Instagram portrait'} },
	{ name: "5:4", ratio: 5 / 4, info: {category: 'Photography', title: ''} },
	{ name: "7:5", ratio: 7 / 5, info: {category: 'Photography', title: ''} },

	{ name: "4:3", ratio: 4 / 3, info: {category: 'Display & Monitor', title: ''} },
	{ name: "16:10", ratio: 16 / 10, info: {category: 'Display & Monitor', title: ''} },
	{ name: "16:9", ratio: 16 / 9, info: {category: 'Display & Monitor', title: ''} },
	{ name: "21:9", ratio: 21 / 9, info: {category: 'Display & Monitor', title: ''} },
	{ name: "32:9", ratio: 32 / 9, info: {category: 'Display & Monitor', title: ''} },

	{ name: "9:16", ratio: 9 / 16, info: {category: 'Mobile / Vertical Video', title: 'TikTok, Reels, Shorts'} },
	{ name: "1.91:1", ratio: 1.91, info: {category: 'Mobile / Vertical Video', title: 'Facebook/Instagram ads'} },

	{ name: "1.33:1", ratio: 4 / 3, info: {category: 'Cinema & Film', title: 'Silent film'} },
	{ name: "1.37:1", ratio: 1.37, info: {category: 'Cinema & Film', title: 'Academy'} },
	{ name: "1.66:1", ratio: 1.66, info: {category: 'Cinema & Film', title: 'European widescreen'} },
	{ name: "1.78:1", ratio: 16 / 9, info: {category: 'Cinema & Film', title: 'HDTV standard'} },
	{ name: "1.85:1", ratio: 1.85, info: {category: 'Cinema & Film', title: 'Theatrical widescreen'} },
	{ name: "2.35:1", ratio: 2.35, info: {category: 'Cinema & Film', title: 'Cinemascope'} },
	{ name: "2.39:1", ratio: 2.39, info: {category: 'Cinema & Film', title: 'Widescreen cinema'} },
	{ name: "2.40:1", ratio: 2.4, info: {category: 'Cinema & Film', title: 'Often used interchangeably with 2.39'} },
	{ name: "17:9", ratio: 17 / 9, info: {category: 'Cinema & Film', title: '~1.89:1 – DCI 4K digital cinema'} },
	{ name: "2.76:1", ratio: 2.76, info: {category: 'Cinema & Film', title: 'Ultra Panavision 70'} },

	{ name: "5:3", ratio: 5 / 3, info: {category: 'Others / Misc', title: ''} },
];
function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}
function round(value, decimals = 2) {
	return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
function applyPreset(ratios, w1, h1) {
	const val = ratios.value;
	if (val) {
		const [w, h] = val.split('x');
		w1.value = w;
		h1.value = h;
		//calculateRatio();
	}
}
function findNearestStandard(actualRatio) {
	let nearest = standardRatios[0];
	let minDiff = Math.abs(actualRatio - nearest.ratio);

	for (let i = 1; i < standardRatios.length; i++) {
		const diff = Math.abs(actualRatio - standardRatios[i].ratio);
		if (diff < minDiff) {
			nearest = standardRatios[i];
			minDiff = diff;
		}
	}

	return nearest.name;
}
function calculateRatio(w, h) {
	if (!w && !h) return false;
	const units = 'px';

	let width = parseFloat(w.value);
	let height = parseFloat(h.value);

	if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
		alert("Please enter valid positive numbers for width and height.");
		return;
	}

	// Calculate
	const aspectRatio = width / height;
	const actualRatioText = `${round(aspectRatio)}:1`;

	const divisor = gcd(width, height);
	const simplifiedW = width / divisor;
	const simplifiedH = height / divisor;
	const simplifiedRatioText = `${simplifiedW}:${simplifiedH}`;

	const nearestStandard = findNearestStandard(aspectRatio);

	const diagonal = round(Math.sqrt(width ** 2 + height ** 2), 2);
	const unitText = units ? ` ${units}` : '';

	// Output to answer div
	const resultHTML = `
		<table class="table table-sm table-striped">
			<tr>
				<td>Aspect Ratio <span class="small">actual</span></td>
				<td>${simplifiedRatioText} or ${actualRatioText}</td>
			</tr>
			<tr>
				<td>Aspect Ratio <span class="small">nearest standard</span></td>
				<td>${nearestStandard}</td>
			</tr>
			<tr>
				<td>Width</td>
				<td>${width}${unitText}</td>
			</tr>
			<tr>
				<td>Height</td>
				<td>${height}${unitText}</td>
			</tr>
			<tr>
				<td>Diagonal</td>
				<td>${diagonal}${unitText}</td>
			</tr>
		</table>
	`;
	document.querySelector('.result-ratio').innerHTML = `${simplifiedRatioText} or ${actualRatioText}`;
	document.querySelector('.table-responsive').innerHTML = resultHTML;
}
document.addEventListener('DOMContentLoaded', function () {
	const w1 = document.querySelector('[name="w1"]');
	const h1 = document.querySelector('[name="h1"]');
	const w2 = document.querySelector('[name="w2"]');
	const h2 = document.querySelector('[name="h2"]');
	const inputs = document.querySelectorAll('[name="w1"], [name="h1"], [name="w2"], [name="h2"]');
	const ratios = document.querySelector('[name="ratios"]');

	applyPreset(ratios, w1, h1);
	calculateRatio(w1, h1);

	inputs.forEach((input) => {
		input.addEventListener('input', function () {
			this.value = this.value.replace(/\D/g, '');
		});
	});

	ratios.addEventListener('input', function () {
		applyPreset(ratios, w1, h1);
		calculateRatio(w1, h1);
	});
});
window.addEventListener('load', function () {
	mk.alert('<h5>This is still in progress</h5><p>The page will be ready soon and working...</p>');
});
</script>