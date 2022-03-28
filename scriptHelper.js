// Write your helper functions here!
require('isomorphic-fetch');

//let faultyItems = document.getElementById('faultyItems');
/*let fuelStatus = document.getElementById('fuelStatus');
let launchStatus = document.getElementById('launchStatus');
let pilotStatus = document.getElementById('pilotStatus');
let copilotStatus = document.getElementById('copilotStatus');*/





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
    pilotName = document.querySelector("input[name=pilotName]").value;
    copilotName = document.querySelector("input[name=copilotName]").value;
    fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    cargoMass = document.querySelector("input[name=cargoMass]").value;
    list = document.getElementById("faultyItems");
    let faultyItems = document.getElementById('faultyItems');

    //document = 
    //launchStatus.innerHTML = 

    if (validateInput(pilotName) === "Empty" ||validateInput(copilotName) === "Empty" ||validateInput(fuelLevel) === "Empty" ||validateInput(cargoMass) === "Empty") {
        alert = "All fields are required!";
      } else if (validateInput(cargoMass) === "Not a number" ||validateInput(fuelLevel) === "Not a number") {
        alert = "You must enter a valid numerical input for these fields.";
      } else {
        list.style.visibility = "visible";

        launchStatus = document.getElementById('launchStatus');

        pilotStatus.innerHTML = `Pilot ${pilotName} Ready`;

        copilotStatus.innerHTML = `CoPilot ${copilotName} Ready`;
      }
        //if validateInput
        if (fuelLevel < 10000){
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.style.color = `red`;
            fuelStatus.innerHTML = 'Fuel level too low for launch';
        }else if (cargoMass > 10000) {
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.style.color = `red`;
            cargoStatus.innerHTML = 'Cargo mass over capacity for launch';
        }else (fuelLevel > 10000 || cargoMass < 10000); {
            faultyItems.style.visibility = "hidden";
            launchStatus.innerHTML = 'Shuttle is ready for launch';
            launchStatus.style.color = `green`;
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        }

        /*if (fuelLevel >= 10000) {
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle is ready for launch';
            launchStatus.style.color = `green`;
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
        }
        if (fuelLevel <= 10000){
            faultyItems.style.visibility = 'visible';
                launchStatus.innerHTML = `Shuttle not ready for launch`;
                    launchStatus.style.color = `red`;
                        fuelStatus.innerHTML = `Fuel level too low for launch`;
        }*/                
        /*if (cargoMass <= 10000) {
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle is ready for launch';
            launchStatus.style.color = `green`;
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        }    

        /*if (cargoMass >= 10000) {
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.style.color = `red`;
            cargoStatus.innerHTML = 'Cargo mass over capacity for launch';
        }*/                                                
                
   
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
