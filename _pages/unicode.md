---
layout: default
title: "Unicode Nepali"
permalink: /unicode-nepali/
scripts: "/assets/js/nepalify.production.min.js"
inline_styles:
  - ".unicode-typing {
		font-size: 24px;
	}
	.input-wrap {
		position: relative;
	}
	[data-copy] {
		top: 6px;
		right: 6px;
		position: absolute;
		background-color: #fff;
	}"
---

<form class="mt-3 px-2" action="#" method="post">
	<div class="mb-3 text-center">
		<input id="romanized" type="radio" class="btn-check" name="layout" value="romanized" autocomplete="off" checked>
		<label class="btn" for="romanized">Romanized</label>
		<input id="traditional" type="radio" class="btn-check" name="layout" value="traditional" autocomplete="off">
		<label class="btn" for="traditional">Traditional</label>
	</div>
	<div class="mb-3 input-wrap">
		<span class="material-icons" data-copy="unicode">content_copy</span>
		<textarea id="unicode" class="form-control unicode-typing" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" rows="6"></textarea>
	</div>
</form>
<div class="keyboard d-flex flex-column align-items-center"></div>
<div class="keyboard-ref"></div>
<script>
function keyboardLayout(layout=null) {
	let data, keyRef = '', keyboard = document.querySelector('.keyboard'), keyRefElm = document.querySelector('.keyboard-ref');
	if(layout=='romanized' || layout===null || layout===undefined || layout==='') {
		data = {
			0: {
				eng: [['~','`'],['!','1'],['@','2'],['#','3'],['$','4'],['%','5'],['^','6'],['&','7'],['*','8'],['(','9'],[')','0'],['-','_'],['+','='],['Back']],
				nep: [['़','ऽ'],['','१'],['','२'],['','३'],['','४'],['','५'],['','६'],['','७'],['','८'],['','९'],['','०'],['॒','-'],['ZWNJ','ZWJ'],['Back']],
				key: ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace'],
			},
			1: {
				eng: [['Tab'],['','Q'],['','W'],['','E'],['','R'],['','T'],['','Y'],['','U'],['','I'],['','O'],['','P'],['{','['],['}',']'],['|','\\']],
				nep: [['Tab'],['ठ','ट'],['औ','ौ'],['ै','े'],['ृ','र'],['थ','त'],['ञ','य'],['ू','ु'],['ी','ि'],['ओ','ो'],['फ','प'],['ई','इ'],['ऐ','ए'],['ः','ॐ']],
				key: ['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash'],
			},
			2: {
				eng: [['Caps'],['','A'],['','S'],['','D'],['','F'],['','G'],['','H'],['','J'],['','K'],['','L'],[':',';'],['"','\''],['Enter']],
				nep: [['Caps'],['आ','ा'],['श','स'],['ध','द'],['ऊ','उ'],['घ','ग'],['अ','ह'],['झ','ज'],['ख','क'],['ळ','ल'],[':',';'],['"','\''],['Enter']],
				key: ['CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter'],
			},
			3: {
				eng: [['Shift'],['','Z'],['','X'],['','C'],['','V'],['','B'],['','N'],['','M'],['<',','],['>','.'],['?','/'],['Shift']],
				nep: [['Shift'],['ऋ','ष'],['ढ','ड'],['च','छ'],['ँ','व'],['भ','ब'],['ण','न'],['ं','म'],['ङ',','],['॥','।'],['?','्'],['Shift']],
				key: ['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ShiftRight'],
			},
			4: {
				eng: [['Ctrl'],['Alt'],['Space'],['Alt'],['Ctrl']],
				nep: [['Ctrl'],['Alt'],['Space'],['Alt'],['Ctrl']],
				key: [['ControlLeft'],['AltLeft'],['Space'],['AltRight'],['ControlRight']],
			}
		}
		keyRef += '<div class="ref-tbl d-sm-flex flex-nowrap justify-content-between align-items-center">';
			keyRef += '<div class="col">';
				keyRef += '<div class="ref">क + ् + ष = क्ष</div>';
				keyRef += '<div class="ref">त + ् + र = त्र</div>';
				keyRef += '<div class="ref">ज + ् + ञ = ज्ञ</div>';
			keyRef += '</div>';
			keyRef += '<div class="col">';
				keyRef += '<div class="ref">त + ् + त = त्त</div>';
				keyRef += '<div class="ref">द + ् + ध = द्ध</div>';
				keyRef += '<div class="ref">द + ् + व = द्व</div>';
			keyRef += '</div>';
			keyRef += '<div class="col">';
				keyRef += '<div class="ref">श + ् + र = श्र</div>';
				keyRef += '<div class="ref">द + ् + य = द्य</div>';
				keyRef += '<div class="ref">ट + ् + ट = ट्ट</div>';
			keyRef += '</div>';
			keyRef += '<div class="col">';
				keyRef += '<div class="ref en">ZWNJ = Zero Width Non Joiner</div>';
				keyRef += '<div class="ref">ढ+ु+ङ+्+ZWNJ+ग+ा  = ढुङ्गा</div>';
				keyRef += '<div class="ref en">ZWJ = Zero Width Joiner</div>';
				keyRef += '<div class="ref">म+र+्+ZWJ+य+ो =  मर्यो</div>';
			keyRef += '</div>';
		keyRef += '</div>';
		keyRef += '<div class="ref-ie p-3 text-center">उदाहरण :  " किंकर्तव्यबिमुढ् " लेख्नुपरेमा  kiMkr/tv/ybimuX/ लहरै दाब्नुपर्नेछ ।</div>';
	} else if(layout=='traditional') {
		data = {
			0: {
				eng: [['~','`'],['!','1'],['@','2'],['#','3'],['$','4'],['%','5'],['^','6'],['&','7'],['*','8'],['(','9'],[')','0'],['-','_'],['+','='],['Back']],
				nep: [['॥','ञ'],['ज्ञ','१'],['ई','२'],['घ','३'],['द्ध','४'],['छ','५'],['ट','६'],['ठ','७'],['ड','८'],['ढ','९'],['ण','०'],['ओ','औ'],['ZWNJ','ZWJ'],['Back']],
				key: ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace'],
			},
			1: {
				eng: [['Tab'],['','Q'],['','W'],['','E'],['','R'],['','T'],['','Y'],['','U'],['','I'],['','O'],['','P'],['{','['],['}',']'],['|','\\']],
				nep: [['Tab'],['त्त','त्र'],['ड्ढ','ध'],['ऐ','भ'],['द्व','च'],['ट्ट','त'],['ठ्ठ','थ'],['ऊ','ग'],['क्ष','ष'],['इ','य'],['ए','उ'],['ृ','र्'],['ै','े'],['ं','्']],
				key: ['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash'],
			},
			2: {
				eng: [['Caps'],['','A'],['','S'],['','D'],['','F'],['','G'],['','H'],['','J'],['','K'],['','L'],[':',';'],['"','\''],['Enter']],
				nep: [['Caps'],['आ','ब'],['ङ्क','क'],['ङ्ग','म'],['ँ','ा'],['द्द','न'],['झ','ज'],['ो','व'],['फ','प'],['ी','ि'],['ट्ठ','स'],['ू','ु'],['Enter']],
				key: ['CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter'],
			},
			3: {
				eng: [['Shift'],['','Z'],['','X'],['','C'],['','V'],['','B'],['','N'],['','M'],['<',','],['>','.'],['?','/'],['Shift']],
				nep: [['Shift'],['क्क','श'],['ह्य','ह'],['ऋ','अ'],['ॐ','ख'],['ौ','द'],['द्य','ल'],['ड्ड','ः'],['ङ','ऽ'],['श्र','।'],['रु','र'],['Shift']],
				key: ['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ShiftRight'],
			},
			4: {
				eng: [['Ctrl'],['Alt'],['Space'],['Alt'],['Ctrl']],
				nep: [['Ctrl'],['Alt'],['Space'],['Alt'],['Ctrl']],
				key: [['ControlLeft'],['AltLeft'],['Space'],['AltRight'],['ControlRight']],
			}
		}
		keyRef += '<div class="ref-tbl d-sm-flex flex-nowrap justify-content-between align-items-center">';
			keyRef += '<div class="col">';
				keyRef += '<div class="ref">क + ् + ष = क्ष</div>';
				keyRef += '<div class="ref">त + ् + र = त्र</div>';
				keyRef += '<div class="ref">ज + ् + ञ = ज्ञ</div>';
			keyRef += '</div>';
			keyRef += '<div class="col">';
				keyRef += '<div class="ref">त + ् + त = त्त</div>';
				keyRef += '<div class="ref">द + ् + ध = द्ध</div>';
				keyRef += '<div class="ref">द + ् + व = द्व</div>';
			keyRef += '</div>';
			keyRef += '<div class="col">';
				keyRef += '<div class="ref">श + ् + र = श्र</div>';
				keyRef += '<div class="ref">द + ् + य = द्य</div>';
				keyRef += '<div class="ref">ट + ् + ट = ट्ट</div>';
			keyRef += '</div>';
			keyRef += '<div class="col">';
				keyRef += '<div class="ref en">ZWNJ = Zero Width Non Joiner</div>';
				keyRef += '<div class="ref">श्र+ी+म+ा+न+्+ZWNJ+क+ा+े  = श्रीमान्‌काे</div>';
				keyRef += '<div class="ref en">ZWJ = Zero Width Joiner</div>';
				keyRef += '<div class="ref">र+्+ZWJ+य+ा+ल =  र्‍याल</div>';
			keyRef += '</div>';
		keyRef += '</div>';
		keyRef += '<div class="ref-ie p-3 text-center">उदाहरण :  " राष्ट्रिय " लेख्नुपरेमा  /fi\^\/lo लहरै दाब्नुपर्नेछ ।</div>';
	}
	let htm = '';
	for (const arr in data) {
		let rows = data[arr];
		htm += '<div class="d-flex flex-nowrap justify-content-between">'
		let cols = rows.eng.map((eng, index) => {
			let nep = rows.nep[index], cls = '', key = rows.key[index];
			if(parseInt(arr)+1==Object.keys(data).length) {
				switch(index) {
					case 2:
						cls = 'pointer2nd'
					break;
					default:
						cls = 'pinky';
				}
			} else {
				switch(index) {
					case 0:
					case 1:
						cls = 'pinky'
					break;
					case 2:
					case 9:
						cls = 'ring'
					break;
					case 3:
					case 8:
						cls = 'middle'
					break;
					case 4:
					case 7:
						cls = 'pointer1st';
					break;
					case 5:
					case 6:
						cls = 'pointer2nd';
					break;
					default:
						cls = 'pinky';
				}
			}
			if(arr==0 && index==12) {
				cls = cls+' pls-eql';
			}
			return {'en':eng,'ne':nep,'class':cls,'code':key};
		});
		for (const col in cols) {
			let key = cols[col], keyName = key.en.length==1?' '+key.en[0].toLowerCase():'';
			htm += '<div class="col">';
				htm += '<div class="key '+key.class+keyName+'" data-key="'+key.code+'">';
					if(key.en.length==2) {
						htm  += '<span class="en">'+key.en[0]+'<br>'+key.en[1]+'</span>';
						htm  += '<span class="ne">'+key.ne[0]+'<br>'+key.ne[1]+'</span>';
					} else {
						htm  += '<span>'+key.en[0]+'</span>';
					}
				htm += '</div>';
			htm += '</div>';
		}
		htm += '</div>';
	}
	keyboard.innerHTML = htm;
	keyRefElm.innerHTML = keyRef;
}
document.addEventListener('DOMContentLoaded', function () {
	try {
		document.querySelector('.unicode-typing').addEventListener('input',function() {
			let layoutType = document.querySelector('[name="layout"]:checked').value;
			const options = {
				layout: layoutType,
			};
			let text = this.value;
			let output = nepalify.format(text, options);
			this.value = output;
		});
	} catch(err) {
		console.error(err);
	}
	keyboardLayout();
	document.addEventListener("keyup", event => {
		const key = document.querySelector('[data-key="'+event.code+'"]');
		if(key) {
			key.classList.add('hit')
			key.addEventListener('animationend', () => {
				key.classList.remove('hit')
			});
		}
		document.querySelectorAll('.key').forEach(function(item){
			item.classList.remove('active');
		});
	});
	document.addEventListener("keydown", event => {
		document.querySelector('.unicode-typing').focus();
		const key = document.querySelector('[data-key="'+event.code+'"]');
		if(key) {
			key.classList.add('active');
		}
		var capsLockOn = event.getModifierState && event.getModifierState('CapsLock'), keyCaps = document.querySelector('.key.caps');
		if (capsLockOn) {
			keyCaps.classList.add('fill');
		} else {
			keyCaps.classList.remove('fill');
		}
	});
	document.querySelectorAll('.btn-check').forEach(function(btn) {
		btn.addEventListener('change',function(){
			if(this.value) {
				keyboardLayout(this.value);
			}
		});
	});
	document.querySelector('[data-copy="unicode"]').addEventListener('click',function() {
		let text = document.querySelector('.unicode-typing').value;
		mk.copyToClipboard(text);
	});
});
</script>