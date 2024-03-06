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
<div class="card mt-3">
	<div class="card-header d-flex justify-content-between align-items-center">
		<span>Configure in Windows for locally</span>
	</div>
	<div class="card-body">
		<div class="h6">Make sure you have enabled below extension via <code>php.ini</code></div>
		`;extension=intl
		;extension=soap
		;extension=sockets
		;extension=sodium
		;extension=xsl`
		<div class="h6">Increase memory via <code>php.ini</code></div>
		<pre class="p-3 text-bg-light"><code>memory_limit = 4G

;Optionally you may need to change below settings as well
max_execution_time = 300
max_input_time = 600
upload_max_filesize = 300M
max_input_time = 600
</code></pre>
		<p>Note: This settings is just for localhost. Do not apply this settings to any DEV or LIVE server.</p>

		<div class="h6">Configure host file <code>C:\Windows\System32\drivers\etc\hosts</code></div>
		<pre class="p-3 text-bg-light"><code>127.0.0.1 magento.loc</code></pre>
		<div class="h6">Create a database from <a href="http://localhost/phpmyadmin/" target="_blank">http://localhost/phpmyadmin/</a></div>
		<p>Or you can import the large database through mysql command <code>C:\xampp\mysql\bin>mysql -u {DB_USER} -p {DB_NAME} < "c:\path\to\mysql_database.sql"</code></p>
		<pre class="p-3 text-bg-light"><code>C:\xampp\mysql\bin>mysql -u root -p magento_test < "D:\Database\magento_test.sql"</code></pre>

		<div class="h6">Install Elasticsearch</div>
		<p>Download Elasticsearch from <a href="https://www.elastic.co/downloads/past-releases/elasticsearch-7-6-0" target="_blank">Elasticsearch 7.6.0</a> (Magento 2.4.x is tested with Elasticsearch 7.6.x only. You can use other 7.x versions at your discretion, but we recommend using the tested version of Elasticsearch.)</p>
		<p>Extract the .zip file you’ve just downloaded. Run the below command via <code>cmd</code></p>
		<pre class="p-3 text-bg-light"><code>D:\elasticsearch-7.6.0\bin\elasticsearch.bat</code></pre>
		<p>When the installation is complete, you can check if Elasticsearch is properly installed at http://localhost:9200, which should give you something like this:</p>
		<pre class="p-3 text-bg-light"><code>{
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
}</code></pre>

	<div class="h6">Download Magento repo via Composer</div>
	<p>As some of the plugins from Magento 2 do not work with composer 2.x, you’ll want to use a stable version of composer 1.x to download Magento.</p>
	<p>Get 1.x composer from <a href="https://getcomposer.org/download/" target="_blank">https://getcomposer.org/download/</a> and save it on the root of the project directory.</p>
	<p>Create a account or login with Magento account generate a <a href="https://commercemarketplace.adobe.com/customer/accessKeys/" target="_blank">accessKeys</a></p>
	<p>In addition you may clone from github https://developer.adobe.com/commerce/contributor/guides/install/clone-repository/</p>
	<pre class="p-3 text-bg-light"><code>cd D:\Project\magento\<br>php composer.phar create-project --repository-url=https://repo.magento.com/ magento/project-community-edition=2.4. ./</code></pre>
	<p>Note: Adjust your composer path (i.e. php ../composer.phar). If we did not gave <code>./</code> at last it will be installed on <code>project-community-edition</code> directory.</p>
	<p>After entering the command, it will asked you the <code>Public Key</code> and <code>Private Key</code> that we created earlier. A prompt will be asked to save the credentials into <code>auth.json</code> and type <code>yes</code> save it.</p>
	<p>Now, it will be download the Magento repo.</p>

	<div class="h6">Install Magento store using command</div>
	<p>Before proceed installation, there are several files that need to tweak on files</p>
	<p>Find <code>validateURLScheme</code> function in this file <code>\vendor\magento\framework\Image\Adapter\Gd2.php</code> and replace it with:</p>
	<pre class="p-3 text-bg-light"><code>private function validateURLScheme(string $filename) : bool
	{
		$allowed_schemes = ['ftp', 'ftps', 'http', 'https'];
		$url = parse_url($filename);
		if ($url && isset($url['scheme']) && !in_array($url['scheme'], $allowed_schemes) && !file_exists($filename)) {
			return false;
		}
	return true;
}</code></pre>
	<p>In <code>vendor\magento\framework\View\Element\Template\File\Validator.php</code>, replace line</p>
	<pre class="p-3 text-bg-light"><code>$realPath = str_replace('\\', '/',$this->fileDriver->getRealPath($path));</code></pre>
	<p>Now run the below command to setup</p>
	<pre class="p-3 text-bg-light"><code>php bin/magento setup:install --base-url=http://magento.loc/ --db-host=localhost --db-name=yourdbname --db-user=yourdbuser --db-password=yourdbpassword --admin-firstname=admin --admin-lastname=admin --admin-email=admin@admin.com --admin-user=admin --admin-password=admin123 --language=en_US --currency=USD --timezone=America/Chicago --use-rewrites=1 --backend-frontname=admin --search-engine=elasticsearch7 --elasticsearch-host=localhost --elasticsearch-port=9200</code></pre>
	<pre class="p-3 text-bg-light"><code>php811 -d memory_limit=-1 -d opcache.enable_cli=0 bin/magento setup:install --base-url=http://magento.loc/ --db-host=localhost --db-name=magento_test --db-user=root --db-password= --admin-firstname=Frontend --admin-lastname=Developer --admin-email=your.email@example.com --admin-user=admin --admin-password=admin123 --language=en_US --currency=USD --timezone=America/Chicago --use-rewrites=1 --backend-frontname=admin --cleanup-database</code></pre>
	<p>Once the setup completed, you can able to login but if you encounter with Two-Factor Authorization, you may need to run below command</p>
	<pre class="p-3 text-bg-light"><code>php bin/magento module:disable Magento_TwoFactorAuth</code></pre>
	</div>
</div>
<script>
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
		console.log(key);
		console.log(value);
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
			if(code) {
				mk.copyToClipboard(code);
			}
		});
	});
});
</script>