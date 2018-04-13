const contentBlock = function (cx, html) {
	const display = function() {
		while (cx.firstChild) {
			cx.removeChild(cx.firstChild);
		}
		cx.insertAdjacentHTML('afterbegin', html);
	}

	return {
		display
	};
};

export default contentBlock;