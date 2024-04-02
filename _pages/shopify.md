---
layout: default
title: "Shopify"
permalink: /shopify/
scripts: ["/assets/js/sortable.min.js","/assets/js/popper.min.js","/assets/js/tippy-bundle.umd.min.js"]
---

<form class="form" method="post">
	<div class="row">
		<div class="col-md-6">
			<div class="card mt-3 card-section">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>Section</span>
					<span>
						<span class="material-icons" title="Predefined Sets">apps</span>
					</span>
				</div>
				<div class="card-body">
					<div class="row section-wrap">
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label" for="name">Name</label>
								<input id="name" type="text" class="form-control form-control-sm" name="name" placeholder="Section name" maxlength="25">
								<div class="form-text">Specifies name of the section.</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label" for="preset">Preset</label>
								<input id="preset" type="text" class="form-control form-control-sm" name="preset" placeholder="Preset label" maxlength="100">
								<div class="form-text">Specifies the label appear on the customizer.</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="mb-3">
								<label class="form-label" for="tag">Tag</label>
								<select id="tag" class="form-select form-select-sm" name="tag">
									<option value="article">&#60;article></option>
									<option value="aside">&#60;aside></option>
									<option value="div">&#60;div></option>
									<option value="footer">&#60;footer></option>
									<option value="header">&#60;header></option>
									<option value="section" selected>&#60;section></option>
								</select>
								<div class="form-text">Specifies html tag of the section.</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="mb-3">
								<label class="form-label" for="class">Class</label>
								<input id="class" type="text" class="form-control form-control-sm" name="class" placeholder="Section class" maxlength="25">
								<div class="form-text">Specifies class of the section.</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="mb-3">
								<label class="form-label" for="limit">Limit</label>
								<input id="limit" type="number" class="form-control form-control-sm" name="limit" placeholder="Section limit" min="1" max="25" maxlength="2">
								<div class="form-text">Specifies class of the section.</div>
							</div>
						</div>
					</div>
					<div class="settings settings-section"></div>
					<div class="mb-3">
						<button class="btn btn-primary btn-sm" type="button" data-add="field" data-which="section">Add Field</button>
						<button class="btn btn-secondary btn-sm" type="button" data-add="header" data-which="section">Add Header</button>
					</div>
					<hr>
					<div class="block-wrap"></div>
					<button class="btn btn-primary btn-sm" type="button" data-add="block" data-which="block">Add Block</button>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>Liquid</span>
					<span>
						<span class="material-icons me-3" data-copy="json" title="Copy to clipboard">content_copy</span>
						<span class="material-icons" data-action="download" title="Click to Download">download</span>
					</span>
				</div>
				<div class="card-body p-0">
					<textarea class="json-formatted form-control border-0 font-monospace" spellcheck="false" readonly></textarea>
				</div>
				<div class="card-footer">
					<div class="d-flex align-items-center">
						<label class="form-check-label me-2" for="indent">Space</label>
						<div class="form-check form-switch m-0"><input class="form-check-input" type="checkbox" id="indent" name="indent"></div>
						<label class="form-check-label" for="indent">Tab</label>
					</div>
				</div>
			</div>
		</div>
	</div>
</form>

