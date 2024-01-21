---
layout: default
title: "Slugify"
permalink: /slugify/
---

<div class="row g-3 justify-content-center">
	<div class="col-md-8">
		<input type="text" class="form-control input-text" placeholder="Enter a sentence line here">
	</div>
	<div class="col-md-3">
		<input type="text" class="form-control input-split" placeholder="Default separator is -">
	</div>
	<div class="col-md-3">
		<button class="btn w-100 btn-primary" type="button" data-action="slugify">Slugify</button>
	</div>
</div>
<div class="text-center">
	<div class="mt-3 alert d-inline-block text-bg-info text-white">You can generate and copy the slug by clicking the above button.</div>
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
					mk.alert('<p>The slug <code>'+slug+'</code> has been copied to the clipboard!</p>');
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
});
</script>