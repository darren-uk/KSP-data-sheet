async function fetchData() {
	// Get json file
	let response = await fetch("./json/info.json");
	let data = await response.json();

	//create template
	function planetTemplate(planet) {
		return `
        <article class="card" id="${planet.name}-link">
            <div>
                <p class="item bolder">Name</p>
                <p class="value bolder">${planet.name}</p>
            </div>
            <div>
                <p class="item">Parent body</p>
                <p class="value">${planet.parent_body}</p>
            </div>
            <div>
                <p class="item">Equatorial radius</p>
                <p class="value">${planet.equatorial_radius} <span class="measurment">KM</span></p>
            </div>
            <div>
                <p class="item">Atmosphere</p>
                <p class="value">${planet.atmosphere}</p>
            </div>
            <div>
                <p class="item">Atmosphere limit</p>
                <p class="value">${planet.atmosphere_limit} <span class="measurment">KM</span></p>
            </div>
            <div>
                <p class="item">Tallest Peak</p>
                <p class="value">${planet.tallest_peak} <span class="measurment">KM</span></p>
            </div>
            <div>
                <p class="item">Low Space</p>
                <p class="value">${planet.low_space} <span class="measurment">KM</span></p>
            </div>
            <div>
                <p class="item">High Space</p>
                <p class="value">${planet.high_space} <span class="measurment">KM ></span></p>
            </div>
            <div>
                <p class="item">Sphere of influence<span class="info">SOI</span></p>
                <p class="value">${planet.sphere_of_influence} <span class="measurment">KM</span></p>
            </div>
            <div>
                <p class="item">Shadow duration at ground<span class="info">on equatorial line</span></p>
                <p class="value">${planet.shadow_duration_at_ground_hrs} <span class="measurment">HH:MM</span></p>
            </div>
            <div>
                <p class="item">shadow duration at 100 km<span class="info">on equatorial line</span></p>
                <p class="value">${planet.shadow_duration_at_100km_hrs} <span class="measurment">HH:MM</span></p>
            </div>
            <div>
                <p class="item">Synchronous orbit</p>
                <p class="value">${planet.synchronous_orbit} <span class="measurment">KM</span></p>
            </div>
            <div>
                <p class="item">gravity</p>
                <p class="value">${planet.gravity} <span class="measurment">G</span></p>
            </div>
            <div>
                <p class="item">escape velocity</p>
                <p class="value">${planet.escape_velocity} <span class="measurment">m/s</span></p>
            </div>
            <div>
                <p class="item">surface rca</p>
                <p class="value">${planet.surface_rca}</p>
            </div>
            <div>
                <p class="item">information :</p>
                <p class="value">${planet.information}</p>
            </div>

        </article>
        `;
	}

	document.getElementById("planet-info").innerHTML = `
    ${data.bodies.map(planetTemplate).join("")}
    `;

	//Quick links
	function quickLinks(planet) {
		return `
        <a href="#${planet.name}-link" class="planet-link">${planet.name}</a>
        `;
	}

	document.getElementById("quick-links").innerHTML = `
    ${data.bodies.map(quickLinks).join("")}
    `;

	//Last Modified Date of index.html

	let dateContainer = document.querySelector("#date-display");
	let htmlModifiedDate = new Date(document.lastModified);
	let jsonModifiedDate = data.updated;

	if (jsonModifiedDate) {
		dateContainer.innerText = `Json data last updated on ${jsonModifiedDate}`;
	} else {
		dateContainer.innerText = `Page last modified on ${htmlModifiedDate}`;
	}
}

// ASYNC ENDS --------------------------

//Back to top button

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
}
