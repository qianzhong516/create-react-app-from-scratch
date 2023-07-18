function component() {
	const element = document.createElement('div');

	element.innerHTML = 'Create React From Scratch!';

	return element;
}

document.body.appendChild(component());
