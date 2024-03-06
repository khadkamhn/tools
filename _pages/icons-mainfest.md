---
layout: default
title: "Icons and Mainfest Generator"
permalink: /icons-and-mainfest/
scripts: "/assets/js/jszip.min.js"
inline_styles:
  - ".modal-dialog {
		max-width: 600px!important;
	}
	.modal-dialog .modal-body.text-center {
		text-align: left!important;
	}
	.icon-sample img {
		background-color: #f5f5f5;
	}
	.clr-field {
		width: 100%;
	}"
---

<form action="#" method="post">
	<div class="row">
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>Mainfest</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label" for="fullName">Name</label>
								<input id="fullName" type="text" class="form-control" name="fullName" placeholder="A Tools by Mohan Khadka">
								<div class="form-text">Specifies the full name of the web app.</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label" for="shortName">Short Name</label>
								<input id="shortName" type="text" class="form-control" name="shortName" placeholder="MK Tools">
								<div class="form-text">Provides a shorter version or an abbreviated name of the web app.</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label" for="themeColor">Theme Color</label>
								<input class="form-control" id="themeColor" type="text" name="themeColor" value="#1e282d" data-coloris>
								<div class="form-text">Defines the color of the browser's address bar when the user navigates to the web app.</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label" for="backgroundColor">Background Color</label>
								<input class="form-control" id="backgroundColor" type="text" name="backgroundColor" value="#1e282d" data-coloris>
								<div class="form-text">Specifies the background color of the splash screen when the web app is launched.</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label" for="display">Display</label>
								<div class="input-group">
									<select id="display" class="form-select" name="display">
										<option value="browser">browser</option>
										<option value="minimal-ui">minimal-ui</option>
										<option value="standalone">standalone</option>
										<option value="fullscreen">fullscreen</option>
									</select>
									<button class="btn btn-primary btn-sm" type="button" data-info><span class="material-icons align-middle">info</span></button>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label" for="customPath">Custom Path</label>
								<input id="customPath" type="text" class="form-control" name="customPath" placeholder="assets/mainfest/">
								<div class="form-text">If you don't want put files into root of the web app.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>Icons</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label" for="iconFile">Logo</label>
								<input class="form-control" type="file" id="iconFile" name="logo">
								<div class="form-text">For perfect icons, make sure your logo is in prefectly square resolution. i.e. 512x512 or 1024x1024</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="mb-3 has-imgBg">
								<label class="form-label" for="imgBackgroundColor">Background Color</label>
								<input class="form-control" id="imgBackgroundColor" type="text" name="imgBackgroundColor" value="#1e282d" data-coloris>
								<div class="form-text">This setting only applicable to the transparent images.</div>
							</div>
						</div>
					</div>
					<div class="h6">Sample Preview</div>
					<div class="icon-sample">
						<div class="d-inline-block me-3 mb-3">
							<div class="img">
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAC1JREFUWEft0EERAAAAAUH6lxbDZxU4s815PffjAAECBAgQIECAAAECBAgQIDAaPwAh6O5R/QAAAABJRU5ErkJggg==" data-size="32">
							</div>
							<div class="title">32x32</div>
						</div>
						<div class="d-inline-block me-3 mb-3">
							<div class="img">
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==" data-size="64">
							</div>
							<div class="title">64x64</div>
						</div>
						<div class="d-inline-block me-3 mb-3">
							<div class="img">
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAAAXNSR0IArs4c6QAAA1lJREFUeF7t0gENAAAIwzDu3zQ+luLgozunQKjAQltMUeCAhiBVAOjUO40BmoFUAaBT7zQGaAZSBYBOvdMYoBlIFQA69U5jgGYgVQDo1DuNAZqBVAGgU+80BmgGUgWATr3TGKAZSBUAOvVOY4BmIFUA6NQ7jQGagVQBoFPvNAZoBlIFgE690xigGUgVADr1TmOAZiBVAOjUO40BmoFUAaBT7zQGaAZSBYBOvdMYoBlIFQA69U5jgGYgVQDo1DuNAZqBVAGgU+80BmgGUgWATr3TGKAZSBUAOvVOY4BmIFUA6NQ7jQGagVQBoFPvNAZoBlIFgE690xigGUgVADr1TmOAZiBVAOjUO40BmoFUAaBT7zQGaAZSBYBOvdMYoBlIFQA69U5jgGYgVQDo1DuNAZqBVAGgU+80BmgGUgWATr3TGKAZSBUAOvVOY4BmIFUA6NQ7jQGagVQBoFPvNAZoBlIFgE690xigGUgVADr1TmOAZiBVAOjUO40BmoFUAaBT7zQGaAZSBYBOvdMYoBlIFQA69U5jgGYgVQDo1DuNAZqBVAGgU+80BmgGUgWATr3TGKAZSBUAOvVOY4BmIFUA6NQ7jQGagVQBoFPvNAZoBlIFgE690xigGUgVADr1TmOAZiBVAOjUO40BmoFUAaBT7zQGaAZSBYBOvdMYoBlIFQA69U5jgGYgVQDo1DuNAZqBVAGgU+80BmgGUgWATr3TGKAZSBUAOvVOY4BmIFUA6NQ7jQGagVQBoFPvNAZoBlIFgE690xigGUgVADr1TmOAZiBVAOjUO40BmoFUAaBT7zQGaAZSBYBOvdMYoBlIFQA69U5jgGYgVQDo1DuNAZqBVAGgU+80BmgGUgWATr3TGKAZSBUAOvVOY4BmIFUA6NQ7jQGagVQBoFPvNAZoBlIFgE690xigGUgVADr1TmOAZiBVAOjUO40BmoFUAaBT7zQGaAZSBYBOvdMYoBlIFQA69U5jgGYgVQDo1DuNAZqBVAGgU+80BmgGUgWATr3TGKAZSBUAOvVOY4BmIFUA6NQ7jQGagVQBoFPvNAZoBlIFgE690xigGUgVADr1TmOAZiBVAOjUO40BmoFUAaBT7zQGaAZSBYBOvdMYoBlIFQA69U5jgGYgVQDo1DuNeTzRALUFDh1xAAAAAElFTkSuQmCC" data-size="180">
							</div>
							<div class="title">180x180</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="card mt-3">
		<div class="card-header d-flex justify-content-between align-items-center">
			<span>HTML Code</span>
			<span class="material-icons" data-copy="html-code" title="Click to Clipboard">content_copy</span>
		</div>
		<div class="card-body">
			<code class="mb-0"><pre class="mb-0 html-code"></pre></code>
		</div>
		<div class="card-footer">
			<span>This code should be place on <code>head</code> section of the web page.</span>
		</div>
	</div>
	<div class="text-center">
		<div class="mt-3 alert d-inline-block bg-gray">
			<button class="btn btn-primary" data-download><i class="material-icons align-middle">download</i> Generate &amp; Download</button>
		</div>
	</div>