<script>
Node.prototype.addEventListeners = function(eventNames, eventFunction){
	for (eventName of eventNames.split(' ')) this.addEventListener(eventName, eventFunction);
}
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
	//'color_scheme_group': 'Color Scheme Group',
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
	if(type=='block') {
		htm += '<div class="card mb-2 active">'
		+'<div class="card-header d-flex justify-content-between align-items-center"><div class="name">Block <span class="card-label ms-1"></span></div><div class="item-action"><i class="material-icons me-2" data-collapse="card" title="Expand/Collapse">expand_less</i><i class="material-icons" data-delete="item" title="Delete">delete</i></div></div>'
		+'<div class="card-body">'
		+'<div class="row">'
		+'<div class="col-md-6 col-lg-4"><div class="mb-2">'
		+'<label class="form-label">Name</label>'
		+'<input type="text" class="form-control form-control-sm" name="block-name" placeholder="Name" title="Name">'
		+'<div class="form-text">Specifies name of the block</div>'
		+'</div></div>'
		+'<div class="col-md-6 col-lg-4"><div class="mb-2">'
		+'<label class="form-label">Type</label>'
		+'<input type="text" class="form-control form-control-sm" name="block-type" placeholder="Type" title="Type">'
		+'<div class="form-text">Specifies type of the block</div>'
		+'</div></div>'
		+'<div class="col-md-6 col-lg-4"><div class="mb-2">'
		+'<label class="form-label">Limit</label>'
		+'<input type="number" class="form-control form-control-sm" name="block-limit" placeholder="Limit" title="Limit" min="1" max="16">'
		+'<div class="form-text">Specifies limit of the block</div>'
		+'</div></div>'
		+'</div>'
		+'<div class="settings settings-block"></div>'
		+'<div class="mt-0"><button class="btn btn-primary btn-sm" type="button" data-add="field" data-which="block">Add Field</button> <button class="btn btn-secondary btn-sm" type="button" data-add="header" data-which="block">Add Header</button></div>'
		+'</div>'
		+'</div>';
		return htm;
	}
	if(type=='header') {
		htm +='<div class="item mb-2 active" data-type="'+type+'" data-which="'+which+'">'
		+'<div class="item-head d-flex justify-content-between align-items-center">'
		+'<div><span class="item-name">Header</span><span class="item-label ms-1"></span></div><div class="item-action"><i class="material-icons me-2" data-collapse="item" title="Expand/Collapse">expand_less</i><i class="material-icons" data-delete="item" title="Delete">delete</i></div>'
		+'</div>'
		+'<div class="item-body"><div class="row">'

		+'<div class="col-md-6 col-lg-3"><div class="mb-2">'
		+'<label class="form-label">Type</label>'
		+'<select class="form-select form-select-sm" name="type"><option value="header">&#60;header></option><option value="paragraph">&#60;paragraph></option></select>'
		+'<div class="form-text">Specifies type of header settings</div>'
		+'</div></div>'

		+'<div class="col-md-6 col-lg-9"><div class="mb-2">'
		+'<label class="form-label">Content</label>'
		+'<input type="text" class="form-control form-control-sm" name="content" placeholder="Content" maxlength="50">'
		+'<div class="form-text">Specifies group heading of the settings</div>'
		+'</div></div>'

		htm += '</div></div>';
		return htm;
	}

	htm +='<div class="item mb-2 active" data-type="'+type+'" data-which="'+which+'">'
	+'<div class="item-head d-flex justify-content-between align-items-center">'
	+'<div><span class="item-name">'+fieldTypes[type]+'</span><span class="item-label ms-1"></span></div><div class="item-action"><i class="material-icons me-2" data-collapse="item" title="Expand/Collapse">expand_less</i><i class="material-icons" data-delete="item" title="Delete">delete</i></div>'
	+'</div>'
	+'<div class="item-body"><div class="row">'

	+'<div class="col-md-6 col-lg-4"><div class="mb-2">'
	+'<label class="form-label">Label</label>'
	+'<input type="text" class="form-control form-control-sm" name="label" placeholder="Label" maxlength="50">'
	+'<div class="form-text">Specifies label of the field</div>'
	+'</div></div>'

	+'<div class="col-md-6 col-lg-4"><div class="mb-2">'
	+'<label class="form-label">Identifier</label>'
	+'<input type="text" class="form-control form-control-sm" name="identifier" placeholder="Identifier" maxlength="100">'
	+'<div class="form-text">Specifies id of the field</div>'
	+'</div></div>'

	if(type=='checkbox' || type=='number' || type=='range' || type=='text' || type=='textarea' || type=='color' || type=='color_background' || type=='font_picker' || type=='html' || type=='inline_richtext' || type=='liquid' || type=='richtext' || type=='text_alignment' || type=='video_url') {
		if(type=='textarea' || type=='html' || type=='inline_richtext' || type=='liquid' || type=='richtext') {
			htm += '<div class="col-md-12 col-lg-12">'
		}else {
			htm += '<div class="col-md-6 col-lg-4">'
		}
		if(type=='video_url') {
			htm += '<div class="mb-2"><label class="form-label">Accept</label>'
		}else {
			htm += '<div class="mb-2"><label class="form-label">Default</label>'
		}
		if(type=='checkbox') {
			htm += '<select class="form-select form-select-sm" name="default"><option value="true">true</option><option value="false">false</option></select>'
		}
		if(type=='number' || type=='range') {
			htm += '<input type="number" class="form-control form-control-sm" name="default" placeholder="Value">'
		}
		if(type=='text' || type=='color' || type=='color_background' || type=='font_picker') {
			htm += '<input type="text" class="form-control form-control-sm" name="default" placeholder="Value">'
		}
		if(type=='textarea' || type=='html' || type=='inline_richtext' || type=='liquid' || type=='richtext') {
			htm += '<textarea class="form-control form-control-sm" name="default" placeholder="Value"></textarea>'
		}
		if(type=='text_alignment') {
			htm += '<select class="form-select form-select-sm" name="default"><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option></select>'
		}
		if(type=='video_url') {
			htm += '<select class="form-select form-select-sm" name="accept"><option></option><option value="youtube">YouTube</option><option value="vimeo">Vimeo</option><option value="youtube+vimeo">YouTube & Vimeo</option></select>'
		}
		if(type=='video_url') {
			htm += '<div class="form-text">Specifies accepts either youtube or vimeo</div>'
		}else {
			htm += '<div class="form-text">Specifies default value of the field</div>'
		}
		
		htm += '</div></div>'
	}

	if(type=='product_list' || type=='collection_list') {
		htm += '<div class="col-md-6 col-lg-4"><div class="mb-2">'
		+'<label class="form-label">Limit</label>'
		+'<input type="number" class="form-control form-control-sm" name="limit" placeholder="Limit" maxlength="50">'
		+'<div class="form-text">Specifies limit of the field</div>'
		+'</div></div>'
	}

	if(type=='radio' || type=='select') {
		htm += '<div class="col-md-6 col-lg-4"><div class="mb-2">'
		+'<label class="form-label">Default</label>'
		+'<select class="form-select form-select-sm" name="default"></select>'
		+'<div class="form-text">Specifies default value of the field</div>'
		+'</div></div>'

		+'<div class="col-md-12 col-lg-12"><button class="btn btn-primary btn-sm" type="button" data-add="option">Add Option</button><div class="mt-2 mb-2">'
		+'<div class="field-options"></div>'
		+'<div class="form-text">Specifies option of the field</div>'
		+'</div></div>'
	}

	if(type=='range') {
		htm += '<div class="col-md-6 col-lg-3"><div class="mb-2">'
		+'<label class="form-label">Min</label>'
		+'<input type="number" class="form-control form-control-sm" name="min" placeholder="Min" maxlength="9999">'
		+'<div class="form-text">Specifies minimum value</div>'
		+'</div></div>'

		+'<div class="col-md-6 col-lg-3"><div class="mb-2">'
		+'<label class="form-label">Max</label>'
		+'<input type="number" class="form-control form-control-sm" name="max" placeholder="Max" maxlength="9999">'
		+'<div class="form-text">Specifies maximum value</div>'
		+'</div></div>'

		+'<div class="col-md-6 col-lg-3"><div class="mb-2">'
		+'<label class="form-label">Step</label>'
		+'<input type="number" class="form-control form-control-sm" name="step" placeholder="Step" maxlength="84">'
		+'<div class="form-text">Specifies maximum value</div>'
		+'</div></div>'

		+'<div class="col-md-6 col-lg-3"><div class="mb-2">'
		+'<label class="form-label">Unit</label>'
		+'<input type="text" class="form-control form-control-sm" name="unit" placeholder="px" maxlength="3">'
		+'<div class="form-text">Specifies unit of value</div>'
		+'</div></div>'
	}

	htm += '<div class="col-md-12 col-lg-12"><div class="mb-0">'
	+'<label class="form-label">Info</label>'
	+'<input type="text" class="form-control form-control-sm" name="info" placeholder="Info text" maxlength="500">'
	+'<div class="form-text">Specifies info text of the field</div>'
	+'</div></div>'

	+'</div></div>'
	+'</div>';
	return htm;
}
function collectData(showInResult=false) {
	let json = {};
	let sec = document.querySelector('.section-wrap'),
		sec_name = sec.querySelector('[name="name"]')?sec.querySelector('[name="name"]').value:'',
		sec_class = sec.querySelector('[name="class"]')?sec.querySelector('[name="class"]').value:'',
		sec_tag = sec.querySelector('[name="tag"]')?sec.querySelector('[name="tag"]').value:'section',
		sec_pre = sec.querySelector('[name="preset"]')?sec.querySelector('[name="preset"]').value:'';
		sec_max = sec.querySelector('[name="limit"]')?sec.querySelector('[name="limit"]').value:'';
	json.name = sec_name;
	json.class = sec_class;
	json.tag = sec_tag;
	if(sec_max) {
		json.limit = parseInt(sec_max);
	}
	json.settings = [];
	document.querySelectorAll('.settings-section .item').forEach((item) => {
		let set_field = {},
			set_type = item.getAttribute('data-type'),
			set_id = item.querySelector('[name="identifier"]')?item.querySelector('[name="identifier"]').value:'',
			set_label = item.querySelector('[name="label"]')?item.querySelector('[name="label"]').value:'',
			set_default = item.querySelector('[name="default"]')?item.querySelector('[name="default"]').value:'',
			set_info = item.querySelector('[name="info"]')?item.querySelector('[name="info"]').value:'';
			set_cont = item.querySelector('[name="content"]')?item.querySelector('[name="content"]').value:'';
			set_cont_type = item.querySelector('[name="type"]')?item.querySelector('[name="type"]').value:'';
			set_opts = item.querySelector('.field-options');
			if(set_type != 'header') {
				set_field.type = set_type;
				set_field.id = set_id;
				set_field.label = set_label;
			}else{
				set_field.type = set_cont_type;
				set_field.content = set_cont;
			}
			if(set_type=='radio' || set_type=='select') {
				if(set_opts) {
					set_field.options = [];
					set_opts.querySelectorAll('.input-group').forEach((item) => {
						let opt_lbl = item.querySelector('[name="option-label"]').value, opt_val = item.querySelector('[name="option-value"]').value;
						if(opt_lbl && opt_val) {
							set_field.options.push({'value':opt_val,'label':opt_lbl});
						}
					});
				}
			}
			if(set_type=='range') {
				let set_min = item.querySelector('[name="min"]').value,
					set_max = item.querySelector('[name="max"]').value,
					set_step = item.querySelector('[name="step"]').value,
					set_unit = item.querySelector('[name="unit"]').value;
				set_field.min = parseFloat(set_min);
				set_field.max = parseFloat(set_max);
				set_field.step = parseFloat(set_step);
				if(set_unit) {
					set_field.unit = set_unit;
				}
			}
			if(set_type=='collection_list' || set_type=='product_list') {
				let set_limit = item.querySelector('[name="limit"]').value;
				if(set_limit) {
					set_field.limit = parseInt(set_limit);
				}
			}
			if(set_default) {
				switch(set_type) {
					case'checkbox':
						set_field.default = set_default=='true'?true:false;
					break;
					case'range':
					case'number':
						set_field.default = parseFloat(set_default);
					break;
					default:
						set_field.default = set_default;
					break;
				}
			}
			if(set_info) {
				set_field.info = set_info;
			}
		json.settings.push(set_field);
	});
	let blockCard = document.querySelectorAll('.block-wrap .card');
	if(blockCard.length) {
		json.blocks = [];
		blockCard.forEach((card) => {
			let set_block = {},
				blk_name = card.querySelector('[name="block-name"]').value,
				blk_type = card.querySelector('[name="block-type"]').value;
				blk_limit = card.querySelector('[name="block-limit"]').value;
			if(blk_name && blk_type) {
				set_block.name = blk_name;
				set_block.type = blk_type;
			}
			set_block.settings = [];
			if(blk_limit) {
				set_block.limit = parseInt(blk_limit);
			}
			card.querySelectorAll('.settings-block .item').forEach((item) => {
				let set_bfield = {},
					set_btype = item.getAttribute('data-type'),
					set_bid = item.querySelector('[name="identifier"]')?item.querySelector('[name="identifier"]').value:'',
					set_blabel = item.querySelector('[name="label"]')?item.querySelector('[name="label"]').value:'',
					set_bdefault = item.querySelector('[name="default"]')?item.querySelector('[name="default"]').value:'',
					set_binfo = item.querySelector('[name="info"]')?item.querySelector('[name="info"]').value:'';
					set_bcont = item.querySelector('[name="content"]')?item.querySelector('[name="content"]').value:'';
					set_bcont_type = item.querySelector('[name="type"]')?item.querySelector('[name="type"]').value:'';
					set_bopts = item.querySelector('.field-options');
					if(set_btype != 'header') {
						set_bfield.type = set_btype;
						set_bfield.id = set_bid;
						set_bfield.label = set_blabel;
					}else{
						set_bfield.type = set_bcont_type;
						set_bfield.content = set_bcont;
					}
					if(set_btype=='radio' || set_btype=='select') {
						if(set_bopts) {
							set_bfield.options = [];
							set_bopts.querySelectorAll('.input-group').forEach((item) => {
								let blk_lbl = item.querySelector('[name="option-label"]').value, blk_val = item.querySelector('[name="option-value"]').value;
								if(blk_lbl && blk_val) {
									set_bfield.options.push({'value':blk_val,'label':blk_lbl});
								}
							});
						}
					}
					if(set_btype=='range') {
						let set_bmin = item.querySelector('[name="min"]').value,
							set_bmax = item.querySelector('[name="max"]').value,
							set_bstep = item.querySelector('[name="step"]').value,
							set_bunit = item.querySelector('[name="unit"]').value;
						set_bfield.min = parseFloat(set_bmin);
						set_bfield.max = parseFloat(set_bmax);
						set_bfield.step = parseFloat(set_bstep);
						if(set_bunit) {
							set_bfield.unit = set_bunit;
						}
					}
					if(set_btype=='collection_list' || set_btype=='product_list') {
						let set_blimit = item.querySelector('[name="limit"]').value;
						if(set_blimit) {
							set_bfield.limit = parseInt(set_blimit);
						}
					}
					if(set_bdefault) {
						switch(set_btype) {
							case'checkbox':
								set_bfield.default = set_bdefault=='true'?true:false;
							break;
							case'range':
							case'number':
								set_bfield.default = parseFloat(set_bdefault);
							break;
							default:
								set_bfield.default = set_bdefault;
							break;
						}
					}
					if(set_binfo) {
						set_bfield.info = set_binfo;
					}
					set_block.settings.push(set_bfield);
			});
			json.blocks.push(set_block);
		});
	}
	json.presets = [{'name':sec_pre}];

	if(showInResult) {
		let resTxt = '', indent = document.querySelector('[name="indent"]').checked;
		if(json.settings) {
			json.settings.forEach((field)=>{
				if(field.type=='text') {
					if(field.id.includes('title')) {
						resTxt += '<div class="title">{\{ section.settings.'+field.id+' }\}</div>\n';
					}else if(field.id.includes('heading')) {
						resTxt += '<div class="heading">{\{ section.settings.'+field.id+' }\}</div>\n';
					}
				}
			});
		}
		if(json.blocks) {
			resTxt += '{\%- for block in section.blocks -%\}\n';
			json.blocks.forEach((block)=>{
				if(block.type) {
					resTxt += '\t{\% if block.type == \''+block.type+'\' %\}\n';
					resTxt += '\t<div class="block block-{\{ block.type | handleize }\}" {\{ block.shopify_attributes }\}>\n';
				}
				if(block.settings) {
					let vars = '', echo = '';
					block.settings.forEach((field)=>{
						switch(field.type) {
							case'checkbox':
							case'number':
							case'radio':
							case'range':
							case'select':
							case'color':
								if(field.id) {
									vars += 'assign '+field.id+' =  block.settings.'+field.id+'\n\t\t\t';
								}
							break;
							case'image_picker':
								echo += '\t\t<div>{\{ block.settings.'+field.id+' | image_url: width: 400 | image_tag }\}</div>\n';
							break;
							case'text':
							case'textarea':
							case'html':
							case'inline_richtext':
							case'liquid':
							case'richtext':
								if(field.id) {
									echo += '\t\t<div>{\{ block.settings.'+field.id+' }\}</div>\n';
								}
							break;
						}
					});
					if(vars) {
						if (vars.endsWith('\n\t\t\t')) {
							vars = vars.slice(0, -4);
						}
						resTxt += '\t\t{\%- liquid\n\t\t\t'+vars+'\n\t\t%\}\n';
					}
					if(echo) {
						resTxt += echo;
					}
				}
				if(block.type) {
					resTxt += '\t</div>\n';
					resTxt += '\t{\% endif %\}\n';
				}
			});
			resTxt += '{\%- endfor -%\}\n';
		}

		resTxt += '{\% schema %\}\n'+JSON.stringify(json, null, '	')+'\n{\% endschema %\}';
	
		if(indent==false) {
			resTxt = resTxt.replace(/\t/g,'  ');
		}
		document.querySelector('.json-formatted').value = resTxt;
	}else{
		return json;
	}
	fixResize();
}
function fixResize() {
	let leftElm = document.querySelector('.card-section'), rightElm = document.querySelector('.json-formatted');
	if(window.outerWidth >=767) {
		let cardBodyHeight = leftElm.closest('.form').querySelector('.card-section>.card-body').clientHeight;
		let cardPaddingTop = window.getComputedStyle(leftElm).paddingTop, cardPaddingBottom = window.getComputedStyle(leftElm).paddingBottom;
		let cardFooter = rightElm.closest('.card').querySelector('.card-footer').clientHeight;
		let totalHeight = parseInt(cardBodyHeight - parseInt(cardPaddingTop+cardPaddingBottom));
		rightElm.style.height = (totalHeight-cardFooter)+'px';
	}else{
		rightElm.removeAttribute('style');
	}
}
fixResize();
window.addEventListener('resize', function(event) {
	fixResize();
});

