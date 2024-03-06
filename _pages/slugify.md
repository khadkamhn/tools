---
layout: default
title: "Slugify"
permalink: /slugify/
---

<div class="mt-3">
	<div class="row justify-content-center">
		<div class="col-md-6">
			<div class="mb-3">
				<label class="form-label" for="text">Text</label>
				<input id="text" type="text" class="form-control input-text" placeholder="Enter a sentence line here">
			</div>
		</div>
		<div class="col-md-2">
			<div class="mb-3">
				<label class="form-label" for="separator">Separator</label>
				<select id="separator" class="form-select input-split">
					<option value="-">-</option>
					<option value="--">--</option>
					<option value="_">_</option>
					<option value="__">__</option>
				</select>
			</div>
		</div>
	</div>
	<div class="row justify-content-center mb-3">
		<div class="col-md-3">
			<div class="form-check form-switch">
				<input class="form-check-input" type="checkbox" id="onPasteCopy" name="onPasteCopy">
				<label class="form-check-label mt-1" for="onPasteCopy">Copy clibboard on <code>paste</code> or <code>input</code> the text.</label>
			</div>
		</div>
	</div>
	<div class="row justify-content-center">
		<div class="col-md-3">
			<button class="btn w-100 btn-primary" type="button" data-action="slugify">Slugify</button>
		</div>
	</div>
	<div class="text-center">
		<div class="mt-4 alert alert-slug d-inline-block bg-white d-none"><code class="slug-text font-monospace"></code><span class="char-count text-white" title="Slug length"></span></div>
	</div>
</div>
<script>
function strToSlug(str = '', sep = '') {
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
document.addEventListener('DOMContentLoaded', function () {
	var inputText = document.querySelector('.input-text');
	var inputSplit = document.querySelector('.input-split');
	var slugifyButton = document.querySelector('[data-action="slugify"]');
	var input = document.querySelector('.input');

	inputText.addEventListener('focus', function () {
		inputText.select();
	});

	slugifyButton.addEventListener('click', function () {
		var val = inputText.value;
		var split = inputSplit.value;
		var slug = strToSlug(val, split);

		if (val) {
			mk.copyToClipboard(slug,function(success) {
				if(success) {
					let slugText = document.querySelector('.slug-text'), slugCount = document.querySelector('.char-count');
					slugText.closest('.alert').classList.remove('d-none');
					slugText.textContent = slug;
					slugCount.classList.remove('bg-warning','bg-success','bg-danger');
					let bgClass = 'bg-success';
					if(slug.length <= 5) {
						bgClass = 'bg-warning';
					}else if(slug.length > 20) {
						bgClass = 'bg-danger';
					}
					slugCount.textContent = slug.length;
					slugCount.classList.add(bgClass);
				}
			},function(error){
				if(error) {
					mk.toastr({head:{text:'Error'},body:'Unable to copy text to clipboard!'},'danger');
				}
			});
		} else {
			mk.toastr({head:{text:'Error'},body:'Enter a text that you want to make a slug!'},'danger');
		}
	});

	var onPasteCopy = document.querySelector('[name="onPasteCopy"]');
	window.onload = function() {
		var isOnPasteCopy = mk.store.get('on_paste_copy');
		onPasteCopy.checked = isOnPasteCopy=='yes'?true:false;
	}
	onPasteCopy.addEventListener('change', function () {
		mk.store.set('on_paste_copy',this.checked?'yes':'no');
	});
	inputText.addEventListener('input', function () {
		if(onPasteCopy.checked) {
			slugifyButton.click();
		}
	});
});
</script>