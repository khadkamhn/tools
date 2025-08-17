---
layout: default
title: "HTML Alphabet"
permalink: /html-alphabet/
inline_styles:
  - ".result-wrap {
	min-height: 52px;
	position: relative;
	padding-right: 40px;
  }
  .result-wrap .result {
	padding-right: 40px;
	word-break: break-all;
  }
  .result-wrap [data-copy] {
	top: 15px;
	right: 15px;
	position: absolute;
  }"
---

<form action="#" method="post">
	<div class="mb-3">
		<div class="form-label">Enter some normal plain text to convert into HTML entities.</div>
		<textarea class="form-control" rows="8" name="input"></textarea>
	</div>
	<div class="mb-3">
		<div class="form-label">HTML encoded text</div>
		<div class="result-wrap bg-body border p-3">
			<div class="result"></div>
			<span class="material-symbols-outlined" title="Copy to Clipboard" data-copy>content_copy</span>
		</div>
	</div>
</form>
<script>
function convertToHtmlEntities(text=null) {
	let str = '';
	if(!text) {
		text = document.querySelector('[name="input"]').value;
	}
	for (var i = 0; i < text.length; i++) {
		str += "&#" + text.charCodeAt(i) + ";";
	}
	document.querySelector('.result').textContent = str;
}
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('[name="input"]').value = "Hello World";
	convertToHtmlEntities();
	document.querySelector('[name="input"]').addEventListener(('change','input'),function() {
		convertToHtmlEntities();
	});
	document.querySelector('[data-copy]').addEventListener('click',function() {
		let html = document.querySelector('.result').textContent;
		if (html) {
			mk.copyToClipboard(html);
		} else {
			mk.toastr({head:{text:'Opps!'},body:'There is nothing to copy to the clipboard.'},'danger');
		}
	});
});
</script>