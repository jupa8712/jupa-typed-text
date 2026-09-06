import Typed from 'typed.js';
document.addEventListener("DOMContentLoaded", function () {
	const typedStrings = document.querySelectorAll('.typed-strings');
	typedStrings.forEach((typedString) => {
		new Typed('.' + typedString.id, {
			stringsElement: '#' + typedString.id,
			typeSpeed: Number(typedString.dataset.typeSpeed),
			startDelay: Number(typedString.dataset.startDelay),
			backDelay: Number(typedString.dataset.backDelay),
			backSpeed: Number(typedString.dataset.backSpeed),
			loop: (typedString.dataset.loop === 'true'),
			smartBackspace: (typedString.dataset.smartBackspace === 'true'),
			shuffle: (typedString.dataset.shuffle === 'true'),
			onComplete: () => {
				const callbackName = typedString.dataset.onComplete;
				if (callbackName && window.typed?.onComplete?.[callbackName]) {
					window.typed.onComplete[callbackName]();
				}
			}
		});
	})
});