</form>
<script>
function stringToSlug(str = '', sep = '') {
	if (str) {
		sep = sep ? sep : '-';
		str = str.trim();
		str = str.toLowerCase();
		const from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
		const to = "aaaaaaeeeeiiiioooouuuunc------";
		for (let i = 0, l = from.length; i < l; i++) {
			str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
		}
		return str
			.replace(/[^a-z0-9 -]/g, "")
			.replace(/\s+/g, "-")
			.replace(/-+/g, "-")
			.replace(/^-+/, "")
			.replace(/-+$/, "")
			.replace(/-/g, sep);
	}
}
function generateIcons() {
	const inputElement = document.getElementById('iconFile');
	const file = inputElement.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			const img = new Image(), imgSample = document.querySelector('.icon-sample'), imgWrap = document.createElement('div');
			imgWrap.classList.add('canvas-img');
			imgWrap.style.display = 'none';
			imgSample.classList.add('img-loading');
			if(document.querySelectorAll('.canvas-img')) {
				document.querySelectorAll('.canvas-img').forEach((div,index)=>{
					div.remove();
				});
			}
			img.src = e.target.result;
			img.onload = function () {
				const dimensions = [16, 32, 64, 180, 192, 256, 270, 384, 512];
				imgSample.classList.remove('img-loading');
				imgSample.innerHTML = '';
				dimensions.forEach(size => {
					const canvas = document.createElement('canvas');
					const context = canvas.getContext('2d');

					const scale = Math.max(size / img.width, size / img.height);
					let offsetX = (size - img.width * scale) / 2;
					let offsetY = (size - img.height * scale) / 2;

					canvas.width = size;
					canvas.height = size;

					const imageData = context.getImageData(0, 0, img.width * scale, img.height * scale);
					const hasTransparentPixels = imageData.data.some(value => value === 0);

					if (hasTransparentPixels && size!=270) {
						let bgColor = document.querySelector('[name="imgBackgroundColor"]').value || 'lightgray';
						context.fillStyle = bgColor;
						context.fillRect(0, 0, size, size);
					}
					if (size === 270) {
						const centerSize = 125;
						context.clearRect(0, 0, size, size);
						let topSpace = 50;
						let leftSpace = 75;
						let scale = (size - 2 * leftSpace) / img.width;
						let offsetX = (size - img.width * scale) / 2 - leftSpace;
						let offsetY = topSpace;
						context.drawImage(img, 0, 0, img.width, img.height, offsetX + leftSpace, offsetY, img.width * scale, img.height * scale);
					}else {
						context.drawImage(img, 0, 0, img.width, img.height, offsetX, offsetY, img.width * scale, img.height * scale);
					}
					const dataURL = canvas.toDataURL('image/png');
					const resultImg = document.createElement('img');
					resultImg.src = dataURL;
					resultImg.setAttribute('data-size',size);
					//document.body.appendChild(resultImg);
					imgWrap.appendChild(resultImg);
					document.body.appendChild(imgWrap);
					if(size === 32 || size === 64 || size === 180) {
						//imgSample.querySelector('[data-size="'+size+'"]').setAttribute('src',dataURL);
						imgSample.innerHTML += '<div class="d-inline-block me-3 mb-3"><div class="img"><img src="'+dataURL+'" data-size="'+size+'"></div><div class="title">'+size+'x'+size+'</div></div>';
					}
				});
				generateCode();
			};
		};
		reader.readAsDataURL(file);
	}
}
function compressAndDownload(path='') {
	const zip = new JSZip();
	const images = document.querySelectorAll('.canvas-img img');
	if(!path || path == '') {
		const path = '/';
	}else{
		let lastChar = path.substr(-1);
		if (lastChar != '/') {
			path = path + '/';
		}
	}
	const mainfestData = validationData(images);
	if(!mainfestData){
		return false;
	}
	let mainfestIcon = '';
	images.forEach((image, index) => {
		let name = '';
		const dataURL = image.src;
		const base64Data = dataURL.split(',')[1];
		const dataSize = image.getAttribute('data-size');
		const dataBy = dataSize+'x'+dataSize;
		switch(dataSize) {
			case '16':
			case '32':
			case '64':
				name = 'favion-'+dataBy;
			break;
			case '180':
				name = 'apple-touch-icon';
			break;
			case '192':
				name = 'android-chrome-'+dataBy;
			break;
			case '256':
				name = 'icon-'+dataBy;
			break;
			case '270':
				name = 'mstile-150x150';
			break;
			case '384':
				name = 'icon-'+dataBy;
			break;
			case '512':
				name = 'android-chrome-'+dataBy;
				//zip.file(path+`icon.png`, base64Data, { base64: true });
			break;
		}
		switch(dataSize) {
			case '16':
			case '32':
			case '64':
			case '180':
			case '192':
			case '256':
			case '384':
			case '512':
				mainfestIcon = mainfestIcon+'\t{\n\t\t\t"src": "'+path+name+'.png",\n\t\t\t"sizes": "'+dataBy+'",\n\t\t\ttype": "image/png"\n\t\t},\n\t\t';
			break;
		}
		zip.file(path+`${name}.png`, base64Data, { base64: true });
	});
	if(mainfestData) {
		let slug = stringToSlug(mainfestData.shortName);
		let mainfestFile = '{\n\t"name": "'+mainfestData.fullName+'",\n\t'
			+'"short_name": "'+mainfestData.shortName+'",\n\t'
			+'"theme_color": "'+mainfestData.themeColor+'",\n\t'
			+'"background_color": "'+mainfestData.backgroundColor+'",\n\t'
			+'"display": "'+mainfestData.display+'",\n\t'
			+'"icons": \[\n\t'
			+ mainfestIcon.replace(/,\n\t\t$/, '')
			+'\n\t\]\n}';
		zip.file(path+slug+".webmanifest", mainfestFile);
		let browserConfig = '<?xml version="1.0" encoding="utf-8"?>\n<browserconfig>\n\t<msapplication>\n\t\t<tile>\n\t\t\t<square150x150logo src="'+path+'mstile-150x150.png"/>\n\t\t\t<TileColor>'+mainfestData.backgroundColor+'</TileColor>\n\t\t</tile>\n\t</msapplication>\n</browserconfig>\n';
		zip.file(path+"browserconfig.xml", browserConfig);
	}
	zip.generateAsync({ type: 'blob' }).then(function (blob) {
		const a = document.createElement('a');
		a.href = URL.createObjectURL(blob);
		a.download = 'icons.zip';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	});
}
function validationData(images) {
	let img = document.querySelector('[name="logo"]');
	if(img.files.length == 0 || images.length == 0) {
		mk.toastr({head:{text:'Opps!'},body:'Please choose the image!'},'danger');
		return false;
	}
	let fullName = document.querySelector('[name="fullName"]').value, shortName = document.querySelector('[name="shortName"]').value;
	let themeColor = document.querySelector('[name="themeColor"]').value, backgroundColor = document.querySelector('[name="backgroundColor"]').value;
	let display = document.querySelector('[name="display"]').value;
	if(!fullName) {
		mk.toastr({head:{text:'Opps!'},body:'Please enter the app name!'},'danger');
		return false;
	}
	if(!shortName) {
		mk.toastr({head:{text:'Opps!'},body:'Please enter the app short name!'},'danger');
		return false;
	}
	if(!themeColor) {
		mk.toastr({head:{text:'Opps!'},body:'Theme color cannot be empty. Please choose the color!'},'danger');
		return false;
	}
	if(!backgroundColor) {
		mk.toastr({head:{text:'Opps!'},body:'Backgorund color cannot be empty. Please choose the color!'},'danger');
		return false;
	}
	//return true;
	let data = {};
	data.fullName = fullName;
	data.shortName = shortName;
	data.themeColor = themeColor;
	data.backgroundColor = backgroundColor;
	data.display = display;
	return data;
}
function validateFolderPath(folderPath) {
	folderPath = folderPath.trim();
	folderPath = folderPath.replace(/\\/g, '/');
	if (!folderPath.endsWith('/')) {
		folderPath += '/';
	}
	if (folderPath.startsWith('/')) {
		folderPath = folderPath.slice(1);
	}
	folderPath = folderPath.replace(/[^\w\d\/-]/g, '_');
	return folderPath;
}
function generateCode() {
	let htmlCode = document.querySelector('.html-code');
	let customPath = document.querySelector('[name="customPath"]').value;
	if(customPath) {
		customPath = validateFolderPath(customPath);
	}else {
		customPath = '/';
	}
	if (customPath.startsWith('/')) {
		customPath = customPath.slice(1);
	}
	let shortName = document.querySelector('[name="shortName"]').value || 'site';
	let themeColor = document.querySelector('[name="themeColor"]').value;
	let backgroundColor = document.querySelector('[name="backgroundColor"]').value;
	let slug = stringToSlug(shortName);
	let htm = '<link rel="apple-touch-icon" sizes="180x180" href="/'+customPath+'apple-touch-icon.png">\n'
	+ '<link rel="icon" type="image/png" sizes="32x32" href="/'+customPath+'favicon-32x32.png">\n'
	+ '<link rel="icon" type="image/png" sizes="16x16" href="/'+customPath+'favicon-16x16.png">\n'
	+ '<link rel="manifest" href="/'+customPath+slug+'.webmanifest">\n'
	+ '<meta name="msapplication-TileColor" content="'+backgroundColor+'">\n'
	+ '<meta name="theme-color" content="'+themeColor+'">\n'
	+ '<meta name="msapplication-config" content="browserconfig.xml">\n';
	htmlCode.innerHTML = htm.replace(/</g, '&lt;').replace(/>/g, '&gt;'); 
}
document.addEventListener('DOMContentLoaded', function () {
	Coloris.setInstance('[name="themeColor"],[name="backgroundColor"],[name="imgBackgroundColor"]', {
		alpha: false,
	});
	document.addEventListener('coloris:pick', event => {
		if(event.detail.currentEl.closest('.has-imgBg')) {
			let sampleImgs = document.querySelectorAll('.icon-sample img');
			sampleImgs.forEach((img, index) =>{
				img.style.backgroundColor = event.detail.color;
			});
		}
	});
	document.querySelector('#iconFile,[name="imgBackgroundColor"]').addEventListener(('input','change'), function() {
		generateIcons();
	});
	document.querySelector('[data-download]').addEventListener(('click'), function(e) {
		e.preventDefault();
		let customPath = document.querySelector('[name="customPath"]').value;
		if(customPath) {
			customPath = validateFolderPath(customPath);
		}else {
			customPath = '';
		}
		compressAndDownload(customPath);
	});
	document.querySelector('[data-info]').addEventListener('click', function(e) {
		e.preventDefault();
		let info = '<p>The <code>display</code> property allows developers to tailor the user experience based on the desired presentation mode. It\'s important to choose the appropriate mode depending on the nature of the web app and the experience you want to provide to users. For example, a content-focused application might use "<code>standalone</code>" or "<code>minimal-ui</code>", while a game might opt for "<code>fullscreen</code>".</p>'
		+'<h5>fullscreen</h5><p>The web app will be displayed in full-screen mode, hiding browser UI elements such as the address bar.</p><p>Useful for immersive experiences, such as games or applications where the entire screen is utilized.</p>'
		+'<h5>standalone</h5><p>The web app will open in a standalone window, without the browser UI (like the address bar and navigation controls).</p><p>The app will have its own separate window, making it feel more like a native application.</p>'
		+'<h5>minimal-ui</h5><p>Similar to <code>standalone</code>, but with a minimal set of UI elements. The address bar and navigation controls are present, but they are minimized.</p><p>Provides a balance between full-screen and standalone modes.</p>'
		+'<h5>browser</h5><p>The web app will open in the browser as a regular web page, with the standard browser UI.</p><p>This is the default mode if the <code>display</code> property is not specified.</p>';
		mk.alert(info);
	});
	document.querySelectorAll('.form-select,.form-control').forEach((inp)=>{
		inp.addEventListener(('input','change'), function() {
			generateCode();
		});
	});
	document.querySelector('[data-copy="html-code"]').addEventListener('click', function() {
		var card = this.closest('.card'), text = card.querySelector('.html-code').textContent;
		if(text) {
			mk.copyToClipboard(text);
		}
	});
});
</script>