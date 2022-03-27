// const { formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch()
    .then(function(listOfPlanets) {
        console.log(listOfPlanets) 
        let chosenPlanet = pickPlanet(listOfPlanets);
        addDestinationInfo(
            document,
            chosenPlanet.name,
            chosenPlanet.diameter,
            chosenPlanet.star,
            chosenPlanet.distance,
            chosenPlanet.moons,
            chosenPlanet.image
        );;
    });
    /*listedPlanetsResponse
        .then(function (response) {
            response.json().then(function () {          
                console.log(myFetch());
                console.log(typeof jsonObject);
                console.log(listedPlanets); 
        
    
                preventDefault();
                return listedPlanets;
            });
            let chosenPlanet = pickPlanet(listedPlanets);
            addDestinationInfo(
                document,
                chosenPlanet.name,
                chosenPlanet.diameter,
                chosenPlanet.star,
                chosenPlanet.distance,
                chosenPlanet.moons,
                chosenPlanet.image
            );
        }); */

                            
    

   /*add event listener to the submit button on the form.  Check on inputs and assign to variables.*/
//formsubmission function
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    pilotName = document.querySelector("input[name=pilotName]").value;
    copilotName = document.querySelector("input[name=copilotName]").value;
    fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    cargoMass = document.querySelector("input[name=cargoMass]").value;

    let list = document.getElementById("faultyItems");
    formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
  });
});
   //Pass the 4 variables into formSubmission.