---
layout: default
title: "Magento"
permalink: /magento/
---

<div class="alert text-bg-dark">
	<div class="putty pre"><code>$ <span data-copy="cmd">php -d memory_limit=-1 -d opcache.enable_cli=0 ~/composer.phar install</span> <span class="php-list"></span></code>
		<code>$ <span data-copy="cmd">php -d memory_limit=-1 -d opcache.enable_cli=0 bin/magento setup:upgrade</span> <span class="php-list"></span></code>
		<code>$ <em title="Optional" data-copy="cmd">php -d memory_limit=-1 -d opcache.enable_cli=0 bin/magento setup:di:compile</em> <span class="php-list"></span></code>
		<code>$ <span data-copy="cmd">rm -rf pub/static/frontend</span></code>
		<code>$ <span data-copy="cmd">rm -rf var/view_preprocessed</span></code>
		<code>$ <span data-copy="cmd">php -d memory_limit=-1 -d opcache.enable_cli=0 bin/magento setup:static-content:deploy</span> <span class="php-list"></span></code>
		<code>$ <span data-copy="cmd">php -d memory_limit=-1 -d opcache.enable_cli=0 bin/magento indexer:reindex</span> <span class="php-list"></span></code>
		<code>$ <span data-copy="cmd">php -d memory_limit=-1 -d opcache.enable_cli=0 bin/magento cache:clean</span> <span class="php-list"></span></code>
	</div>
</div>

<div class="pt-3">
	<div class="alert alert-success mt-2 text-center" role="alert">Admin user create command</div>
	<form id="cli" class="form" method="post">
		<div class="row">
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label" for="fname">First Name</label>
					<input id="fname" type="text" class="form-control" name="fname" placeholder="John">
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label" for="lname">Last Name</label>
					<input id="lname" type="text" class="form-control" name="lname" placeholder="Doe">
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label" for="username">Username</label>
					<input id="username" type="text" class="form-control" name="username" placeholder="admin_store">
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label" for="password">Password</label>
					<input id="password" type="password" class="form-control" name="password" placeholder="s5$182FMl-vu">
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3">
					<label class="form-label" for="email">Email</label>
					<input id="email" type="text" class="form-control" name="email" placeholder="your.email@example.com">
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3 offset-lg-3">
				<div class="mb-3">
					<label class="form-label" for="php">PHP Version</label>
					<select id="php" class="form-select" name="php">
						<option value="php">I don't know</option>
						<option value="ea-php71">ea-php71</option>
						<option value="ea-php72">ea-php72</option>
						<option value="ea-php73">ea-php73</option>
						<option value="ea-php74">ea-php74</option>
						<option value="ea-php81" selected>ea-php81</option>
					</select>
				</div>
			</div>
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="mb-3 text-sm-end">
					<label class="form-label d-block">&nbsp;</label>
					<button type="button" class="btn btn-primary" name="generate-cli">Generate Cli</button>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card-header d-flex justify-content-between align-items-center bg-primary text-white"><span>Magento command cli</span> <span class="material-icons" data-copy="cli" title="Click to Clipboard">content_copy</span></div>
			<div class="card-body"><pre class="result pre mb-0">No command generated yet.</pre></div>
			<div class="card-footer">Note: This command can be use to reset the admin password as well.</div>
		</div>
	</form>
</div>
----

### Configure Magento on Windows locally

##### Make sure you have enabled below extension via `php.ini`

```
;extension=intl
;extension=soap
;extension=sockets
;extension=sodium
;extension=xsl
```

##### Increase memory via `php.ini`

```
memory_limit = 4G

;Optionally you may need to change below settings as well
max_execution_time = 300
max_input_time = 600
upload_max_filesize = 300M
max_input_time = 600
```
> **Note** This settings is just for localhost. Do not apply this settings to any DEV or LIVE server.

##### Configure host file `C:\Windows\System32\drivers\etc\hosts`

Add a `127.0.0.1 magento.loc` code at the bottom of the `hosts` file.


