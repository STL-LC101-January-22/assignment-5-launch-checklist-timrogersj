// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
            let missionTarget = document.getElementById('missionTarget');
            let index = Math.floor(Math.random() * json.length - 1);
            missionTarget.innerHTML += `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[index].name}</li>
                    <li>Diameter: ${json[index].diameter}</li>
                    <li>Star: ${json[index].star}</li>
                    <li>Distance from Earth: ${json[index].distance}</li>
                    <li>Number of Moons: ${json[index].moons}</li>
                </ol>
                <img src="${json[index].image}">
                `;
                    
}

function validateInput(testInput) {
    document.addEventListener("submit", function (event) {
        event.preventDefault();
    
                let pilotName = document.querySelector("[name=pilotName]").value;
                let copilotName = document.querySelector("[name=copilotName]").value;
                let fuelLevel = document.querySelector("[name=fuelLevel]").value;
                let cargoMass = document.querySelector("[name=cargoMass]").value;

                        let emptyFields = "";
                            let nonAlpha = "";
                                let nonNumeric = "";
    
                        if (!pilotName || !copilotName || !fuelLevel || !cargoMass) {
                        emptyFields = "All fields are required!\n";
                        }
    
                        if (pilotName.match(/[0-9]/g) != null) {
                        nonAlpha = "Pilot and CoPilot names must be alphabet characters!\n";
                        }
                        
                        if(copilotName.match(/[0-9]/g) != null) {
                        nonAlpha = "Pilot and CoPilot names must be alphabet characters!\n";   
                        }

                        if (isNaN(fuelLevel) || isNaN(cargoMass)) {
                        nonNumeric = "Fuel levels and Cargo mass must be numers!\n";
                        }
                
                        if (emptyFields || nonAlpha || nonNumeric) {
                        let errorMessage = `${emptyFields}${nonAlpha}${nonNumeric}`;
                        alert(errorMessage);
                        }
    
                        else { formSubmission(event, pilotName, copilotName, fuelLevel, cargoMass); }
    
     });

}


function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {
    launchStatus.innerHTML = `
    <div>
        <ol>
            `
        pilotStatus.innerHTML = `Pilot ${pilotName} Ready`;

        copilotStatus.innerHTML = `CoPilot ${copilotName} Ready`;

        if (fuelLevel >= 10000) {
            faultyItems.style.visibility = 'visible';
                launchStatus.innerHTML = `Shuttle is ready for launch`;
                    launchStatus.style.color = `green`;
                        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        }
        if (fuelLevel <= 10000){
            faultyItems.style.visibility = 'visible';
                launchStatus.innerHTML = `Shuttle not ready for launch`;
                    launchStatus.style.color = `red`;
                        fuelStatus.innerHTML = `Fuel level too low for launch`;
        }                
        if (cargoMass <= 10000) {
            faultyItems.style.visibility = 'visible';
                launchStatus.innerHTML = `Shuttle is ready for launch`;
                    launchStatus.style.color = `green`;
                        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }    
        /*if (fuelLevel <= 10000){
            faultyItems.style.visibility = 'visible';
                launchStatus.innerHTML = `Shuttle not ready for launch`;
                    launchStatus.style.color = `red`;
                        fuelStatus.innerHTML = `Fuel level too low for launch`;
        }*/
        if (cargoMass >= 10000) {
            faultyItems.style.visibility = 'visible';
                launchStatus.innerHTML = `Shuttle not ready for launch`;
                    launchStatus.style.color = `red`;
                        cargoStatus.innerHTML = `Cargo mass over capacity for launch`;
        }                                                     
                `
            </ol>
        </div>
        `;
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    window.addEventListener("load", () => {
        fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
            response.json().then(function (planetaryData) {
                const missionTarget = document.getElementById("missionTarget");
                    let index = Math.floor(Math.random() * (planetaryData.length));
                        missionTarget.innerHTML += `
                            <div>                            
                                <h2>Mission Destination</h2>   
                                    <ol>        
                                        <li>Name:       ${planetaryData[index].name}</li>
                                        <li>Diameter:   ${planetaryData[index].diameter}</li>
                                        <li>Star:       ${planetaryData[index].star}</li>
                                        <li>Distance:   ${planetaryData[index].distance}</li>
                                        <li>Moons:      ${planetaryData[index].moons}</li>
                                    </ol>
                                    <img id="missionTarget img" src=${planetaryData[index].image}></img>
                                </div>
                            `;
            });
        });
    });
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
