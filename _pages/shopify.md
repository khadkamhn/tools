---
layout: default
title: "Shopify"
permalink: /shopify/
scripts: ["/assets/js/sortable.min.js","/assets/js/popper.min.js","/assets/js/tippy-bundle.umd.min.js"]
---

<form class="form" method="post">
	<div class="row">
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>Section</span>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label" for="name">Name</label>
								<input id="name" type="text" class="form-control" name="name" placeholder="Section name" maxlength="25">
								<div class="form-text">Specifies the name of the section.</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label" for="preset">Preset</label>
								<input id="preset" type="text" class="form-control" name="preset" placeholder="Section label" maxlength="100">
								<div class="form-text">Specifies the label appear on the customizer.</div>
							</div>
						</div>
					</div>
					<div class="mb-3">
						<button class="btn btn-primary btn-sm" type="button" data-add="field" data-where="section">Add Setting Field</button>
					</div>
					<div class="settings">
						<div class="item">
							<div class="item-head">
								<div><i class="material-icons">swap_vert</i> <span class="item-name">Padding Top</span></div>
								<div class="item-action"><i class="material-icons">delete</i></div>
							</div>
							<div class="item-body">
								<div class="row">
									<div class="col-md-6 col-lg-4">
										<div class="mb-2">
											<label class="form-label" for="random_hash">Identifier</label>
											<input id="random_hash" type="text" class="form-control form-control-sm" name="identifier" placeholder="Identifier" maxlength="100">
											<div class="form-text">Specifies id of the field</div>
										</div>
									</div>
									<div class="col-md-6 col-lg-4">
										<div class="mb-2">
											<label class="form-label" for="random_hash">Label</label>
											<input id="random_hash" type="text" class="form-control form-control-sm" name="label" placeholder="Label" maxlength="50">
											<div class="form-text">Specifies label of the field</div>
										</div>
									</div>
									<div class="col-md-6 col-lg-4">
										<div class="mb-2">
											<label class="form-label" for="random_hash_2">Type</label>
											<select id="random_hash_2" class="form-select form-select-sm" name="type">
												<option value="checkbox">Checkbox</option>
												<option value="number">Number</option>
												<option value="radio">Radio</option>
												<option value="range">Range</option>
												<option value="select">Select</option>
												<option value="text">Text</option>
												<option value="textarea">Textarea</option>
												<option value="article">Article</option>
												<option value="blog">Blog</option>
												<option value="collection">Collection</option>
												<option value="collection_list">Collection List</option>
												<option value="color">Color</option>
												<option value="color_background">Color Background</option>
												<option value="color_scheme_group">Color Scheme Group</option>
												<option value="font_picker">Font Picker</option>
												<option value="html">HTML</option>
												<option value="image_picker">Image Picker</option>
												<option value="inline_richtext">Inline Richtext</option>
												<option value="link_list">Link List</option>
												<option value="liquid">Liquid</option>
												<option value="page">Page</option>
												<option value="product">Product</option>
												<option value="product_list">Product List</option>
												<option value="richtext">Richtext</option>
												<option value="text_alignment">Text Alignment</option>
												<option value="url">URL</option>
												<option value="video">Video</option>
												<option value="video_url">Video URL</option>
											</select>
											<div class="form-text">Specifies type of the field</div>
										</div>
									</div>
									<div class="col-md-6 col-lg-4">
										<div class="mb-2">
											<label class="form-label" for="random_hash">Default</label>
											<input id="random_hash" type="text" class="form-control form-control-sm" name="label" placeholder="Default">
											<div class="form-text">Default value of the field</div>
										</div>
									</div>
									<div class="col-md-6 col-lg-8">
										<div class="mb-2">
											<label class="form-label" for="random_hash">Values</label>
											<div data-tags-editor data-tags-placeholder="Enter or comma separate values..."></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="item p-3"><span class="material-icons">open_with</span> B</div>
						<div class="item p-3"><span class="material-icons">open_with</span> C</div>
						<div class="item p-3"><span class="material-icons">open_with</span> D</div>
					</div>
					<hr>
					<button class="btn btn-primary btn-sm" type="button" data-add="block">Add Block</button>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>Liquid</span>
					<span class="material-icons" data-downlaod="liquid" title="Click to Download">download</span>
				</div>
				<div class="card-body p-0">
					<textarea class="json-formatted form-control border-0 font-monospace" spellcheck="false" readonly></textarea>
				</div>
			</div>
		</div>
	</div>
