function createTextLine(indentationLevel, line) {
	const indentationLevelMultiplier = 4;
	
	let textLineNode = document.createElement("div");
	textLineNode.classList.add("ai-textLine");
	textLineNode.textContent = line;
	
	textLineNode.style.paddingLeft = `${indentationLevel * indentationLevelMultiplier}ch`;
	return textLineNode;
}

function createList(textLines) {
	let list = document.createElement("ul");
	for (let i = 0; i < textLines.length; i++) {
		let listItem = document.createElement("li");
		listItem.textContent = textLines[i];
		list.append(listItem);
	}
	
	//return list;
	
	let parent = document.createElement("div");
	parent.classList.add("ai-list");
	
	let title = document.createElement("strong");
	title.textContent = "Attached list:";
	
	parent.append(title, list);
	
	
	return parent;
}

function createSpacer() {
	let spacerNode = document.createElement("div");
	spacerNode.classList.add("ai-spacer");
	return spacerNode;
}

function prepareChecks(keys, textSource) {
	let lists = [];
	let nodes = [];
	
	while (keys.length !== 0 && keys[keys.length - 1].startsWith("List_")) {
		let listKey = keys.pop();
		let listItems = textSource[listKey].trim().split("\n");
		lists.unshift(createList(listItems));
	}
	
	for (let k = 0; k < keys.length; k++) {
		let key = keys[k];
		let textLines = textSource[key].split("\n");
		
		textLines.forEach(line => {
			if (line.trim().length === 0) {
				let node = createSpacer();
				nodes.push(node);
			} else {
				let indentationLevel = 0;
				while (line.charAt(indentationLevel) === "\t") {
					indentationLevel++;
				}
				
				line = line.trim();
				let node = createTextLine(indentationLevel, line);
				nodes.push(node);
			}
		});
		
		// In-betweener spacers
		if (k+1 !== keys.length) {
			nodes.push(createSpacer());
		}
	}
	
	if (keys.length === 0) {
		nodes.push(createTextLine(0, "(No applicable AI procedures)"));
	}
	
	return nodes.concat(lists);
}
