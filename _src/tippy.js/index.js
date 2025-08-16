import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

document.querySelectorAll('body [title]').forEach((title) => {
	const text = title.getAttribute('title')?.trim();
	const place = title.getAttribute('data-placement') ?? 'top';
	if (text) {
		tippy(title, {
			arrow: false,
			content: text,
			offset: [5, 5],
			placement: place,
			theme: 'material',
		});
		title.removeAttribute('title');
	}
});