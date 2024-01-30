---
layout: default
title: "URL Encoder"
permalink: /url-encoder/
---

<form action="#" method="post">
	<div class="text-center">
		<div class="btn-group" role="group">
			<input type="radio" class="btn-check" name="quote" id="single" autocomplete="off" value="single" checked>
			<label class="btn btn-outline-primary" for="single">Single Quote</label>
			<input type="radio" class="btn-check" name="quote" id="double" autocomplete="off" value="double">
			<label class="btn btn-outline-primary" for="double">Double Quote</label>
		</div>
		<div class="dropdown d-inline-block m-2">
			<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Some samples</button>
			<ul class="dropdown-menu svg-samples"></ul>
		</div>
	</div>
	<div class="row">
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>SVG Source</span>
					<span class="material-icons" data-copy="svg-source" title="Click to Clipboard">content_copy</span>
				</div>
				<div class="card-body p-0">
					<textarea class="svg-source form-control border-0 font-monospace" spellcheck="false"></textarea>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>SVG Encoded</span>
					<span class="material-icons" data-copy="svg-encoded" title="Click to Clipboard">content_copy</span>
				</div>
				<div class="card-body p-0">
					<textarea class="svg-encoded form-control border-0 font-monospace" spellcheck="false"></textarea>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>CSS Background</span>
					<span class="material-icons" data-copy="svg-css" title="Click to Clipboard">content_copy</span>
				</div>
				<div class="card-body p-0">
					<div class="form-control border-0 font-monospace"><code class="svg-background"></code></div>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="card mt-3">
				<div class="card-header d-flex justify-content-between align-items-center">
					<span>SVG Preview</span>
					<span>
						<input class="form-control" type="text" name="background" value="#ffffff" data-coloris>
					</span>
				</div>
				<div class="card-body p-0">
					<div class="svg-preview"><div class="bg"></div></div>
				</div>
			</div>
		</div>
	</div>
