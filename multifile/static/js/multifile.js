(function() {
	"use strict";

	// Bail if the browser already supports this.
	if ('multiple' in document.createElement('input')) return;

	// IE < 9 does not support Array::filter
	var filter = function(nl, fn) {
		var l = nl.length, arr = [];
		while(l--) if (fn(nl[l])) {
			arr.unshift(nl[l]);
		}
		return arr;
	};

	var mkel = function(name, attrs, children) {
		var el = document.createElement(name);
		if (attrs) for (var x in attrs) el.setAttribute(x, attrs[x]);
		if (children) for (var i = 0; i < children.length; i++) el.appendChild(children[i]);
		return el;
	};

	var multiFileInputs = filter(document.getElementsByTagName('input'),
		function(input) { return input.type === 'file' && input.hasAttribute('multiple'); });

	var wrapInput = function(input) {
		var remove = mkel('input', {
			type: 'button',
			value: 'Remove',
			className: 'multifile-remove'
		});

		remove.onclick = function() {
			wrapper.parentNode.removeChild(wrapper);
			remove.onclick = null;
			return false;
		};

		return mkel('div', {className: 'multifile-input-wrapper'}, [input, remove]);
	};

	var processInput = function(input) {
		input.removeAttribute('multiple');
		var nextSibling = input.nextSibling;
		var parent = input.parentNode;

		var add = mkel('input', {
			type: 'button',
			value: 'Add another',
			className: 'multifile-add'
		});
		add.onclick = function() {
			var newInput = document.createElement('input');
			newInput.type = 'file';
			newInput.className = input.className;
			newInput.name = input.name;
			container.insertBefore(wrapInput(newInput), add);
			return false;
		};

		var container = mkel('div', {'className': 'multifile-container'}, [wrapInput(input), add]);

		if (nextSibling) {
			parent.insertBefore(container, nextSibling);
		} else {
			parent.appendChild(container);
		}
	};

	for (var i = 0, l = multiFileInputs.length, input; i < l; i++) {
		processInput(multiFileInputs[i]);
	}
})();
