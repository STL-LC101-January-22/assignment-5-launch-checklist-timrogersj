// Write your helper functions here!

/*let faultyItems = document.getElementById('faultyItems');
let fuelStatus = document.getElementById('fuelStatus');
let launchStatus = document.getElementById('launchStatus');
let pilotStatus = document.getElementById('pilotStatus');
let copilotStatus = document.getElementById('copilotStatus');*/



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
    return "Not a number";
  } else if (testInput.type === Number) {
    return "Is a number";
  }    
}


function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {
    pilotName = document.querySelector("input[name=pilotName]").value;
    copilotName = document.querySelector("input[name=copilotName]").value;
    fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    cargoMass = document.querySelector("input[name=cargoMass]").value;
    list = document.getElementById("faultyItems");

    //document = 
    //launchStatus.innerHTML = 

    if (validateInput(pilotName) === "Empty" ||validateInput(copilotName) === "Empty" ||validateInput(fuelLevel) === "Empty" ||validateInput(cargoMass) === "Empty") {
        alert("All fields are required!");
      } else if (validateInput(cargoLevelValue) === "Not a number" ||validateInput(fuelLevelValue) === "Not a number") {
        alert("You must enter a valid numerical input for these fields.");
      } else {
        list.style.visibility = "visible";

        pilotStatus.innerHTML = `Pilot ${pilotName} Ready`;

        copilotStatus.innerHTML = `CoPilot ${copilotName} Ready`;
      }
        //if validateInput
        if (fuelLevel <= 9999){
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.style.color = `red`;
            fuelStatus.innerHTML = 'Fuel level too low for launch';
        }else if (cargoMass >= 9999) {
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.style.color = `red`;
            cargoStatus.innerHTML = 'Cargo mass over capacity for launch';
        }else{
            launchStatus.innerHTML = 'Shuttle is ready for launch';
            launchStatus.style.color = `green`;
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
