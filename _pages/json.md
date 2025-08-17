---
layout: default
title: "JSON Formatter"
permalink: /json-format/
inline_styles:
  - ".json-source, .json-formatted {
	height: 400px;
	resize: none;
	overflow-y: auto;
  }"
---


<form action="#" method="post">
	<div class="row">
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>JSON Source</span>
					<span class="material-symbols-outlined" data-copy="json-source" title="Click to Clipboard">content_copy</span>
				</div>
				<div class="card-body p-0">
					<textarea class="json-source form-control border-0 font-monospace" spellcheck="false"></textarea>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>JSON Formatted</span>
					<span class="material-symbols-outlined" data-copy="json-formated" title="Click to Clipboard">content_copy</span>
				</div>
				<div class="card-body p-0">
					<textarea class="json-formatted form-control border-0 font-monospace" spellcheck="false"></textarea>
				</div>
			</div>
		</div>
	</div>
</form>
<script>
document.addEventListener('DOMContentLoaded', function () {
	var jsonFormat = function() {
		try {
			const jsonInput = document.querySelector('.json-source').value;
			const parsedJSON = JSON.parse(jsonInput);
			const formattedJSON = JSON.stringify(parsedJSON, null, '	');
			document.querySelector('.json-formatted').value = formattedJSON;
		} catch (error) {
			let msg = `${error.message}, at line ${error.lineNumber}`;
			mk.toastr({head:{text:'Invalid JSON'},body: msg},'danger');
		}
	}
	let sampleJson = '{"tools":{"author":"Mohan Khadka","website":"https://mohankhadka.com.np","social":{"https://codepen.io/":"khadkamhn","https://github.com/":"khadkamhn","https://www.facebook.com/":"khadkamhn"}}}';
	document.querySelector('.json-source').value = sampleJson;
	jsonFormat();
	document.querySelector('.json-source').addEventListener(('input','change','keyup'),jsonFormat);
	document.querySelectorAll('[data-copy]').forEach(function(btn) {
		btn.addEventListener('click', function() {
			var card = this.closest('.card'), text = card.querySelector('textarea.form-control').value;
			if(text) {
				mk.copyToClipboard(text);
			}
		});
	});
});
</script>