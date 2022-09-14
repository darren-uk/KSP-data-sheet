async function fetchData() {
	// Get json file
	let response = await fetch("./json/info.json");
	let data = await response.json();

	// console.log(data);

	//const  DOM variables

	const planetSection = document.querySelector("#planet-info");

	//for every object in array create HTML

	for (let i = 0; i < data.bodies.length; i++) {
		// console.log(data.bodies[i].name);
		let body = data.bodies[i];
		console.log(body);

		//create elements and assign classes
		const card = document.createElement("article");
		card.className = "card";
		const div = document.createElement("div");
		const itemParagraph = document.createElement("p");
		itemParagraph.className = "item";
		const valueParagraph = document.createElement("p");
		valueParagraph.className = "value";

		//add data into paragraphs
		itemParagraph.innerText = "Name";
		valueParagraph.innerText = data.bodies[i].name;

		//insert elements into DOM
		planetSection.appendChild(card);
		card.appendChild(div);
		div.appendChild(itemParagraph);
		div.appendChild(valueParagraph);
	}

	// console.log(data);
}
