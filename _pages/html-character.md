---
layout: default
title: "HTML Character"
permalink: /html-character/
inline_styles:
  - ".result-wrap {
	position: relative;
	padding-right: 40px;
  }
  .result-wrap .result {
	padding-right: 40px;
	word-break: break-all;
  }
  .result-wrap .material-icons {
	top: 15px;
	right: 15px;
	position: absolute;
  }"
---

<form action="#" method="post">
	<div class="mb-3">
		<div class="form-label">Enter some sepcial character to convert. <a onclick="sampleText()" href="javascript:void(0)">Sample text</a></div>
		<textarea class="form-control" rows="8" name="input"></textarea>
	</div>
	<div class="mb-3">
		<div class="form-label">HTML encoded text</div>
		<div class="result-wrap bg-white p-3">
			<div class="result"></div>
			<span class="material-icons" data-copy>content_copy</span>
		</div>
	</div>
</form>
<script>
function convertSpecialCharacter(text=null) {
	let str = '';
	if(!text) {
		text = document.querySelector('[name="input"]').value;
	}
	for(i=0; i<text.length; i++) {
		if(text.charCodeAt(i)>127){ str += '&#' + text.charCodeAt(i) + ';'; }else{ str += text.charAt(i); }
	}
	document.querySelector('.result').textContent = str;
}
function sampleText() {
	document.querySelector('[name="input"]').value = "Thére Àre sôme spëcial charâcters ïn thìs têxt";
}
document.addEventListener('DOMContentLoaded', function () {
	sampleText();
	convertSpecialCharacter();
	document.querySelector('[name="input"]').addEventListener(('change','input'),function() {
		convertSpecialCharacter();
	});
	document.querySelector('[data-copy]').addEventListener('click',function() {
		let html = document.querySelector('.result').textContent;
		mk.copyToClipboard(html);
	});
});
</script>