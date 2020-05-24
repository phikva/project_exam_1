const nextLaunch = "https://api.spacexdata.com/v3/launches/next";

fetch(nextLaunch)
.then(handleResponse)
.then(handleJson)
.catch(handleError);

function handleResponse(response) {
    return response.json();
}

function handleJson(json) {
    const results = json;
    console.log(results.rocket.rocket_name)
    

    const nextLaunchContainer = document.querySelector(".next-launch");

    let html = "";

        html += `
        <h3>NEXT LAUNCH :</h3>
        <ul>
        <li> <span>Mission Name:</span> ${results.mission_name} </li> 
        <li> <span>Launch Year:</span> ${results.launch_year} </li> 
        <li> <span>Rocket Name:</span> ${results.rocket.rocket_name} </li> 
        </ul>

     
        `;
      
        nextLaunchContainer.innerHTML = html;
    }

    
    
function handleError(error) {
    console.log(error);
  }


 