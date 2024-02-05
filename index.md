---
layout: default
title: null
---
{%- assign baseUrl = site.baseurl -%}
<div class="container">
	<div class="d-flex flex-wrap align-item-center justify-content-center my-4">
		{% for link in site.data.links %}
			{%- if link.name == 'hr' -%}
				<hr class="w-100">
			{%- else -%}
				{%- assign linkUrl = baseUrl | append: link.slug -%}
				<div class="link-item">
					<a href="{{ linkUrl }}">
						<span class="material-icons">{{ link.icon }}</span>
						<span class="h3">{{ link.name }}</span>
						<span class="h6">{{ link.title }}</span>
					</a>
				</div>
			{%- endif -%}
		{% endfor %}
	</div>
</div>