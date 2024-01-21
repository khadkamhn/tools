---
layout: default
title: "Base64 PNG Generator"
permalink: /base64-png-generator/
scripts: "/assets/js/range-slider.min.js"
inline_styles:
  - "canvas {
		border: 1px solid;
		background-image: linear-gradient(45deg, rgba(0,0,0,.45) 25%, transparent 25%,transparent 75%, rgba(0,0,0,.45) 75%, rgba(0,0,0,.45) 100%), linear-gradient(45deg, rgba(0,0,0,.45) 25%, transparent 25%,transparent 75%, rgba(0,0,0,.45) 75%, rgba(0,0,0,.45) 100%);
		background-size:20px 20px;
		background-position:0 0, 10px 10px;
	}"
---

<div class="base64-png mt-3 mt-lg-5">
	<form action="#" method="post">
		<div class="row justify-content-center align-items-center">
			<div class="col-md-6 col-lg-3">
				<div class="input-group mb-3">
					<span class="input-group-text">Color</span>
					<input class="form-control" type="text" name="background" value="rgba(0,0,0,0)" data-coloris>
				</div>
			</div>
			<div class="col-md-6 col-lg-3">
				<div class="input-group mb-3">
					<span class="input-group-text">Width</span>
					<input class="form-control" type="number" name="width" placeholder="width" value="500" min="1" max="2000" maxlength="3">
					<span class="input-group-text">px</span>
				</div>
			</div>
			<div class="col-md-6 col-lg-3">
				<div class="input-group mb-3">
					<span class="input-group-text">Height</span>
					<input class="form-control" type="number" name="height" placeholder="height" value="254" min="1" max="2000" maxlength="3">
					<span class="input-group-text">px</span>
				</div>
			</div>
			<!--<div class="col-md-6 col-lg-3">
				<div class="mb-3">
					<div class="d-flex">
						<label class="input-label pe-3">Opacity</label>
						<input type="range" min="0" max="1" step="0.1" name="opacity" value="0" data-range>
					</div>
				</div>
			</div>-->
		</div>
		<div class="row">
			<div class="col-md-6 mb-3">
				<label class="input-label">Code</label>
				<textarea class="form-control" name="result" cols="60" rows="10"></textarea>
			</div>
			<div class="col-md-6 mb-3">
				<label class="input-label">Preview</label>
				<div class="overflow-auto">
					<canvas id="png"/>
				</div>
			</div>
		</div>
	</form>
	<div class="alert bg-white code-copy">
		<div class="d-flex justify-content-between align-items-center"><strong>CSS background:</strong><span class="material-icons" data-copy="css">content_copy</span></div>
		<code class="font-monospace"><pre class="with-css p-2"></pre></code>
		<div class="d-flex justify-content-between align-items-center"><strong>Image Tag:</strong><span class="material-icons" data-copy="img">content_copy</span></div>
		<code class="font-monospace"><pre class="with-img p-2 m-0"></pre></code>
	</div>
	<div class="text-center">
		<div class="mt-3 alert d-inline-block bg-gray">
			<button class="btn btn-primary" data-download><i class="material-icons align-middle">download</i> Download .png file</button>
		</div>
	</div>
</div>
<script>
function htmlEntitiesEncode(text) {
	return text.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
		return '&#'+i.charCodeAt(0)+';';
	});
}
function hexToRGBA(h,a=1) {
	let r = 0, g = 0, b = 0;

	if (h.length == 4) {
		r = "0x" + h[1] + h[1];
		g = "0x" + h[2] + h[2];
		b = "0x" + h[3] + h[3];

	} else if (h.length == 7) {
		r = "0x" + h[1] + h[2];
		g = "0x" + h[3] + h[4];
		b = "0x" + h[5] + h[6];
	}
	return "rgba("+ +r + "," + +g + "," + +b + ","+a+")";
}
let png = document.getElementById('png'), ctx = png.getContext('2d');
document.addEventListener('DOMContentLoaded', function () {
	const makeCanvas = function() {
		let canvas = document.querySelector('canvas'),
			color = document.querySelector('[name="background"]').value,
			//opacity = document.querySelector('[name="opacity"]').value,
			width = document.querySelector('[name="width"]').value,
			height = document.querySelector('[name="height"]').value;
		width = width?width:1;
		height = height?height:1;
		png.width = width;
		png.height = height;
		ctx.clearRect(0, 0, width, height);
		//ctx.fillStyle = color?(hexToRGBA(color,opacity)):'transparent';
		ctx.fillStyle = color?color:'transparent';
		ctx.fillRect(0, 0, width, height);
		document.querySelector('[name="result"]').innerHTML = canvas.toDataURL('image/png');
		document.querySelector('.with-css').innerHTML = 'background-image: url(\''+canvas.toDataURL('image/png')+'\');';
		document.querySelector('.with-img').innerHTML = htmlEntitiesEncode('<img src="'+canvas.toDataURL('image/png')+'" width="'+width+'" height="'+height+'" alt="Base64">');
	}
	makeCanvas();
	document.querySelectorAll('form input').forEach(function(input) {
		input.addEventListener(('change','input'),function() {
			const inputType = this.getAttribute('type');
			if (inputType=='number' && input.value.length > 4) {
				input.value = input.value.slice(0, 4);
			}
			if(inputType=='number' && input.value > 2000) {
				input.value = 2000;
			}
			makeCanvas();
		});
	});
	Coloris.setInstance('[name="background"]', {
		alpha: true,
		forceAlpha: true,
		formatToggle: false,
		format: 'rgb',
		theme: 'polaroid',
		onChange: function(data) {
			//console.log(data);
		}
	});
	document.querySelectorAll('.code-copy .material-icons').forEach(function(copy) {
		copy.addEventListener('click',function() {
			const whichCopy = this.getAttribute('data-copy');
			let base64Data = '';
			if(whichCopy == 'css') {
				base64Data = this.closest('.alert').querySelector('.with-css').textContent;
			} else if(whichCopy == 'img') {
				base64Data = this.closest('.alert').querySelector('.with-img').textContent;
			}
			if(base64Data) {
				mk.copyToClipboard(base64Data);
			}
		});
	});
	document.querySelector('[data-download]').addEventListener('click',function() {
		const base64Data = document.querySelector('[name="result"]').value,
			width = document.querySelector('[name="width"]').value,
			height = document.querySelector('[name="height"]').value;
		const a = document.createElement('a');
		a.href = base64Data;
		a.download = 'base64-'+width+'x'+height+'.png';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	});
});
</script>