---
layout: default
title: "WordPress"
permalink: /wordpress/
---

<div class="pt-3">
	<div class="alert alert-success mt-2 text-center" role="alert">WordPress standard configuration mysql generator</div>
	<form id="wp-config-mysql" class="wp-config-mysql" method="post">
		<div class="row">
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label">Table prefix of the database</label>
					<input type="text" class="form-control" name="wp_prefix" placeholder="wp_">
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label">Admin email address</label>
					<input type="email" class="form-control" name="admin_email" placeholder="your.email@example.com">
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label">Tagline</label>
					<input type="text" class="form-control" name="blogdescription" placeholder="In a few words, explain what this site is about.">
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label">Blog pages show at most</label>
					<input type="number" class="form-control" name="posts_per_page" placeholder="10">
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label">Week starts</label>
					<select class="form-select" name="start_of_week">
						<option value="0" selected="selected">Sunday</option>
						<option value="1">Monday</option>
						<option value="2">Tuesday</option>
						<option value="3">Wednesday</option>
						<option value="4">Thursday</option>
						<option value="5">Friday</option>
						<option value="6">Saturday</option>
					</select>
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label">Timezone</label>
					<select class="form-select" name="timezone_string">{%- include wp-timezones.html -%}</select>
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label">Site Language</label>
					<select class="form-select" name="WPLANG" id="locale">{%- include wp-languages.html -%}</select>
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label">Search Engine Visibility</label>
					<select class="form-select" name="blog_public"><option value="0" selected>Development</option><option value="1">Production</option></select>
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label" title="Allow people to post comments on new articles">Allow comments on new articles</label>
					<select class="form-select" name="default_comment_status"><option value="open">Allow</option><option value="closed" selected>Not allowed</option></select>
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label" title="Organize my uploads into month- and year-based folders">Organize my uploads</label>
					<select class="form-select" name="uploads_use_yearmonth_folders"><option value="0" selected>In single directory</option><option value="1">Seperated month year directory</option></select>
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label">Permalink structure</label>
					<select class="form-select" name="permalink_structure">
						<option value="">Plain &nbsp;&nbsp; ?p=123</option>
						<option value="/%year%/%monthnum%/%day%/%postname%/" selected>Day and name &nbsp;&nbsp; /%year%/%monthnum%/%day%/%postname%/</option>
						<option value="/%year%/%monthnum%/%postname%/">Month and name &nbsp;&nbsp; /%year%/%monthnum%/%postname%/</option>
						<option value="/archives/%post_id%">Numeric &nbsp;&nbsp; /archives/%post_id%</option>
						<option value="/%postname%/" selected>Postname &nbsp;&nbsp; /%postname%/</option>
					</select>
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3 text-sm-end">
					<label class="form-label d-block">&nbsp;</label>
					<button type="button" class="btn btn-primary" name="generate-mysql">Generate Query</button>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card-header d-flex justify-content-between align-items-center bg-primary text-white"><span>MySQL Query</span> <span class="material-icons" data-copy="query" title="Click to Clipboard">content_copy</span></div>
			<div class="card-body"><pre class="result pre mb-0">No query generated yet.</pre></div>
			<div class="card-footer"><button type="button" class="btn btn-warning" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" name="generate-mysql-alt">Alternative with Efficent way</button></div>
		</div>
	</form>
	<div class="alert alert-info mt-3 text-center" role="alert">Note: You need to run the query in your the desire database.</div>
</div>
<script>
function serializeFormArray(formElement) {
	var formData = new FormData(formElement);
	var serializedArray = [];
	formData.forEach(function(value, key) {
		serializedArray.push({ name: key, value: value });
	});
	return serializedArray;
}
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('[name="generate-mysql"]').addEventListener('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var formElement = document.querySelector('#wp-config-mysql');
		var data = serializeFormArray(formElement), options = fields = mysql = prefix ='';
		for(var i=0;i<data.length;i++){
			var nam = data[i].name, val = data[i].value, def = document.querySelector('[name="'+nam+'"]').getAttribute('placeholder'), id = data.length-1;
			if(nam=='blogdescription' && val==''){ def = ''}
			if(nam=='wp_prefix'){
				prefix = val?val:(def?def:'wp_');
			}
			if(nam=='WPLANG' && val!=''){
				mysql = mysql + 'INSERT INTO '+prefix+'options (option_name,option_value,autoload) VALUES (\'WPLANG\',\''+val+'\',\'yes\') ON DUPLICATE KEY UPDATE option_name=VALUES(option_name), option_value=VALUES(option_value), autoload=VALUES(autoload);\n'
			}
			if(nam!='wp_prefix' && nam!='WPLANG'){
				options = options + 'when option_name = \''+nam+'\' then \''+(val?val:(def?def:''))+'\'\n\t'+(i==id?'':'\t');
				fields = fields + '\''+nam+'\''+(i==id?'':',');
			}
		}
		mysql = mysql + 'UPDATE '+prefix+'options\n\tSET option_value = (case '+options+ 'end)\nWHERE option_name in ('+fields+');';
		document.querySelector('.result.pre').textContent = mysql;
	});
	document.querySelector('[name="generate-mysql-alt"]').addEventListener('click', function(e) {
		e.preventDefault();
		var formElement = document.querySelector('#wp-config-mysql');
		var data = serializeFormArray(formElement), mysql = prefix ='';
		for(var i=0;i<data.length;i++){
			var nam = data[i].name, val = data[i].value, def = document.querySelector('[name="'+nam+'"]').getAttribute('placeholder'), id = data.length-1;
			if(nam=='blogdescription' && val==''){ def = ''}
			if(nam=='wp_prefix'){
				prefix = val?val:(def?def:'wp_');
			}
			if((nam!='wp_prefix' && nam!='WPLANG') || (nam=='WPLANG' && val!='')){
				mysql = mysql + '\t(\''+nam+'\',\''+(val?val:(def?def:''))+'\',\'yes\')'+(i==id?'':', \n')
			}
		}
		mysql = 'INSERT INTO '+prefix+'options (option_name,option_value,autoload) VALUES \n'+mysql+' \nON DUPLICATE KEY UPDATE option_name=VALUES(option_name), option_value=VALUES(option_value), autoload=VALUES(autoload);';
		document.querySelector('.result.pre').textContent = mysql;
	});
	document.querySelector('[data-copy="query"]').addEventListener('click', function() {
		let mysql = document.querySelector('.result.pre').textContent;
		if(mysql == 'No query generated yet.') {
			mk.toastr({head:{text:'Warning'},body:'Please generate query!'},'warning');
			return false;
		}
		mk.copyToClipboard(mysql);
	});
});
</script>