</form>

<script>
const fieldTypes = {
	'checkbox': 'Checkbox',
	'number': 'Number',
	'radio': 'Radio',
	'range': 'Range',
	'select': 'Select',
	'text': 'Text',
	'textarea': 'Textarea',
	'article': 'Article',
	'blog': 'Blog',
	'collection': 'Collection',
	'collection_list': 'Collection List',
	'color': 'Color',
	'color_background': 'Color Background',
	'color_scheme_group': 'Color Scheme Group',
	'font_picker': 'Font Picker',
	'html': 'HTML',
	'image_picker': 'Image Picker',
	'inline_richtext': 'Inline Richtext',
	'link_list': 'Link List',
	'liquid': 'Liquid',
	'page': 'Page',
	'product': 'Product',
	'product_list': 'Product List',
	'richtext': 'Richtext',
	'text_alignment': 'Text Alignment',
	'url': 'URL',
	'video': 'Video',
	'video_url': 'Video URL'
};
function stringToSlug(str = '', sep = '_') {
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
function serializeFormArray(formElement) {
	var formData = new FormData(formElement);
	var serializedArray = [];
	formData.forEach(function(value, key) {
		serializedArray.push({ name: key, value: value });
	});
	return serializedArray;
}
function getField(type, which) {
	let htm = '';
	if(!type && !which) {
		return false;
	}
	if(type=='option') {
		htm += '<div class="input-group input-group-sm mb-2">'
		+'<span class="input-group-text">Option</span>'
		+'<input type="text" class="form-control" name="option-label" placeholder="Label" title="Label">'
		+'<input type="text" class="form-control" name="option-value" placeholder="Value" title="Value">'
		+'<button class="btn btn-outline-danger" type="button" data-delete="option"><i class="material-icons">delete</i></button>'
		+'</div>';
		return htm;
	}
		htm +='<div class="item" data-type="'+type+'" data-which="'+which+'">'
		+'<div class="item-head">'
		+'<div><i class="material-icons">swap_vert</i> <span class="item-name">'+fieldTypes[type]+'</span></div><div class="item-action"><i class="material-icons" data-delete="item">delete</i></div>'
		+'</div>'
		+'<div class="item-body"><div class="row">'

		+'<div class="col-md-6 col-lg-4"><div class="mb-2">'
		+'<label class="form-label"">Label</label>'
		+'<input type="text" class="form-control form-control-sm" name="label" placeholder="Label" maxlength="50">'
		+'<div class="form-text">Specifies label of the field</div>'
		+'</div></div>'

		+'<div class="col-md-6 col-lg-4"><div class="mb-2">'
		+'<label class="form-label">Identifier</label>'
		+'<input type="text" class="form-control form-control-sm" name="identifier" placeholder="Identifier" maxlength="100">'
		+'<div class="form-text">Specifies id of the field</div>'
		+'</div></div>'

	if(type=='checkbox') {
		htm += '<div class="col-md-6 col-lg-4"><div class="mb-2">'
		+'<label class="form-label">Default</label>'
		+'<select class="form-select form-select-sm" name="default"><option></option><option value="true">true</option><option value="false">false</option></select>'
		+'<div class="form-text">Specifies default value of the field</div>'
		+'</div></div>'
	}

	if(type=='radio' || type=='select') {
		htm += '<div class="col-md-6 col-lg-4"><div class="mb-2">'
		+'<label class="form-label">Default</label>'
		+'<select class="form-select form-select-sm" name="default"><option></option></select>'
		+'<div class="form-text">Specifies default value of the field</div>'
		+'</div></div>'

		+'<div class="col-md-12 col-lg-12"><button class="btn btn-primary btn-sm" type="button" data-add="option">Add Option</button><div class="mt-2 mb-2">'
		+'<div class="field-options"></div>'
		+'<div class="form-text">Specifies option of the field</div>'
		+'</div></div>'
	}

		+'</div></div>'
		+'</div>';
	return htm;
}
document.addEventListener('DOMContentLoaded', function () {
	window.onload = function() {
		mk.alert('<h6>Under construction!!</h6><em class="small">This page is still under developing. Please visit later...</em>');
	}
	const makeSortable = function() {
		document.querySelectorAll('.settings').forEach((item) => {
			new Sortable(item, {
				animation: 120,
				ghostClass: 'ghost',
				handle: '.item-head',
			});
		});
		document.querySelectorAll('.field-options').forEach((item) => {
			new Sortable(item, {
				animation: 120,
				ghostClass: 'ghost',
				handle: '.input-group-text',
			});
		});
	};
	makeSortable();
	const initTippy = function() {
		document.querySelectorAll('.form [title]').forEach((title) => {
			let text = title.getAttribute('title');
			tippy(title, {
				arrow: false,
				content: text,
				theme: 'material',
			});
		});
	}
	initTippy();
	document.querySelectorAll('[data-add="field"]').forEach((btn) => {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			let select = '<div><label class="form-label" for="field_type">Choose Field Type</label><select id="field_type" class="form-select form-select-sm" name="field_type">';
			Object.keys(fieldTypes).forEach(function(key) {
				select += '<option value="'+key+'" title="'+fieldTypes[key]+'">'+fieldTypes[key]+'</option>';
			});
			select += '</select></div>';
			mk.confirm(select,function() {
				let which = btn.getAttribute('data-which');
				let field = document.querySelector('[name="field_type"]').value;
				let htm = getField(field,which);
				if(htm) {
					document.querySelector('.settings').insertAdjacentHTML('beforeend', htm);
					makeSortable();
				}
			});
		});
	});
	document.querySelectorAll('.settings').forEach((settings) => {
		settings.addEventListener('click', function(e) {
			if(e.target.closest('.item-action') && e.target.getAttribute('data-delete')=='item') {
				e.preventDefault();
				mk.confirm('<h6>Are you sure want to delete?</h6><em class="small">Once you remove this, you won\'t able to recover.</em>',function() {
					e.target.closest('.item').remove();
				});
			}
			if(e.target.getAttribute('data-add')=='option') {
				let htm = getField('option');
				e.target.closest('.item').querySelector('.field-options').insertAdjacentHTML('beforeend', htm); 
			}
			if((e.target.closest('.input-group') && e.target.getAttribute('data-delete')=='option') || (e.target.closest('.btn') && e.target.closest('.btn').getAttribute('data-delete')=='option')) {
				e.preventDefault();
				mk.confirm('<h6>Are you sure want to delete?</h6><em class="small">Once you remove this, you won\'t able to recover.</em>',function() {
					e.target.closest('.input-group').remove();
				});
			}
		});
		settings.addEventListener('input', function(e) {
			if(e.target.classList.contains('form-control')) {
				let name = e.target.getAttribute('name'), value = e.target.value, wrap = e.target.closest('.item');
				if(value) {
					switch(name) {
						case'label':
							wrap.querySelector('[name="identifier"]').value = stringToSlug(value);
						break;
						case'option-label':
						case'option-value':
							let optWrp = e.target.closest('.field-options');
							if(optWrp) {
								let opt = '';
								optWrp.querySelectorAll('.input-group [name="option-value"]').forEach((input) => {
									if(input.value) {
										opt += '<option value="+input.value+">'+input.value+'</option>';
									}
								});
								wrap.querySelector('[name="default"]').innerHTML = opt;
								initTippy();
							}
						break;
					}
				}
			}
		});
	});
});
</script>