</form>
<script>
var svgSample = {
	'Liquid Cheese': "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800'><rect fill='#ffaa00' width='1600' height='800'/><g fill-opacity='1'><path fill='#ffb100'  d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/><path fill='#ffb800'  d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/><path fill='#ffbe00'  d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/><path fill='#ffc500'  d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/><path fill='#ffcc00'  d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/><path fill='#ffd914'  d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/><path fill='#ffe529'  d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/><path fill='#ffef3d'  d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/><path fill='#fff852'  d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/><path fill='#ffff66'  d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/></g></svg>",
	'Protruding Squares': "<svg xmlns='http://www.w3.org/2000/svg'  width='100' height='100' viewBox='0 0 200 200'><rect fill='#ee5522' width='200' height='200'/><defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'><stop offset='0' stop-color='#000' stop-opacity='0'/><stop offset='1' stop-color='#000' stop-opacity='1'/></linearGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'><stop offset='0' stop-color='#000' stop-opacity='0'/><stop offset='1' stop-color='#000' stop-opacity='1'/></linearGradient></defs><g  fill='#d23d09' fill-opacity='0.6'><rect x='100'  width='100' height='100'/><rect y='100'  width='100' height='100'/></g><g fill-opacity='0.5'><polygon fill='url(#a)' points='100 30 0 0 200 0'/><polygon fill='url(#b)' points='100 100 0 130 0 100 200 100 200 130'/></g></svg>",
	'Bullseye Gradient': "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 800 800'><rect fill='#000000' width='800' height='800'/><g fill-opacity='1'><circle fill='#000000'  cx='400' cy='400' r='600'/><circle fill='#230046'  cx='400' cy='400' r='500'/><circle fill='#2f0052'  cx='400' cy='400' r='400'/><circle fill='#3b075e'  cx='400' cy='400' r='300'/><circle fill='#48156a'  cx='400' cy='400' r='200'/><circle fill='#552277'  cx='400' cy='400' r='100'/></g></svg>",
	'Spectrum Gradient': "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1200 800'><rect fill='#ffff00' width='1200' height='800'/><defs><radialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'><stop  offset='0' stop-color='#ff8000'/><stop  offset='1' stop-color='#ff8000' stop-opacity='0'/></radialGradient><radialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'><stop  offset='0' stop-color='#00ff19'/><stop  offset='1' stop-color='#00ff19' stop-opacity='0'/></radialGradient><radialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'><stop  offset='0' stop-color='#9900ff'/><stop  offset='1' stop-color='#9900ff' stop-opacity='0'/></radialGradient><radialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'><stop  offset='0' stop-color='#ffff00'/><stop  offset='1' stop-color='#ffff00' stop-opacity='0'/></radialGradient><radialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'><stop  offset='0' stop-color='#FF0000'/><stop  offset='1' stop-color='#FF0000' stop-opacity='0'/></radialGradient><radialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'><stop  offset='0' stop-color='#0CF'/><stop  offset='1' stop-color='#0CF' stop-opacity='0'/></radialGradient></defs><rect fill='url(#a)' width='1200' height='800'/><rect fill='url(#b)' width='1200' height='800'/><rect fill='url(#c)' width='1200' height='800'/><rect fill='url(#d)' width='1200' height='800'/><rect fill='url(#e)' width='1200' height='800'/><rect fill='url(#f)' width='1200' height='800'/></svg>",
	'Endless Constellation': "<svg xmlns='http://www.w3.org/2000/svg'  width='400' height='400' viewBox='0 0 800 800'><rect fill='#330033' width='800' height='800'/><g fill='none' stroke='#404'  stroke-width='1'><path d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/><path d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/><path d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/><path d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/><path d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/></g><g  fill='#505'><circle  cx='769' cy='229' r='5'/><circle  cx='539' cy='269' r='5'/><circle  cx='603' cy='493' r='5'/><circle  cx='731' cy='737' r='5'/><circle  cx='520' cy='660' r='5'/><circle  cx='309' cy='538' r='5'/><circle  cx='295' cy='764' r='5'/><circle  cx='40' cy='599' r='5'/><circle  cx='102' cy='382' r='5'/><circle  cx='127' cy='80' r='5'/><circle  cx='370' cy='105' r='5'/><circle  cx='578' cy='42' r='5'/><circle  cx='237' cy='261' r='5'/><circle  cx='390' cy='382' r='5'/></g></svg>",
	'Zig Zag': "<svg xmlns='http://www.w3.org/2000/svg'  width='120' height='120' viewBox='0 0 120 120'><rect fill='#00bb77' width='120' height='120'/><polygon  fill='#000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/></svg>",
	'Repeating Chevrons': "<svg xmlns='http://www.w3.org/2000/svg'  width='120' height='120' viewBox='0 0 120 120'><rect fill='#ddffaa' width='120' height='120'/><polygon  fill='#AE9' fill-opacity='1' points='120 120 60 120 90 90 120 60 120 0 120 0 60 60 0 0 0 60 30 90 60 120 120 120 '/></svg>",
	'Large Triangles': "<svg xmlns='http://www.w3.org/2000/svg'  width='540' height='450' viewBox='0 0 1080 900'><rect fill='#00b7ff' width='1080' height='900'/><g fill-opacity='.1'><polygon fill='#444' points='90 150 0 300 180 300'/><polygon points='90 150 180 0 0 0'/><polygon fill='#AAA' points='270 150 360 0 180 0'/><polygon fill='#DDD' points='450 150 360 300 540 300'/><polygon fill='#999' points='450 150 540 0 360 0'/><polygon points='630 150 540 300 720 300'/><polygon fill='#DDD' points='630 150 720 0 540 0'/><polygon fill='#444' points='810 150 720 300 900 300'/><polygon fill='#FFF' points='810 150 900 0 720 0'/><polygon fill='#DDD' points='990 150 900 300 1080 300'/><polygon fill='#444' points='990 150 1080 0 900 0'/><polygon fill='#DDD' points='90 450 0 600 180 600'/><polygon points='90 450 180 300 0 300'/><polygon fill='#666' points='270 450 180 600 360 600'/><polygon fill='#AAA' points='270 450 360 300 180 300'/><polygon fill='#DDD' points='450 450 360 600 540 600'/><polygon fill='#999' points='450 450 540 300 360 300'/><polygon fill='#999' points='630 450 540 600 720 600'/><polygon fill='#FFF' points='630 450 720 300 540 300'/><polygon points='810 450 720 600 900 600'/><polygon fill='#DDD' points='810 450 900 300 720 300'/><polygon fill='#AAA' points='990 450 900 600 1080 600'/><polygon fill='#444' points='990 450 1080 300 900 300'/><polygon fill='#222' points='90 750 0 900 180 900'/><polygon points='270 750 180 900 360 900'/><polygon fill='#DDD' points='270 750 360 600 180 600'/><polygon points='450 750 540 600 360 600'/><polygon points='630 750 540 900 720 900'/><polygon fill='#444' points='630 750 720 600 540 600'/><polygon fill='#AAA' points='810 750 720 900 900 900'/><polygon fill='#666' points='810 750 900 600 720 600'/><polygon fill='#999' points='990 750 900 900 1080 900'/><polygon fill='#999' points='180 0 90 150 270 150'/><polygon fill='#444' points='360 0 270 150 450 150'/><polygon fill='#FFF' points='540 0 450 150 630 150'/><polygon points='900 0 810 150 990 150'/><polygon fill='#222' points='0 300 -90 450 90 450'/><polygon fill='#FFF' points='0 300 90 150 -90 150'/><polygon fill='#FFF' points='180 300 90 450 270 450'/><polygon fill='#666' points='180 300 270 150 90 150'/><polygon fill='#222' points='360 300 270 450 450 450'/><polygon fill='#FFF' points='360 300 450 150 270 150'/><polygon fill='#444' points='540 300 450 450 630 450'/><polygon fill='#222' points='540 300 630 150 450 150'/><polygon fill='#AAA' points='720 300 630 450 810 450'/><polygon fill='#666' points='720 300 810 150 630 150'/><polygon fill='#FFF' points='900 300 810 450 990 450'/><polygon fill='#999' points='900 300 990 150 810 150'/><polygon points='0 600 -90 750 90 750'/><polygon fill='#666' points='0 600 90 450 -90 450'/><polygon fill='#AAA' points='180 600 90 750 270 750'/><polygon fill='#444' points='180 600 270 450 90 450'/><polygon fill='#444' points='360 600 270 750 450 750'/><polygon fill='#999' points='360 600 450 450 270 450'/><polygon fill='#666' points='540 600 630 450 450 450'/><polygon fill='#222' points='720 600 630 750 810 750'/><polygon fill='#FFF' points='900 600 810 750 990 750'/><polygon fill='#222' points='900 600 990 450 810 450'/><polygon fill='#DDD' points='0 900 90 750 -90 750'/><polygon fill='#444' points='180 900 270 750 90 750'/><polygon fill='#FFF' points='360 900 450 750 270 750'/><polygon fill='#AAA' points='540 900 630 750 450 750'/><polygon fill='#FFF' points='720 900 810 750 630 750'/><polygon fill='#222' points='900 900 990 750 810 750'/><polygon fill='#222' points='1080 300 990 450 1170 450'/><polygon fill='#FFF' points='1080 300 1170 150 990 150'/><polygon points='1080 600 990 750 1170 750'/><polygon fill='#666' points='1080 600 1170 450 990 450'/><polygon fill='#DDD' points='1080 900 1170 750 990 750'/></g></svg>",
	'Diamond Sunset': "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' ><defs><linearGradient id='a' x1='0' x2='0' y1='0' y2='1'><stop offset='0'  stop-color='#80F'/><stop offset='1'  stop-color='#f40'/></linearGradient></defs><pattern id='b'  width='24' height='24' patternUnits='userSpaceOnUse'><circle  fill='#ffffff' cx='12' cy='12' r='12'/></pattern><rect width='100%' height='100%' fill='url(#a)'/><rect width='100%' height='100%' fill='url(#b)' fill-opacity='0.1'/></svg>",
	'Square Versatiles': "<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='40' viewBox='0 0 100 100'><rect fill='#f29e03' width='100' height='100'/><rect x='0' y='0' width='46' height='46'  fill-opacity='0.6' fill='#ffa61d'/></svg>",
	'Rose Petals': "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 800 400'><rect fill='#330000' width='800' height='400'/><defs><radialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'><stop  offset='0' stop-color='#D18'/><stop  offset='1' stop-color='#330000'/></radialGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'><stop offset='0'  stop-color='#FA3' stop-opacity='0'/><stop offset='1'  stop-color='#FA3' stop-opacity='0.5'/></linearGradient></defs><rect fill='url(#a)' width='800' height='400'/><g fill-opacity='0.4'><circle fill='url(#b)' cx='267.5' cy='61' r='300'/><circle fill='url(#b)' cx='532.5' cy='61' r='300'/><circle fill='url(#b)' cx='400' cy='30' r='300'/></g></svg>",
	'Dragon Scales': "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'><rect fill='#330055' width='100' height='1000'/><g fill-opacity='1'><circle  fill='#330055' cx='50' cy='0' r='50'/><g fill='#3a015d' ><circle cx='0' cy='50' r='50'/><circle cx='100' cy='50' r='50'/></g><circle  fill='#410165' cx='50' cy='100' r='50'/><g fill='#48026e' ><circle cx='0' cy='150' r='50'/><circle cx='100' cy='150' r='50'/></g><circle  fill='#500376' cx='50' cy='200' r='50'/><g fill='#57047e' ><circle cx='0' cy='250' r='50'/><circle cx='100' cy='250' r='50'/></g><circle  fill='#5f0587' cx='50' cy='300' r='50'/><g fill='#67068f' ><circle cx='0' cy='350' r='50'/><circle cx='100' cy='350' r='50'/></g><circle  fill='#6f0798' cx='50' cy='400' r='50'/><g fill='#7707a0' ><circle cx='0' cy='450' r='50'/><circle cx='100' cy='450' r='50'/></g><circle  fill='#8008a9' cx='50' cy='500' r='50'/><g fill='#8909b1' ><circle cx='0' cy='550' r='50'/><circle cx='100' cy='550' r='50'/></g><circle  fill='#9109ba' cx='50' cy='600' r='50'/><g fill='#9a09c3' ><circle cx='0' cy='650' r='50'/><circle cx='100' cy='650' r='50'/></g><circle  fill='#a309cb' cx='50' cy='700' r='50'/><g fill='#ad09d4' ><circle cx='0' cy='750' r='50'/><circle cx='100' cy='750' r='50'/></g><circle  fill='#b608dc' cx='50' cy='800' r='50'/><g fill='#c007e5' ><circle cx='0' cy='850' r='50'/><circle cx='100' cy='850' r='50'/></g><circle  fill='#c905ee' cx='50' cy='900' r='50'/><g fill='#d303f6' ><circle cx='0' cy='950' r='50'/><circle cx='100' cy='950' r='50'/></g><circle  fill='#D0F' cx='50' cy='1000' r='50'/></g></svg>",
	'Colorful Stingrays': "<svg xmlns='http://www.w3.org/2000/svg'  width='600' height='100' viewBox='0 0 600 100'><rect fill='#ffffff' width='600' height='100'/><g  stroke='#FFF' stroke-width='0' stroke-miterlimit='10' stroke-opacity='1'><circle  fill='#037B79' cx='0' cy='0' r='50'/><circle  fill='#92DEBA' cx='100' cy='0' r='50'/><circle  fill='#FFFFD8' cx='200' cy='0' r='50'/><circle  fill='#CAF2FF' cx='300' cy='0' r='50'/><circle  fill='#6FCCFF' cx='400' cy='0' r='50'/><circle  fill='#006EB4' cx='500' cy='0' r='50'/><circle  fill='#037B79' cx='600' cy='0' r='50'/><circle cx='-50' cy='50' r='50'/><circle  fill='#53ac9a' cx='50' cy='50' r='50'/><circle  fill='#ceefc1' cx='150' cy='50' r='50'/><circle  fill='#ffffff' cx='250' cy='50' r='50'/><circle  fill='#9de0fe' cx='350' cy='50' r='50'/><circle  fill='#3e9cda' cx='450' cy='50' r='50'/><circle  fill='#00789c' cx='550' cy='50' r='50'/><circle cx='650' cy='50' r='50'/><circle  fill='#037B79' cx='0' cy='100' r='50'/><circle  fill='#92DEBA' cx='100' cy='100' r='50'/><circle  fill='#FFFFD8' cx='200' cy='100' r='50'/><circle  fill='#CAF2FF' cx='300' cy='100' r='50'/><circle  fill='#6FCCFF' cx='400' cy='100' r='50'/><circle  fill='#006EB4' cx='500' cy='100' r='50'/><circle  fill='#037B79' cx='600' cy='100' r='50'/><circle cx='50' cy='150' r='50'/><circle cx='150' cy='150' r='50'/><circle cx='250' cy='150' r='50'/><circle cx='350' cy='150' r='50'/><circle cx='450' cy='150' r='50'/><circle cx='550' cy='150' r='50'/></g></svg>",
	'Vanishing Stripes': "<svg xmlns='http://www.w3.org/2000/svg'  width='2000' height='2000' viewBox='0 0 800 800'><rect fill='#000022' width='800' height='800'/><g fill='none' stroke-opacity='1'><g  stroke='#026' stroke-width='17'><line x1='-8' y1='-8' x2='808' y2='808'/><line x1='-8' y1='792' x2='808' y2='1608'/><line x1='-8' y1='-808' x2='808' y2='8'/></g><g  stroke='#002163' stroke-width='16'><line x1='-8' y1='767' x2='808' y2='1583'/><line x1='-8' y1='17' x2='808' y2='833'/><line x1='-8' y1='-33' x2='808' y2='783'/><line x1='-8' y1='-783' x2='808' y2='33'/></g><g  stroke='#002060' stroke-width='15'><line x1='-8' y1='742' x2='808' y2='1558'/><line x1='-8' y1='42' x2='808' y2='858'/><line x1='-8' y1='-58' x2='808' y2='758'/><line x1='-8' y1='-758' x2='808' y2='58'/></g><g  stroke='#001f5c' stroke-width='14'><line x1='-8' y1='67' x2='808' y2='883'/><line x1='-8' y1='717' x2='808' y2='1533'/><line x1='-8' y1='-733' x2='808' y2='83'/><line x1='-8' y1='-83' x2='808' y2='733'/></g><g  stroke='#001e59' stroke-width='13'><line x1='-8' y1='92' x2='808' y2='908'/><line x1='-8' y1='692' x2='808' y2='1508'/><line x1='-8' y1='-108' x2='808' y2='708'/><line x1='-8' y1='-708' x2='808' y2='108'/></g><g  stroke='#001d56' stroke-width='12'><line x1='-8' y1='667' x2='808' y2='1483'/><line x1='-8' y1='117' x2='808' y2='933'/><line x1='-8' y1='-133' x2='808' y2='683'/><line x1='-8' y1='-683' x2='808' y2='133'/></g><g  stroke='#001c53' stroke-width='11'><line x1='-8' y1='642' x2='808' y2='1458'/><line x1='-8' y1='142' x2='808' y2='958'/><line x1='-8' y1='-158' x2='808' y2='658'/><line x1='-8' y1='-658' x2='808' y2='158'/></g><g  stroke='#001b4f' stroke-width='10'><line x1='-8' y1='167' x2='808' y2='983'/><line x1='-8' y1='617' x2='808' y2='1433'/><line x1='-8' y1='-633' x2='808' y2='183'/><line x1='-8' y1='-183' x2='808' y2='633'/></g><g  stroke='#001a4c' stroke-width='9'><line x1='-8' y1='592' x2='808' y2='1408'/><line x1='-8' y1='192' x2='808' y2='1008'/><line x1='-8' y1='-608' x2='808' y2='208'/><line x1='-8' y1='-208' x2='808' y2='608'/></g><g  stroke='#001949' stroke-width='8'><line x1='-8' y1='567' x2='808' y2='1383'/><line x1='-8' y1='217' x2='808' y2='1033'/><line x1='-8' y1='-233' x2='808' y2='583'/><line x1='-8' y1='-583' x2='808' y2='233'/></g><g  stroke='#001846' stroke-width='7'><line x1='-8' y1='242' x2='808' y2='1058'/><line x1='-8' y1='542' x2='808' y2='1358'/><line x1='-8' y1='-558' x2='808' y2='258'/><line x1='-8' y1='-258' x2='808' y2='558'/></g><g  stroke='#001743' stroke-width='6'><line x1='-8' y1='267' x2='808' y2='1083'/><line x1='-8' y1='517' x2='808' y2='1333'/><line x1='-8' y1='-533' x2='808' y2='283'/><line x1='-8' y1='-283' x2='808' y2='533'/></g><g  stroke='#00163f' stroke-width='5'><line x1='-8' y1='292' x2='808' y2='1108'/><line x1='-8' y1='492' x2='808' y2='1308'/><line x1='-8' y1='-308' x2='808' y2='508'/><line x1='-8' y1='-508' x2='808' y2='308'/></g><g  stroke='#00153c' stroke-width='4'><line x1='-8' y1='467' x2='808' y2='1283'/><line x1='-8' y1='317' x2='808' y2='1133'/><line x1='-8' y1='-333' x2='808' y2='483'/><line x1='-8' y1='-483' x2='808' y2='333'/></g><g  stroke='#001439' stroke-width='3'><line x1='-8' y1='342' x2='808' y2='1158'/><line x1='-8' y1='442' x2='808' y2='1258'/><line x1='-8' y1='-458' x2='808' y2='358'/><line x1='-8' y1='-358' x2='808' y2='458'/></g><g  stroke='#001336' stroke-width='2'><line x1='-8' y1='367' x2='808' y2='1183'/><line x1='-8' y1='417' x2='808' y2='1233'/><line x1='-8' y1='-433' x2='808' y2='383'/><line x1='-8' y1='-383' x2='808' y2='433'/></g><g  stroke='#013' stroke-width='1'><line x1='-8' y1='392' x2='808' y2='1208'/><line x1='-8' y1='-408' x2='808' y2='408'/></g></g></svg>",
	'Sun Tornado': "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'><rect fill='#ee5522' width='2000' height='1500'/><defs><radialGradient id='a' gradientUnits='objectBoundingBox'><stop  offset='0' stop-color='#FB3'/><stop  offset='1' stop-color='#ee5522'/></radialGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'><stop  offset='0' stop-color='#f7882b'/><stop  offset='1' stop-color='#ee5522'/></linearGradient><path id='s' fill='url(#b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/><g id='g'><use href='#s' transform='scale(0.12) rotate(60)'/><use href='#s' transform='scale(0.2) rotate(10)'/><use href='#s' transform='scale(0.25) rotate(40)'/><use href='#s' transform='scale(0.3) rotate(-20)'/><use href='#s' transform='scale(0.4) rotate(-30)'/><use href='#s' transform='scale(0.5) rotate(20)'/><use href='#s' transform='scale(0.6) rotate(60)'/><use href='#s' transform='scale(0.7) rotate(10)'/><use href='#s' transform='scale(0.835) rotate(-40)'/><use href='#s' transform='scale(0.9) rotate(40)'/><use href='#s' transform='scale(1.05) rotate(25)'/><use href='#s' transform='scale(1.2) rotate(8)'/><use href='#s' transform='scale(1.333) rotate(-60)'/><use href='#s' transform='scale(1.45) rotate(-30)'/><use href='#s' transform='scale(1.6) rotate(10)'/></g></defs><g  transform='rotate(0 0 0)'><g  transform='rotate(0 0 0)'><circle fill='url(#a)' r='3000'/><g opacity='0.5'><circle fill='url(#a)' r='2000'/><circle fill='url(#a)' r='1800'/><circle fill='url(#a)' r='1700'/><circle fill='url(#a)' r='1651'/><circle fill='url(#a)' r='1450'/><circle fill='url(#a)' r='1250'/><circle fill='url(#a)' r='1175'/><circle fill='url(#a)' r='900'/><circle fill='url(#a)' r='750'/><circle fill='url(#a)' r='500'/><circle fill='url(#a)' r='380'/><circle fill='url(#a)' r='250'/></g><g  transform='rotate(0 0 0)'><use href='#g' transform='rotate(10)'/><use href='#g' transform='rotate(120)'/><use href='#g' transform='rotate(240)'/></g><circle fill-opacity='0.1' fill='url(#a)' r='3000'/></g></g></svg>",
	'Rainbow Vortex': "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800'><rect fill='#ff9d00' width='1600' height='800'/><g stroke='#000' stroke-width='66.7' stroke-opacity='0.05' ><circle  fill='#ff9d00' cx='0' cy='0' r='1800'/><circle  fill='#fb8d17' cx='0' cy='0' r='1700'/><circle  fill='#f47d24' cx='0' cy='0' r='1600'/><circle  fill='#ed6e2d' cx='0' cy='0' r='1500'/><circle  fill='#e35f34' cx='0' cy='0' r='1400'/><circle  fill='#d85239' cx='0' cy='0' r='1300'/><circle  fill='#cc453e' cx='0' cy='0' r='1200'/><circle  fill='#be3941' cx='0' cy='0' r='1100'/><circle  fill='#b02f43' cx='0' cy='0' r='1000'/><circle  fill='#a02644' cx='0' cy='0' r='900'/><circle  fill='#901e44' cx='0' cy='0' r='800'/><circle  fill='#801843' cx='0' cy='0' r='700'/><circle  fill='#6f1341' cx='0' cy='0' r='600'/><circle  fill='#5e0f3d' cx='0' cy='0' r='500'/><circle  fill='#4e0c38' cx='0' cy='0' r='400'/><circle  fill='#3e0933' cx='0' cy='0' r='300'/><circle  fill='#2e062c' cx='0' cy='0' r='200'/><circle  fill='#210024' cx='0' cy='0' r='100'/></g></svg>",
	'Flat Mountains': "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'><rect fill='#ff7700' width='1600' height='900'/><polygon fill='#cc0000'  points='957 450 539 900 1396 900'/><polygon fill='#aa0000'  points='957 450 872.9 900 1396 900'/><polygon fill='#d6002b'  points='-60 900 398 662 816 900'/><polygon fill='#b10022'  points='337 900 398 662 816 900'/><polygon fill='#d9004b'  points='1203 546 1552 900 876 900'/><polygon fill='#b2003d'  points='1203 546 1552 900 1162 900'/><polygon fill='#d3006c'  points='641 695 886 900 367 900'/><polygon fill='#ac0057'  points='587 900 641 695 886 900'/><polygon fill='#c4008c'  points='1710 900 1401 632 1096 900'/><polygon fill='#9e0071'  points='1710 900 1401 632 1365 900'/><polygon fill='#aa00aa'  points='1210 900 971 687 725 900'/><polygon fill='#880088'  points='943 900 1210 900 971 687'/></svg>",
};
function addXmlnsToSvg(svgString) {
	if (!/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/.test(svgString) && !/xmlns='http:\/\/www\.w3\.org\/2000\/svg'/.test(svgString)) {
		svgString = svgString.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
	}
	return svgString;
}
function encodeSpecialCharacters(svgString) {
	return svgString.replace(/[^a-zA-Z0-9\-_ ="']/g, function (match) {
		return encodeURIComponent(match);
	});
}
function convertQuotes(svgString, targetQuote) {
	var oppositeQuote = (targetQuote === '"') ? "'" : '"';
	return svgString.replace(new RegExp(oppositeQuote, 'g'), targetQuote);
}
function decodeSpecialCharacters(svgString) {
	return decodeURIComponent(svgString);
}
document.addEventListener('DOMContentLoaded', function () {
	let svgDropdown = '', svgDropdownMenu = document.querySelector('.svg-samples');
	for (const svgBg in svgSample) {
		svgDropdown += '<li><a class="dropdown-item" href="javascript:void(0)" data-name="'+svgBg+'">'+svgSample[svgBg]+svgBg+'</a></li>';
	};
	svgDropdown += '<li><span class="dropdown-attribution d-block p-2 pb-0 text-wrap small">Icons by <a href="https://www.svgbackgrounds.com/" target="_blank">SVGBackgrounds.com</a></span></li>';
	svgDropdownMenu.innerHTML = svgDropdown;
	svgDropdownMenu.addEventListener('click', function(e) {
		e.preventDefault();
		//e.stopPropagation();
		if (e.target.classList.contains('dropdown-item')) {
			let name = e.target.getAttribute('data-name');
			if(name && svgSample[name] && svgSample[name] !== undefined) {
				document.querySelector('.svg-source').value = svgSample[name];
				encodeSVG();
			}
		}
	});
	svgDropdownMenu.querySelector('.dropdown-attribution').addEventListener('click', function(e) {
		e.stopPropagation();
	});

	Coloris.setInstance('[name="background"]', {
		alpha: true,
		forceAlpha: true,
		formatToggle: false,
		theme: 'polaroid',
		swatches: [
			'#ffffff',
			'#F44336',
			'#E91E63',
			'#9C27B0',
			'#673AB7',
			'#3F51B5',
			'#2196F3',
			'#03A9F4',
			'#00BCD4',
			'#009688',
			'#4CAF50',
			'#8BC34A',
			'#CDDC39',
			'#FFEB3B',
			'#FFC107',
			'#FF9800',
			'#FF5722',
			'#795548',
			'#9E9E9E',
			'#607D8B',
			'#000000',
		],
		swatchesOnly: true,
		onChange: function(data) {
			if(data) {
				document.querySelector('.svg-preview').style.backgroundColor = data;
			}
		}
	});
	var encodeSVG = function() {
		var svgStr  = document.querySelector('.svg-source').value, quote = document.querySelector('[name="quote"]:checked').value;
		if(svgStr) {
			svgStr = addXmlnsToSvg(svgStr);
			svgStr = convertQuotes(svgStr,quote=='single'?'\'':'"');
			var encodedValue = encodeSpecialCharacters(svgStr);
			var cssValue = quote=='single'?'url("data:image/svg+xml,' + encodedValue + '")':'url(\'data:image/svg+xml,' + encodedValue + '\')';
			document.querySelector('.svg-encoded').value = encodedValue;
			document.querySelector('.svg-background').innerHTML = 'background-image: '+cssValue+';';
			document.querySelector('.svg-preview .bg').style.backgroundImage = cssValue;
		}
	}
	var decodeSVG = function () {
		var svgStr  = document.querySelector('.svg-encoded').value, quote = document.querySelector('[name="quote"]:checked').value;
		if(svgStr) {
			var decodedValue = svgStr;
			svgStr = decodeSpecialCharacters(svgStr);
			svgStr = convertQuotes(svgStr,quote=='single'?'\'':'"');
			var cssValue = quote=='single'?'url("data:image/svg+xml,' + decodedValue + '")':'url(\'data:image/svg+xml,' + decodedValue + '\')';
			document.querySelector('.svg-source').value = svgStr;
			document.querySelector('.svg-background').innerHTML = 'background-image: '+cssValue+';';
			document.querySelector('.svg-preview .bg').style.backgroundImage = cssValue;
		}
	}
	document.querySelector('.svg-source').addEventListener(('input','change','keyup'), encodeSVG);
	document.querySelector('.svg-encoded').addEventListener(('input','change','keyup'), decodeSVG);
	document.querySelectorAll('[name="quote"]').forEach(function(inp) {
		inp.addEventListener(('change'),encodeSVG);
	});
	document.querySelectorAll('[data-copy]').forEach(function(btn) {
		btn.addEventListener('click', function() {
			var text = '', card = this.closest('.card');
			if(card.querySelector('textarea.form-control')) {
				text = card.querySelector('textarea.form-control').value;
			}else if(card.querySelector('div.form-control')) {
				text = card.querySelector('div.form-control').textContent;
			}
			if(text != '') {
				mk.copyToClipboard(text);
			}
		});
	});
});
</script>