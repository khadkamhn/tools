---
layout: default
title: "XAMPP and Virtual Host on Windows"
permalink: /xampp/
---

#### Creating a virtual host from different directory

**Edit the `httpd-vhosts.conf` file (Path: `C:\xampp\apache\conf\extra`)**

**Add below code for allowing custom drive.**

```
<Directory  "C:/Project">
	Options All
	AllowOverride All
	Require all granted  
</Directory>
```


**Now add a project directory (this is a example of Magento)**

```
<VirtualHost *:80>
	ServerAdmin webmaster@localhost
	DocumentRoot "C:\Project\magento-test\pub"
	ServerName magento.loc
	ErrorLog "logs/magento.loc-error.log"
	CustomLog "logs/magento.loc-access.log" common
</VirtualHost>
<VirtualHost *:443>
	ServerAdmin webmaster@localhost
	DocumentRoot "C:\Project\magento-test\pub"
	ServerName magento.loc
	SSLEngine On
	SSLCertificateFile "C:/xampp/apache/conf/ssl.crt/server.crt"
	SSLCertificateKeyFile "C:/xampp/apache/conf/ssl.key/server.key"
	ErrorLog "logs/magento.loc-error.log"
	CustomLog "logs/magento.loc-access.log" common
</VirtualHost>
```

--------

#### Use different php version on xampp

**Edit the `httpd-xampp.conf` file (Path: `C:\xampp\apache\conf\extra`)**

First download the php zip from [https://windows.php.net/](https://windows.php.net/downloads/releases/archives/){:target="_blank"}
Extract the file and add `C:\xampp\php811` path to the `Environment Variables`.

Comment out the line `SetEnv PHPRC "\\xampp\\php"` from `<IfModule env_module>` section.
It will be looks like:
```
<IfModule env_module>
	SetEnv MIBDIRS "C:/xampp/php/extras/mibs"
	SetEnv MYSQL_HOME "\\xampp\\mysql\\bin"
	SetEnv OPENSSL_CONF "C:/xampp/apache/bin/openssl.cnf"
	SetEnv PHP_PEAR_SYSCONF_DIR "\\xampp\\php"
	#SetEnv PHPRC "\\xampp\\php"
	SetEnv TMP "\\xampp\\tmp"
</IfModule>
```

**Now add below code at last of `httpd-xampp.conf` file**

```
ScriptAlias /php811 "C:/xampp/php811"
Action application/x-httpd-php811-cgi /php811/php-cgi.exe
<Directory "C:/xampp/php811">
	AllowOverride None
	Options None
	Require all denied
	<Files "php-cgi.exe">
		Require all granted
	</Files>
</Directory>
```

**Example of usage this `php811` with `httpd-vhosts.conf` file**

```
<VirtualHost *:80>
	ServerAdmin webmaster@localhost
	DocumentRoot "C:\Project\magento-test\pub"
	ServerName magento.loc
	ErrorLog "logs/magento.loc-error.log"
	CustomLog "logs/magento.loc-access.log" common
	<FilesMatch "\.php$">
		SetHandler application/x-httpd-php811-cgi
	</FilesMatch>
</VirtualHost>
<VirtualHost *:443>
	ServerAdmin webmaster@localhost
	DocumentRoot "C:\Project\magento-test\pub"
	ServerName magento.loc
	SSLEngine On
	SSLCertificateFile "C:/xampp/apache/conf/ssl.crt/server.crt"
	SSLCertificateKeyFile "C:/xampp/apache/conf/ssl.key/server.key"
	ErrorLog "logs/magento.loc-error.log"
	CustomLog "logs/magento.loc-access.log" common
	<FilesMatch "\.php$">
		SetHandler application/x-httpd-php811-cgi
	</FilesMatch>
</VirtualHost>
```