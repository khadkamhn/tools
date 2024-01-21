---
layout: default
title: "Shadow Generator"
permalink: /shadow-generator/
scripts: "/assets/js/range-slider.min.js"
---

<div class="shadow-generator">
	<form class="container" action="#" method="post">
		<div class="row align-items-center">
			<div class="col-md-6">
				<div class="box-shadow"></div>
			</div>
			<div class="col-md-6">
				<div class="box-shadow-result font-monospace"><code>.box-shadow {<br>&#9;<span class="css-code"></span><br>}</code><span class="material-icons">content_copy</span></div>
			</div>
		</div>
		<div class="box-tune-wrap row justify-content-center">
			<div class="box-tune col-md-6">
				<div class="tune-label"><span>Offset Horizontal</span></div>
				<input type="range" name="horizontalOffset" min="-50" max="50" value="0" data-range>
			</div>
			<div class="box-tune col-md-6">
				<div class="tune-label"><span>Offset Vertical</span></div>
				<input type="range" name="verticalOffset" min="-50" max="50" value="13" data-range>
			</div>
			<div class="box-tune col-md-6">
				<div class="tune-label"><span>Shadow Blur</span></div>
				<input type="range" name="blur" min="0" max="50" value="18" data-range>
			</div>
			<div class="box-tune col-md-6">
				<div class="tune-label"><span>Shadow Spread</span></div>
				<input type="range" name="spread" min="0" max="50" value="0" data-range>
			</div>
			<div class="box-tune col-md-3 d-flex align-items-center justify-content-center">
				<div class="tune-label"><span>Shadow Color</span></div>
				<input type="text" name="shadowColor" value="#000000" data-coloris>
			</div>
		</div>
	</form>
</div>
<div class="main-title mt-3">Preset 1</div>
<div class="d-md-flex g-3 justify-content-center text-center">
	<div class="box-item z0" data-shadow="border:1px solid #eee;"></div>
	<div class="box-item z1" data-shadow="box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);"></div>
	<div class="box-item z2" data-shadow="box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);"></div>
	<div class="box-item z3" data-shadow="box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);"></div>
	<div class="box-item z4" data-shadow="box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);"></div>
	<div class="box-item z5" data-shadow="box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);"></div>
</div>
<div class="main-title mt-2">Preset 2</div>
<div class="d-md-flex g-3 justify-content-center text-center">
	<div class="box-item ref2 z0" data-shadow="border:1px solid #eee;"></div>
	<div class="box-item ref2 z1" data-shadow="box-shadow: 0 2px 10px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.26);"></div>
	<div class="box-item ref2 z2" data-shadow="box-shadow: 0 6px 20px 0 rgba(0,0,0,.19), 0 8px 17px 0 rgba(0,0,0,.2);"></div>
	<div class="box-item ref2 z3" data-shadow="box-shadow: 0 17px 50px 0 rgba(0,0,0,.19), 0 12px 15px 0 rgba(0,0,0,.24);"></div>
	<div class="box-item ref2 z4" data-shadow="box-shadow: 0 25px 55px 0 rgba(0,0,0,.21), 0 16px 28px 0 rgba(0,0,0,.22);"></div>
	<div class="box-item ref2 z5" data-shadow="box-shadow: 0 40px 77px 0 rgba(0,0,0,.22), 0 27px 24px 0 rgba(0,0,0,.2);"></div>
</div>
<div class="text-center">
	<div class="mt-3 alert d-inline-block text-bg-info text-white">Click on the box to copy the CSS shadow.</div>
</div>
<script>
document.addEventListener('DOMContentLoaded', function () {
	let box = document.querySelector('.box-shadow');
	let horizontalOffset = document.querySelector('[name="horizontalOffset"]');
	let verticalOffset = document.querySelector('[name="verticalOffset"]');
	let blur = document.querySelector('[name="blur"]');
	let spread = document.querySelector('[name="spread"]');
	let shadowColor = document.querySelector('[name="shadowColor"]');

	function updateBoxShadow() {
		let shadowValue = `${horizontalOffset.value}px ${verticalOffset.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`;
		box.style.boxShadow = shadowValue;
		document.querySelector('.box-shadow-result .css-code').innerHTML = 'box-shadow: '+shadowValue+';';
	}
	horizontalOffset.addEventListener('input', updateBoxShadow);
	verticalOffset.addEventListener('input', updateBoxShadow);
	blur.addEventListener('input', updateBoxShadow);
	spread.addEventListener('input', updateBoxShadow);
	shadowColor.addEventListener('input', updateBoxShadow);
	updateBoxShadow();

	document.querySelectorAll('.box-item').forEach(function (item, index) {
		item.addEventListener('click', function () {
			let shadow = this.getAttribute('data-shadow');
			mk.copyToClipboard(shadow);
			mk.toastr({head:{text:'Clipboard copied!'},body: '<p>The style of the box-shadow (' + (parseInt(index) + 1) + ') has been copied!</p>'},'success');
		});
	});

	Coloris.setInstance('[name="shadowColor"]', {
		theme: 'polaroid',
		onChange: function(data) {
			updateBoxShadow();
		}
	});

	document.querySelector('.box-shadow-result .material-icons').addEventListener('click',function() {
		let css = '.box-shadow {\n\t'+this.closest('.box-shadow-result').querySelector('.css-code').textContent+'\n}';
		mk.copyToClipboard(css);
	});
});
</script>