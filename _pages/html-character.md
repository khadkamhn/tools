---
layout: default
title: "HTML Character"
permalink: /html-character/
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
		<div class="form-label">Enter some sepcial character to convert. <a data-action="sample" href="javascript:void(0)">Sample text</a></div>
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
function convertSpecialCharacter(text=null) {
	let str = '';
	if (!text) {
		text = document.querySelector('[name="input"]').value;
	}
	for (i=0; i<text.length; i++) {
		if(text.charCodeAt(i)>127){ str += '&#' + text.charCodeAt(i) + ';'; }else{ str += text.charAt(i); }
	}
	document.querySelector('.result').textContent = str;
}
document.addEventListener('DOMContentLoaded', () => {
	const inputText = document.querySelector('[name="input"]');
	const defaultText = 'Thére Àre sôme spëcial charâcters ïn thìs têxt';
	inputText.value = defaultText;
	convertSpecialCharacter();
	document.querySelector('[name="input"]').addEventListener(('change','input'), () => {
		convertSpecialCharacter();
	});
	document.querySelector('[data-copy]').addEventListener('click', () => {
		let html = document.querySelector('.result').textContent;
		if (html) {
			mk.copyToClipboard(html);
		} else {
			mk.toastr({head:{text:'Opps!'},body:'There is nothing to copy to the clipboard.'},'danger');
		}
	});
	document.querySelector('[data-action="sample"]').addEventListener('click', () => {
		inputText.value = defaultText;
		convertSpecialCharacter();
	});
});
</script>