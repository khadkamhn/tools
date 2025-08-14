---
layout: default
title: "Aspect Ratio"
permalink: /aspect-ratio/
inline_styles:
  - "
	.modal-dialog {
		max-width: 600px !important;
	}
	.result-preview {
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
						<hr>
						<div class="col-6">
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
								<div class="form-label">&nbsp;</div>
								<div class="form-check form-switch">
									<input id="round" class="form-check-input" type="checkbox" name="round" checked>
									<label for="round" class="form-check-label">Round results to the nearest whole number</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<ol class="my-2 ps-3">
						<li>Input the original dimensions (<code>Width<sub>1</sub></code> and <code>Height<sub>1</sub></code>) in the left fields.</li>
						<li>Enter either a new <code>Width<sub>2</sub></code> or <code>Height<sub>2</sub></code> on the right to automatically calculate the other.</li>
					</ol>
					<p class="mb-2"><em>Some reference from <a href="https://andrew.hedges.name/experiments/aspect_ratio/" target="_blank">https://andrew.hedges.name/experiments/aspect_ratio/</a></em></p>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>Preview Info / Formula</span>
					<span class="material-icons" data-action="info">info</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-md-6">
							<div class="h6 text-center">Sample Preview</div>
							<div class="result-preview m-auto d-flex align-items-center justify-content-center no-img"></div>
							<hr>
							<div class="mb-3">
								<div class="form-check form-switch">
									<input id="preview" class="form-check-input" type="checkbox" name="preview">
									<label for="preview" class="form-check-label">Preview image with sample</label>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="table-responsive"></div>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<p class="mt-2">To resize a <code>1600</code> x <code>1200</code> photo to <code>400</code> pixels wide while keeping the aspect ratio, calculate the new height proportionally.</p>
					<p>(<code>original height</code> / <code>original width</code>) x <code>new width</code> = <code>new height</code></p>
					<p class="mb-2">(<code>1200</code> / <code>1600</code>) x <code>400</code> = <code>300</code></p>
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
function isPositiveNumber(value) {
	return /^\d+(\.\d+)?$/.test(value);
}
function calculateRatio(w, h) {
	if (!w && !h) return false;
	const units = 'px';

	let width = parseFloat(w.value);
	let height = parseFloat(h.value);

	if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
		mk.toastr({head:{text:'Opps!'},body:'Both width and height should be valid positive numbers.!'},'warning');
		return;
	}

	const roundCalc = (value, decimals = 2) => {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

	// Calculate
	const aspectRatio = width / height;
	const actualRatioText = `${roundCalc(aspectRatio)}:1`;

	const divisor = gcd(width, height);
	const simplifiedW = width / divisor;
	const simplifiedH = height / divisor;
	const simplifiedRatioText = `${simplifiedW}:${simplifiedH}`;

	const nearestStandard = findNearestStandard(aspectRatio);

	const diagonal = roundCalc(Math.sqrt(width ** 2 + height ** 2), 2);
	const unitText = units ? ` ${units}` : '';

	// Output to answer div
	const resultHTML = `
		<table class="table table-striped table-hover border">
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
	const resultPreview = document.querySelector('.result-preview');
	const resultTable = document.querySelector('.table-responsive');
	resultPreview.innerHTML = `<span class="text-center">${simplifiedRatioText} or ${actualRatioText}</span>`;
	resultTable.innerHTML = resultHTML;

	// Show Preview
	let sampleWidth, sampleHeight;
	if (+width > +height) {
		sampleWidth  = 200;
		sampleHeight = solve(sampleWidth, undefined, width, height);
	} else {
		sampleHeight = 200;
		sampleWidth  = solve(undefined, sampleHeight, width, height);
	}
	resultPreview.style.height = sampleHeight+'px';
	resultPreview.style.width = sampleWidth+'px';
}

const moreRatio = `
<h4 class="caption">Standard Aspect Ratios</h4>
<div class="overflow-y-auto" style="max-height: 320px">
<table class="table table-sm table-striped table-hover">
	<thead>
		<tr>
			<th>Aspect Ratio <br> W:H </th>
			<th>Width <br> W </th>
			<th>Height <br> H </th>
			<th>Width/Height <br> W/H = </th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1:1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
		</tr>
		<tr>
			<td>1.37:1</td>
			<td>1.37</td>
			<td>1</td>
			<td>1.37</td>
		</tr>
		<tr>
			<td>1.43:1</td>
			<td>1.43</td>
			<td>1</td>
			<td>1.43</td>
		</tr>
		<tr>
			<td>1.85:1</td>
			<td>1.85</td>
			<td>1</td>
			<td>1.85</td>
		</tr>
		<tr>
			<td>2:1</td>
			<td>2</td>
			<td>1</td>
			<td>2</td>
		</tr>
		<tr>
			<td>2.165:1</td>
			<td>2.165</td>
			<td>1</td>
			<td>2.165</td>
		</tr>
		<tr>
			<td>2.35:1</td>
			<td>2.35</td>
			<td>1</td>
			<td>2.35</td>
		</tr>
		<tr>
			<td>3:4</td>
			<td>3</td>
			<td>4</td>
			<td>0.75</td>
		</tr>
		<tr>
			<td>3:2</td>
			<td>3</td>
			<td>2</td>
			<td>1.5</td>
		</tr>
		<tr>
			<td>4:3</td>
			<td>4</td>
			<td>3</td>
			<td>1.333</td>
		</tr>
		<tr>
			<td>4:1</td>
			<td>4</td>
			<td>1</td>
			<td>4</td>
		</tr>
		<tr>
			<td>5:4</td>
			<td>5</td>
			<td>4</td>
			<td>1.25</td>
		</tr>
		<tr>
			<td>5:3</td>
			<td>5</td>
			<td>3</td>
			<td>1.667</td>
		</tr>
		<tr>
			<td>14:9</td>
			<td>14</td>
			<td>9</td>
			<td>1.556</td>
		</tr>
		<tr>
			<td>16:18</td>
			<td>16</td>
			<td>18</td>
			<td>0.889</td>
		</tr>
		<tr>
			<td>16:10</td>
			<td>16</td>
			<td>10</td>
			<td>1.6</td>
		</tr>
		<tr>
			<td>16:9</td>
			<td>16</td>
			<td>9</td>
			<td>1.778</td>
		</tr>
		<tr>
			<td>17:9</td>
			<td>17</td>
			<td>9</td>
			<td>1.889</td>
		</tr>
		<tr>
			<td>20:9</td>
			<td>20</td>
			<td>9</td>
			<td>2.222</td>
		</tr>
		<tr>
			<td>21:9</td>
			<td>21</td>
			<td>9</td>
			<td>2.333</td>
		</tr>
		<tr>
			<td>22:9</td>
			<td>22</td>
			<td>9</td>
			<td>2.444</td>
		</tr>
		<tr>
			<td>24:10</td>
			<td>24</td>
			<td>10</td>
			<td>2.4</td>
		</tr>
		<tr>
			<td>32:10</td>
			<td>32</td>
			<td>10</td>
			<td>3.2</td>
		</tr>
		<tr>
			<td>32:9</td>
			<td>32</td>
			<td>9</td>
			<td>3.556</td>
		</tr>
		<tr>
			<td>64:27</td>
			<td>64</td>
			<td>27</td>
			<td>2.37</td>
		</tr>
	</tbody>
</table>
</div>
<p class="mb-0 pt-2"><em>Source: <a href="https://www.calculatorsoup.com/calculators/technology/aspect-ratio-calculator.php" target="_blank">calculatorsoup.com</a></em></p>
`;
let lastTarget = null;
function round() {
	return document.querySelector('[name=round]:checked') !== null;
}
function solve(width, height, numerator, denominator) {
	if (undefined !== width) {
		return round() ? Math.round(width / (numerator / denominator)) : width / (numerator / denominator);
	}
	else if (undefined !== height) {
		return round() ? Math.round(height * (numerator / denominator)) : height * (numerator / denominator);
	}
	else {
		return undefined;
	}
}
function flash(el) {
	if (el) {
		el.classList.remove('tada','animated');
		el.classList.add('tada','animated');
		el.addEventListener('animationend', function () {
			el.classList.remove('tada','animated');
		});
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const w1 = document.querySelector('[name="w1"]');
	const h1 = document.querySelector('[name="h1"]');
	const w2 = document.querySelector('[name="w2"]');
	const h2 = document.querySelector('[name="h2"]');
	const inputs = document.querySelectorAll('[name="w1"], [name="h1"], [name="w2"], [name="h2"]');
	const ratios = document.querySelector('[name="ratios"]');
	const round = document.querySelector('[name="round"]');
	const preview = document.querySelector('[name="preview"]');

	applyPreset(ratios, w1, h1);
	calculateRatio(w1, h1);

	inputs.forEach( (input) => {
		input.addEventListener('input', function (e) {
			lastTarget = e.target;
			this.value = this.value.replace(/\D/g, '');
			let w1v = parseFloat(w1.value);
			let h1v = parseFloat(h1.value);
			let w2v = parseFloat(w2.value);
			let h2v = parseFloat(h2.value);
			calculateRatio(w1, h1);
			switch(e.target) {
				case w1:
					if (!isPositiveNumber(w1v) || !isPositiveNumber(h1v) || !isPositiveNumber(h2v)) return;
					w2.value = solve(undefined, h2v, w1v, h1v);
					flash(w2);
				break;
				case h1:
					if (!isPositiveNumber(h1v) || !isPositiveNumber(w1v) || !isPositiveNumber(w2v)) return;
					h2.value = solve(w2v, undefined, w1v, h1v);
					flash(h2);
				break;
				case w2:
					if (!isPositiveNumber(w2v) || !isPositiveNumber(w1v) || !isPositiveNumber(h1v)) return;
					h2.value = solve(w2v, undefined, w1v, h1v);
					flash(h2);
				break;
				case h2:
					if (!isPositiveNumber(h2v) || !isPositiveNumber(w1v) || !isPositiveNumber(h1v)) return;
					w2.value = solve(undefined, h2v, w1v, h1v);
					flash(w2);
				break;
			}
		});
	});

	ratios.addEventListener('input', function () {
		applyPreset(ratios, w1, h1);
		calculateRatio(w1, h1);
	});

	round.addEventListener('input', function () {
		if (lastTarget) {
			lastTarget.dispatchEvent(new Event('input', { bubbles: true }));
		}
	});

	document.querySelector('[data-action="info"]').addEventListener('click',() => {
		mk.alert(moreRatio);
	});

	document.querySelector('[data-action="reset"]').addEventListener('click',() => {
		w2.value = '';
		h2.value = '';
	});

	preview.addEventListener('input', function (e) {
		const ratioPreview = document.querySelector('.result-preview');
		if (e.target.checked) {
			ratioPreview.classList.remove('no-img');
			ratioPreview.classList.add('has-img');
		} else {
			ratioPreview.classList.remove('has-img');
			ratioPreview.classList.add('no-img');
		}
	});
});
window.addEventListener('load', function () {
	mk.alert('<h5>Page Under Construction</h5><p>This page is still in progress. It will be ready and fully functional soon!</p>');
});
</script>