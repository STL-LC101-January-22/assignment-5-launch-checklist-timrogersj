// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById('missionTarget');      
            missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
                    
}

function validateInput(testInput) {
    //document.addEventListener("submit", function (event) {
       // event.preventDefault();

    if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else if (testInput.type !== isNaN) {
    return "Is a Number";
  }    
}


function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {
    let faultyItems = document.getElementById('faultyItems');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    /* pilotName = document.querySelector("input[name=pilotName]").value;
    copilotName = document.querySelector("input[name=copilotName]").value;
    fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    cargoMass = document.querySelector("input[name=cargoMass]").value; */
    list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";

    //document = 
    //launchStatus.innerHTML = 

    if (validateInput(pilotName) === "Empty" ||validateInput(copilotName) === "Empty" ||validateInput(fuelLevel) === "Empty" ||validateInput(cargoMass) === "Empty") {
        alert = "All fields are required!";
        return;
      } else if (validateInput(cargoMass) === "Not a number" ||validateInput(fuelLevel) === "Not a number") {
        alert = "You must enter a valid numerical input for these fields.";
        return;
      } else {
        



        launchStatus = document.getElementById('launchStatus');
        if (launchStatus = document.getElementById('launchStatus')) {
            faultyItems.style.visibility = "hidden";
            pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
    }

        if (fuelLevel < 10000){
            faultyItems.style.visibility = 'visible';
            pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = `rgb(199, 37, 78)`;
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        if (cargoMass > 10000) {
            faultyItems.style.visibility = 'visible';
            pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = `rgb(199, 37, 78)`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        }
        if (fuelLevel < 10000 && cargoMass > 10000) {
            faultyItems.style.visibility = 'visible';
            pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = `rgb(199, 37, 78)`;
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        }
        if (fuelLevel >= 10000 && cargoMass <= 10000) {
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = `rgb(65, 159, 106)`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }

   
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
}); 
    return planetsReturned;
    
}

function pickPlanet(planets) {           
    let index = Math.floor(Math.random() * (planets.length));
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
