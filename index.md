---
layout: default
title: null
---
{%- assign baseUrl = site.baseurl -%}
<div class="container">
<div class="d-flex flex-wrap align-item-center justify-content-center my-4">
	<div class="link-item">
		<a href="{{ baseUrl | append: '/date-converter/' }}">
			<span class="material-icons">calendar_month</span>
			<span class="h3">Date</span>
			<span class="h6">A Nepali or English date conversion</span>
		</a>
	</div>
	<div class="link-item">
		<a href="{{ baseUrl | append: '/slugify/' }}">
			<span class="material-icons">link</span>
			<span class="h3">Slugify</span>
			<span class="h6">A slug from any text/sentence</span>
		</a>
	</div>
	<div class="link-item">
		<a href="{{ baseUrl | append: '/shadow-generator/' }}">
			<span class="material-icons">highlight_alt</span>
			<span class="h3">Shadow</span>
			<span class="h6">CSS box-shadow custom or pre-defined</span>
		</a>
	</div>
	<div class="link-item">
		<a href="{{ baseUrl | append: '/base64-png-generator/' }}">
			<span class="material-icons">image</span>
			<span class="h3">Base64 PNG</span>
			<span class="h6">A base64 png generator or blank png</span>
		</a>
	</div>
	<div class="link-item">
		<a href="{{ baseUrl | append: '/base64-font-generator/' }}">
			<span class="material-icons">font_download</span>
			<span class="h3">Base64 Font</span>
			<span class="h6">A base64 font generator from ttf or woff</span>
		</a>
	</div>
	<div class="link-item">
		<a href="{{ baseUrl | append: '/password-generator/' }}">
			<span class="material-icons">password</span>
			<span class="h3">Password</span>
			<span class="h6">A strong password generator to secure your account</span>
		</a>
	</div>
	<div class="link-item">
		<a href="{{ baseUrl | append: '/unicode-nepali/' }}">
			<span class="material-icons">keyboard_alt</span>
			<span class="h3">Unicode</span>
			<span class="h6">A tool to convert from english to devanagari unicode</span>
		</a>
	</div>
	<div class="link-item">
		<a href="{{ baseUrl | append: '/html-character/' }}">
			<span class="material-icons">integration_instructions</span>
			<span class="h3">HTML Character</span>
			<span class="h6">Convert special character to html entities</span>
		</a>
	</div>
	<div class="link-item">
		<a href="{{ baseUrl | append: '/html-alphabet/' }}">
			<span class="material-icons">code</span>
			<span class="h3">HTML Alphabet</span>
			<span class="h6">Convert all alphabet to html entities</span>
		</a>
	</div>
	<div class="link-item">
		<a href="{{ baseUrl | append: '/url-encoder/' }}">
			<span class="material-icons">source</span>
			<span class="h3">URL-encoder</span>
			<span class="h6">Make any SVG code into URL readable or ready for CSS</span>
		</a>
	</div>
	<hr class="w-100">
	<div class="link-item">
		<a href="{{ baseUrl | append: '/wordpress/' }}">
			<span class="material-icons">text_snippet</span>
			<span class="h3">WordPress</span>
			<span class="h6">Generate a mysql command to save a settings at once.</span>
		</a>
	</div>
	<div class="link-item">
		<a href="{{ baseUrl | append: '/magento/' }}">
			<span class="material-icons">text_snippet</span>
			<span class="h3">Magento <sup>v2</sup></span>
			<span class="h6">Reference of command and easy to copy.</span>
		</a>
	</div>
</div>
</div>