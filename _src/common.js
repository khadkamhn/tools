/*!
 * Copyright (c) 2024 Mohan Khadka
 * Licensed under the MIT License (MIT)
 * https://mohankhadka.com.np/
 */
document.addEventListener('DOMContentLoaded', function() {
	mk = {
		init: function() {
			this.form();
			this.misc();
			this.theme();
		},
		id: function (length) {
			var txt = "";
			var pos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			for (var i = 0; i < length; i++)
				txt += pos.charAt(Math.floor(Math.random() * pos.length));
			return txt;
		},
		confirm: function (text, okay, cancel, alert, loader) {
			try {
				var id = mk.id(10);

				if (!document.querySelector('.mk-confirm-wrap')) {
					var confirmWrap = document.createElement('div');
					confirmWrap.className = 'mk-confirm-wrap';
					document.body.appendChild(confirmWrap);
				}

				var modalHTML = '<div><div class="mk-confirm" style="z-index:99999"><div class="modal-backdrop show"></div><div class="modal d-block"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-def btn-okay">Okay</button><button type="button" class="btn btn-def btn-cancel">Cancel</button></div></div></div></div></div></div>';
				
				var wrapperDiv = document.createElement('div');
				wrapperDiv.innerHTML = modalHTML;

				var modalBody = wrapperDiv.querySelector('.modal-body');
				modalBody.style.padding = '20px 15px';
				modalBody.innerHTML = text;
				modalBody.classList.add('text-center');

				var modalFooter = wrapperDiv.querySelector('.modal-footer');
				modalFooter.style.padding = 0;
				modalFooter.style.flexWrap = 'nowrap';
				modalFooter.classList.add('justify-content-between');

				var modalButtons = wrapperDiv.querySelectorAll('.btn');
				modalButtons.forEach(function (button) {
					button.style.width = '100%';
					button.style.margin = 0;
					button.style.borderRadius = 0;
					button.style.border = '1px solid #ccc';
					button.style.padding = '12px';
				});

				var modalDialog = wrapperDiv.querySelector('.modal-dialog');
				modalDialog.style.maxWidth = '320px';
				modalDialog.style.transform = 'scale(0.5)';
				modalDialog.style.transition = 'all .2s cubic-bezier(.8,.5,.2,1.4)';
				modalDialog.style.opacity = 0;

				wrapperDiv.querySelector('.modal-content').style.overflow = 'hidden';

				wrapperDiv.querySelector('.modal').setAttribute('id', id);

				if (alert == true) {
					wrapperDiv.querySelector('.btn-cancel').remove();
				}
				if (loader == true) {
					wrapperDiv.querySelector('.btn-okay').remove();
					wrapperDiv.querySelector('.btn-cancel').remove();
					wrapperDiv.querySelector('.mk-confirm').classList.add('mk-loader');
				}

				document.querySelector('.mk-confirm-wrap').appendChild(wrapperDiv.firstChild);
				document.documentElement.style.overflow = 'hidden';

				/*document.querySelector('.mk-confirm').addEventListener('click', function (e) {
					e.preventDefault();
					if (e.target.classList.contains('btn-okay')) {
						if(okay)okay(true);
					} else {
						if(cancel)cancel(true);
					}

					var dialog = e.target.closest('.mk-confirm').querySelector('.modal-dialog');
					dialog.style.transform = 'scale(0.5)';
					dialog.addEventListener('transitionend', function () {
						e.target.closest('.mk-confirm').remove();
					});

					document.documentElement.style.overflow = '';
					return false;
				});*/
				document.querySelectorAll('.mk-confirm').forEach((mk_confirm)=>{
					mk_confirm.addEventListener('click', function (e) {
						e.preventDefault();
						if (e.target.classList.contains('btn-okay')) {
							if(okay)okay(mk_confirm);
						} else {
							if(cancel)cancel(mk_confirm);
						}

						var dialog = e.target.closest('.mk-confirm').querySelector('.modal-dialog');
						dialog.style.transform = 'scale(0.5)';
						dialog.addEventListener('transitionend', function () {
							e.target.closest('.mk-confirm').remove();
						});

						document.documentElement.style.overflow = '';
						return false;
					});
				});

				setTimeout(function () {
					document.getElementById(id).querySelector('.modal-dialog').style.transform = 'scale(1)';
					document.getElementById(id).querySelector('.modal-dialog').style.opacity = 1;
					if(document.getElementById(id).querySelector('.btn-okay').length) {
						document.getElementById(id).querySelector('.btn-okay').focus();
					}
				}, 10);
				/*document.querySelector('.mk-confirm .modal').addEventListener('click', function (e) {
					if(!e.target.classList.contains('btn')) {
						e.stopPropagation();
					}
				});*/
				document.querySelectorAll('.mk-confirm .modal').forEach((mk_modal)=>{
					mk_modal.addEventListener('click', function (e) {
						if(!e.target.classList.contains('btn')) {
							e.stopPropagation();
						}
					});
				});

				return false;

			} catch (err) {
				console.error(err);
			}
		},
		alert: function (text, okay) {
			mk.confirm(text, function (action) {
				if (action && okay) okay(action);
			}, false, true);
		},
		toastr: function (text, type, duration, single) {
			try {
				var id, txtHead, txtBody, txtDate, idle;
				if (text instanceof Object) {
					txtHead = text.head && text.head.text ? text.head.text : null;
					txtDate = text.head && text.head.date ? text.head.date : null;
					txtBody = text.body ? text.body : null;
				} else {
					txtBody = text;
				}

				if (!document.querySelector('.toast-container')) {
					document.body.insertAdjacentHTML('beforeend', '<div class="toast-container position-fixed bottom-0 end-0 p-3">');
				}

				var toastContainer = document.querySelector('.toast-container');

				var toastrHtml = '<div class="toast ml-auto show" style="display:none"><div class="toast-header"><strong class="me-auto"></strong><small></small><button type="button" class="ml-2 mb-1 btn-close btn-close-white"></button></div><div class="toast-body"></div></div>';
				toastContainer.insertAdjacentHTML('beforeend', toastrHtml);

				var toast = toastContainer.querySelector('.toast:last-child');
				var toastHeader = toast.querySelector('.toast-header');
				var toastBody = toast.querySelector('.toast-body');
				var toastClose = toast.querySelector('.btn-close');

				if (txtHead || txtDate) {
					toastHeader.querySelector('strong').innerHTML = txtHead;
					toastHeader.querySelector('small').innerHTML = txtDate;
				} else {
					toastHeader.remove();
				}

				toastBody.innerHTML = txtBody;

				id = mk.id(10);
				toast.setAttribute('id', id);

				//toast.style.color = '#fff';
				toast.classList.add('text-bg-' + (type ? type : 'primary'),'text-white');
				toast.style.display = 'none';
				toastHeader.style.color = 'inherit';
				toastHeader.style.backgroundColor = 'rgba(0,0,0,.30)';
				toastClose.style.color = 'inherit';

				toastBody.addEventListener('click', function () {
					toast.style.display = 'none';
					if (idle) clearTimeout(idle);
				});

				toastClose.addEventListener('click', function () {
					toast.style.display = 'none';
					if (idle) clearTimeout(idle);
				});

				toastContainer.style.overflow = 'hidden';

				setTimeout(function () {
					toast.style.display = 'block';
				}, 10);

				idle = setTimeout(function () {
					toast.style.display = 'none';
					if (duration) {
						setTimeout(function () {
							toast.remove();
						}, 100);
					}
				}, duration ? duration : 6000);

				toast.addEventListener('mouseout', function () {
					var currentToast = this;
					idle = setTimeout(function () {
						currentToast.style.display = 'none';
						if (idle) clearTimeout(idle);
					}, duration ? duration : 6000);
				});

				toast.addEventListener('mouseover', function () {
					if (idle) clearTimeout(idle);
					idle = null;
				});
			} catch (err) {}
		},
		form: function() {
			try {
				document.querySelectorAll('input[type="range"][data-range]').forEach(function(slider) {
					const isVertical = slider.getAttribute('data-vertical');
					const minValue = slider.getAttribute('min');
					rangeSlider.create(slider, {
						polyfill: true,
						root: document,
						rangeClass: 'rangeSlider',
						disabledClass: 'rangeSlider--disabled',
						fillClass: 'rangeSlider__fill',
						bufferClass: 'rangeSlider__buffer',
						handleClass: 'rangeSlider__handle',
						startEvent: ['mousedown', 'touchstart', 'pointerdown'],
						moveEvent: ['mousemove', 'touchmove', 'pointermove'],
						endEvent: ['mouseup', 'touchend', 'pointerup'],
						vertical: isVertical,
						borderRadius: 10,
						onInit: function () {
							//console.info('onInit')
						},
						onSlideStart: function (position, value) {
							//console.info('onSlideStart', 'position: ' + position, 'value: ' + value);
						},
						onSlide: function (position, value) {
							//console.log('onSlide', 'position: ' + position, 'value: ' + value);
						},
						onSlideEnd: function (position, value) {
							//console.warn('onSlideEnd', 'position: ' + position, 'value: ' + value);
						}
					});
				});

				document.querySelectorAll('input[data-coloris]').forEach(function(coloris) {
					const theme = window.matchMedia('(prefers-color-scheme: dark)')?'dark':'light';
					coloris.addEventListener('click', e => {
						Coloris({
							alpha: true,
							format: 'mixed',
							themeMode: theme,
							formatToggle: false,
							/*swatches: [
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
							],*/
						});
					});
				});
			} catch(err) {}
		},
		loader: {
			show: function (text) {
				try {
					if (!document.querySelector('.mk-loader')) {
						mk.confirm(text ? text : 'Please wait...', false, false, false, true);
					}
				} catch (err) {}
			},
			hide: function () {
				var loader = document.querySelector('.mk-loader');
				if (loader) loader.remove();
			}
		},
		misc: function() {
			try {
				let logoHref = document.querySelector('.logo a').href;
				if(baseUrl=='' || logoHref=='') {
					document.querySelector('.logo a').href = '/';
				}
				// Sticky
				var stickyNav = function() {
					var header = document.querySelector('.header');
					var sticky = header.offsetTop;
					if (window.pageYOffset >= sticky) {
						header.classList.add('sticky')
					} else {
						header.classList.remove('sticky');
					}
				}
				window.onscroll = function() {stickyNav()};
			} catch (err) {}
		},
		theme: function() {
			try {
				if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').media === 'not all' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
					document.querySelector('body').setAttribute('data-bs-theme','dark');
				}
				function checkThemeChange(e) {
					if (e.matches) {
						document.querySelector('body').setAttribute('data-bs-theme','dark');
					}else{
						document.querySelector('body').removeAttribute('data-bs-theme');
					}
				}
				window.matchMedia('(prefers-color-scheme: dark)').addListener(checkThemeChange);
			} catch (err) {}
		},
		copyToClipboard: function(text, success, error) {
			if (navigator.clipboard) {
				navigator.clipboard.writeText(text)
					.then(() => {
						if(success)success(true);
						text = text.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
							return '&#'+i.charCodeAt(0)+';';
						});
						mk.toastr({head:{text:'Clipboard copied'},body:'<p>Text successfully copied to clipboard!</p><p class="p-2 bg-white'+(text.length>200?' text-truncate':'')+'"><code class="text-pre">'+text.substring(0, 200)+'</code></p>'},'success');
					})
					.catch((err) => {
						if(error)error(true);
						mk.toastr({head:{text:'Clipboard copied failed'},body:'<p>Unable to copy text to clipboard!</p><p><code>'+err+'</code></p>'},'danger');
					});
			} else {
				var textArea = document.createElement("textarea");
				textArea.value = text;
				document.body.appendChild(textArea);
				textArea.select();

				try {
					document.execCommand('copy');
					text = text.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
						return '&#'+i.charCodeAt(0)+';';
					});
					mk.toastr({head:{text:'Clipboard copied'},body:'<p>Text successfully copied to clipboard!</p><p class="p-2 bg-white'+(text.length>200?' text-truncate':'')+'"><code class="text-pre">'+text.substring(0, 200)+'</code></p>'},'success');
				} catch (err) {
					mk.toastr({head:{text:'Clipboard copied failed'},body:'<p>Unable to copy text to clipboard!</p><p><code>'+err+'</code></p>'},'danger');
				}

				document.body.removeChild(textArea);
			}
		},
		store: {
			set: function(key, value) {
				if(typeof Storage !== 'undefined') {
					if(key && value) {
						localStorage.setItem(key, value);
					}
				}
			},
			get: function(key) {
				if(typeof Storage !== 'undefined') {
					if(key) {
						return localStorage.getItem(key);
					}
				}
			}
		}
	};
	mk.init();
});