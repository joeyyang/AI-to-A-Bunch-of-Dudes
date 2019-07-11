walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	if (node && node.tagName) {
		var nodeShouldBeIgnored = (node.tagName == 'INPUT' || node.tagName == 'TEXTAREA');

		if (nodeShouldBeIgnored) return;
	}

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

	v = v.replace(/\bAI\b/g, "A Bunch of Dudes");
	v = v.replace(/\bAI tech\b/g, "A Bunch of Dudes");
	v = v.replace(/\bAI technology\b/g, "A Bunch of Dudes");
	v = v.replace(/\bArtificial Intelligence\b/g, "A Bunch of Dudes");
	v = v.replace(/\bartificial intelligence\b/g, "a bunch of dudes");
	v = v.replace(/\bartificial intelligence technology\b/g, "a bunch of dudes");
	v = v.replace(/\bartificial intelligence tech\b/g, "a bunch of dudes");

	textNode.nodeValue = v;
}