##### Create a database from [http://localhost/phpmyadmin](http://localhost/phpmyadmin/){:target="_blank"}

You can also import the large database through command. Go `C:\xampp\mysql\bin` and run `cmd`.

Syntax: `mysql -u {DB_USER} -p {DB_NAME} < "c:\path\to\mysql_database.sql"`

Example: `mysql -u root -p magento_test < "D:\Database\magento_test.sql"`

> **Note** Make sure you run the cmd on path `C:\xampp\mysql\bin` but if you drive is different then change it accordingly.


##### Install Elasticsearch

Download Elasticsearch from [Elasticsearch 7.6.0](https://www.elastic.co/downloads/past-releases/elasticsearch-7-6-0){:target="_blank"}
Magento 2.4.x is tested with Elasticsearch 7.6.x only. You can use other 7.x versions at your discretion, but we recommend using the tested version of Elasticsearch.

Extract the .zip file you’ve just downloaded. Let assume we extract the files on `D:\elasticsearch-7.6.0`.
You can extract files anywhere you want but it recommend to extract on the stable location.

Run the below command via `cmd` go to `D:\elasticsearch-7.6.0\bin\` and enter `elasticsearch.bat` to run the elasticsearch.

When the installation is complete, you can check if Elasticsearch is properly installed at http://localhost:9200, which should give you something like this:

```
{
  "name" : "SS-MOHAN",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "hfUCb5t7Q26PrH9iJrHkqQ",
  "version" : {
    "number" : "7.6.0",
    "build_flavor" : "default",
    "build_type" : "zip",
    "build_hash" : "7f634e9f44834fbc12724506cc1da681b0c3b1e3",
    "build_date" : "2020-02-06T00:09:00.449973Z",
    "build_snapshot" : false,
    "lucene_version" : "8.4.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```

##### Download Magento repo via Composer

As some of the plugins from Magento 2 do not work with composer 2.x, you’ll want to use a stable version of composer 1.x to download Magento.

Get 1.x composer from [https://getcomposer.org/download/](https://getcomposer.org/download/){:target="_blank"} and save it where you can access through `cmd`.

> **Note** If you put the file on the root of the project it won't able to install on the same directory. Therefore place on the somewhere path for the first intallation. After that you can place it on the root directory of the poject.

Create a account or login with Magento account generate a [accessKeys](https://commercemarketplace.adobe.com/customer/accessKeys/){:target="_blank"}

In addition you may clone from github https://developer.adobe.com/commerce/contributor/guides/install/clone-repository/

Now you need to run a command to install the Magento repo package for initial project.

```
cd D:\Project\magento\
```
```
php composer.phar create-project --repository-url=https://repo.magento.com/ magento/project-community-edition=2.4. ./
```

> ** Note** Adjust your composer path (i.e. php `../composer.phar`). If we did not add installation path `./` at last it will be installed on new directory `project-community-edition`.

After entering the command, it will asked you the `Public Key` and `Private Key` that we created earlier. A prompt will be asked to save the credentials into `auth.json` and type `yes` to save it. It will download all resources and files of the Magento repo/project.


##### Install Magento store using command

Before proceed installation, there are several files that need to tweak.

Find `validateURLScheme` function in this file `\vendor\magento\framework\Image\Adapter\Gd2.php` and replace it with:

```
private function validateURLScheme(string $filename) : bool
{
	$allowed_schemes = ['ftp', 'ftps', 'http', 'https'];
	$url = parse_url($filename);
	if ($url && isset($url['scheme']) && !in_array($url['scheme'], $allowed_schemes) && !file_exists($filename)) {
		return false;
	}
}
```

Find `$realPath` variable in `vendor\magento\framework\View\Element\Template\File\Validator.php` and replace with:

```
$realPath = str_replace('\\', '/',$this->fileDriver->getRealPath($path));
```

Run the below command to setup the store.

```
php -d memory_limit=-1 -d opcache.enable_cli=0 bin/magento setup:install --base-url=http://magento.loc/ --db-host=localhost --db-name=magento_test --db-user=root --db-password= --admin-firstname=Frontend --admin-lastname=Developer --admin-email=your.email@example.com --admin-user=admin --admin-password=admin123 --language=en_US --currency=USD --timezone=America/Chicago --use-rewrites=1 --backend-frontname=admin --cleanup-database
```

> **Note** If you trying to install 2.3.x then it may required `--search-engine=elasticsearch7 --elasticsearch-host=localhost --elasticsearch-port=9200` parameters additionally.

Once the setup completed, you can able to access the store and admin of Magento but if you encounter with Two-Factor Authorization, you may need to run below command `php bin/magento module:disable Magento_TwoFactorAuth` to disable two factor authentication.

<script>
// Usage: querySelector('.input').addEventListeners('input change keyup', function(e) {});
Node.prototype.addEventListeners = function(eventNames, eventFunction){
	for (eventName of eventNames.split(' '))
		this.addEventListener(eventName, eventFunction);
}
function serializeFormArray(formElement) {
	var formData = new FormData(formElement);
	var serializedArray = [];
	formData.forEach(function(value, key) {
		serializedArray.push({ name: key, value: value });
	});
	return serializedArray;
}
document.addEventListener('DOMContentLoaded', function () {
	const php = {
		'71': 'ea-php71',
		'72': 'ea-php72',
		'73': 'ea-php73',
		'74': 'ea-php74',
		'81': 'ea-php81',
	};
	let phpCopy = '';
	Object.entries(php).forEach(function([key, value]) {
		phpCopy += '<span class="php php'+key+'" version="'+value+'" data-copy><i class="material-icons">content_copy</i> php'+key+'</span>';
	});
	document.querySelectorAll('.php-list').forEach((list)=>{
		list.innerHTML = phpCopy;
	});
	document.querySelectorAll('[data-copy]').forEach((btn) => {
		btn.addEventListener('click',function(e) {
			e.preventDefault();
			let code = this.textContent;
			if(this.classList.contains('php')) {
				let php = this.getAttribute('class').replace('php','').trim();
				code = this.closest('code').querySelector('[data-copy="cmd"]').textContent;
				code = code.replace('php','/usr/local/bin/'+this.getAttribute('version'));
			}
			if(this.getAttribute('data-copy')=='cli') {
				let cli = this.closest('.card').querySelector('.result').textContent;
				code = cli!='No command generated yet.'?cli:'';
			}
			if(code) {
				mk.copyToClipboard(code);
			}
		});
	});
	document.querySelector('[name="generate-cli"]').addEventListener('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		let formElement = document.querySelector('#cli'), data = serializeFormArray(formElement), cli = [];
		for(let i=0;i<data.length;i++) {
			let name = data[i].name, value = data[i].value, novalue = document.querySelector('[name="'+name+'"]').getAttribute('placeholder');
			switch(name) {
				case'php':
					cli[0] = (value=='php'?'php':'/usr/local/bin/'+value)+' bin/magento admin:user:create';
				break;
				case'username':
					cli[1] = ' --admin-user="'+(value?value:novalue)+'"';
				break;
				case'password':
					cli[2] = ' --admin-password="'+(value?value:novalue)+'"';
				break;
				case'email':
					cli[3] = ' --admin-email="'+(value?value:novalue)+'"';
				break;
				case'fname':
					cli[4] = ' --admin-firstname="'+(value?value:novalue)+'"';
				break;
				case'lname':
					cli[5] = ' --admin-lastname="'+(value?value:novalue)+'"';
				break;
			}
		}
		document.querySelector('.result.pre').textContent = cli.join('');
	});
	document.querySelectorAll('.form .form-control, .form .form-select').forEach((input) => {
		input.addEventListener('input', function(e) {
			document.querySelector('[name="generate-cli"]').click();
		});
	});
});
</script>