document.addEventListener('DOMContentLoaded', function () {
	var tabIndent = document.querySelector('[name="indent"]');
	window.onload = function() {
		//mk.alert('<h6>Under construction!!</h6><em class="small">This page is still under developing. Please visit later...</em>');
		var tabIndentType = mk.store.get('tab_indent');
		tabIndent.checked = tabIndentType=='tab'?true:false;
		collectData(true);
	}
	const makeSortable = function() {
		document.querySelectorAll('.settings').forEach((item) => {
			new Sortable(item, {
				animation: 120,
				ghostClass: 'ghost',
				handle: '.item-head',
				onEnd: function(e) {
					collectData(true);
				}
			});
		});
		document.querySelectorAll('.field-options').forEach((item) => {
			new Sortable(item, {
				animation: 120,
				ghostClass: 'ghost',
				handle: '.input-group-text',
				onEnd: function(e) {
					let optWrp = e.item.closest('.field-options');
					if(optWrp) {
						let opt = '', wrap = e.item.closest('.item');
						optWrp.querySelectorAll('.input-group [name="option-value"]').forEach((input) => {
							if(input.value && input.closest('.input-group').querySelector('[name="option-label"]').value) {
								opt += '<option value="'+input.value+'">'+input.value+'</option>';
							}
						});
						wrap.querySelector('[name="default"]').innerHTML = opt;
					}
					collectData(true);
				}
			});
		});
		document.querySelectorAll('.block-wrap').forEach((item) => {
			new Sortable(item, {
				animation: 120,
				ghostClass: 'ghost',
				handle: '.card-header',
			});
		});
		collectData(true);
	};
	makeSortable();
	const initTippy = function() {
		document.querySelectorAll('.form [title]').forEach((title) => {
			let text = title.getAttribute('title');
			tippy(title, {
				arrow: false,
				content: text,
				offset: [5, 5],
				theme: 'material',
			});
			title.removeAttribute('title');
		});
	}
	initTippy();
	document.querySelectorAll('.form').forEach((form) => {
		form.addEventListener('click', function(e) {
			if(e.target.getAttribute('data-add') && e.target.getAttribute('data-add')=='field') {
				e.preventDefault();
				let btn = e.target;
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
						btn.closest('.card-body').querySelector('.settings').insertAdjacentHTML('beforeend', htm);
						makeSortable();
						initTippy();
					}
				});
			}
			if(e.target.getAttribute('data-add') && e.target.getAttribute('data-add')=='block') {
				e.preventDefault();
				let btn = e.target;
				let htm = getField('block','block');
				if(htm) {
					btn.closest('.card-body').querySelector('.block-wrap').insertAdjacentHTML('beforeend', htm);
					makeSortable();
					initTippy();
				}
			}
			if(e.target.getAttribute('data-add') && e.target.getAttribute('data-add')=='header') {
				e.preventDefault();
				let btn = e.target;
				let whichData = e.target.getAttribute('data-which');
				let htm = getField('header',whichData);
				if(htm) {
					btn.closest('.card-body').querySelector('.settings-'+whichData).insertAdjacentHTML('beforeend', htm);
					makeSortable();
					initTippy();
				}
			}

			if(e.target.closest('.item-action') && e.target.getAttribute('data-delete')=='item') {
				e.preventDefault();
				mk.confirm('<h6>Are you sure want to delete?</h6><em class="small">Once you remove this, you won\'t able to recover.</em>',function() {
					e.target.closest('.item,.card').remove();
					collectData(true);
				});
			}
			if(e.target.getAttribute('data-add')=='option') {
				let htm = getField('option');
				if(htm) {
					e.target.closest('.item').querySelector('.field-options').insertAdjacentHTML('beforeend', htm);
					collectData(true);
				}
			}
			if((e.target.closest('.input-group') && e.target.getAttribute('data-delete')=='option') || (e.target.closest('.btn') && e.target.closest('.btn').getAttribute('data-delete')=='option')) {
				e.preventDefault();
				mk.confirm('<h6>Are you sure want to delete?</h6><em class="small">Once you remove this, you won\'t able to recover.</em>',function() {
					e.target.closest('.input-group').remove();
					collectData(true);
				});
			}
			if(e.target.getAttribute('data-collapse')) {
				e.preventDefault();
				let itemType = e.target.getAttribute('data-collapse'), itemWrap = e.target.closest('.'+itemType);
				if(itemWrap) {
					if(itemWrap.classList.contains('active')) {
						itemWrap.classList.remove('active');
						e.target.textContent = 'expand_more';
					}else{
						itemWrap.classList.add('active');
						e.target.textContent = 'expand_less';
					}
					fixResize();
				}
			}
			if(e.target.getAttribute('data-add')) {
				initTippy();
			}
		});
		form.addEventListener('input', function(e) {
			if(e.target.classList.contains('form-control') || e.target.classList.contains('form-select')) {
				let name = e.target.getAttribute('name'), value = e.target.value, wrap = e.target.closest('.item');
				if(value) {
					switch(name) {
						case'label':
							let id = wrap.querySelector('[name="identifier"]');
							if(!id.value) {
								id.setAttribute('lock',false);
							}
							if(id.getAttribute('lock')=='false') {
								id.value = stringToSlug(value);
							}
							var label = wrap.querySelector('[name="label"]');
							if(label.value) {
								wrap.querySelector('.item-head .item-label').innerHTML = label.value
							}
						break;
						case'identifier':
							let iden = wrap.querySelector('[name="identifier"]');
							iden.setAttribute('lock',iden.value?true:false);
						break;
						case'option-label':
						case'option-value':
							let optWrp = e.target.closest('.field-options');
							if(optWrp) {
								let opt = '';
								optWrp.querySelectorAll('.input-group [name="option-value"]').forEach((input) => {
									if(input.value && input.closest('.input-group').querySelector('[name="option-label"]').value) {
										opt += '<option value="'+input.value+'">'+input.value+'</option>';
									}
								});
								wrap.querySelector('[name="default"]').innerHTML = opt;
							}
						break;
						case'block-name':
							let btyp = e.target.closest('.row').querySelector('[name="block-type"]');
							if(!btyp.value) {
								btyp.setAttribute('lock',false);
							}
							if(btyp.getAttribute('lock')=='false') {
								btyp.value = stringToSlug(value);
							}
							var card = e.target.closest('.card'), label = card.querySelector('[name="block-name"]');
							if(label.value) {
								card.querySelector('.card-header .card-label').innerHTML = label.value
							}
						break;
						case'block-type':
							let btype = e.target.closest('.row').querySelector('[name="block-type"]');
							btype.setAttribute('lock',btype.value?true:false);
						break;
						case'name':
							let styp = e.target.closest('.section-wrap').querySelector('[name="class"]');
							if(!styp.value) {
								styp.setAttribute('lock',false);
							}
							if(styp.getAttribute('lock')=='false') {
								styp.value = stringToSlug(value);
							}
							e.target.closest('.section-wrap').querySelector('[name="preset"]').value = value;
						break;
						case'class':
							let scls = e.target.closest('.section-wrap').querySelector('[name="class"]');
							scls.setAttribute('lock',scls.value?true:false);
						break;
					}
					collectData(true);
				}
			}
		});
	});
	document.querySelector('[data-action]').addEventListener('click',function() {
		const jsonData = document.querySelector('.json-formatted').value;
		const a = document.createElement('a');
		let name = document.querySelector('.section-wrap [name="name"]').value;
		if(name) {
			name = stringToSlug(name,'-');
		}else{
			name = 'unknown-section';
		}
		let rawData = 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonData);
		a.href = rawData;
		a.download = name+'.liquid';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	});
	document.querySelector('.card-footer [name="indent"]').addEventListeners('input change', function(e) {
		e.preventDefault();
		mk.store.set('tab_indent',this.checked?'tab':'space');
		collectData(true);
	});
	document.querySelectorAll('[data-copy]').forEach(function(copy) {
		copy.addEventListener('click',function() {
			const codeCopy = this.closest('.card').querySelector('.json-formatted').value;
			if(codeCopy) {
				mk.copyToClipboard(codeCopy);
			}
		});
	});
});
</script>