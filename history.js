
const history = "https://api.spacexdata.com/v3/history";

fetch(history)
.then(handleResponse)
.then(handleJson)
.catch(handleError);

function handleResponse(response) {
    return response.json();
}

function handleJson(json) {
    const results = json;
    console.log(results[1])
    

    const cardContainer = document.querySelector(".history-cards");

    let html = "";

    
        
        html += `
     <li>
        <div class="card">
          
            <div class="card-content">
              <p>${results[0].event_date_utc}</p>
              <img src="./images/2016_-_01-26751237322_ceb6d56235_o_1.jpg" alt="Long exposure of Falcon 9 launch shows trajectory">
              <h3 class="card-title">${results[0].title}</h3>
              <p>
              ${results[0].details}
              </p>
            </div>
         
        </div>
      </li>
      <li>
        <div class="card">
          
            <div class="card-content">
              <p>${results[1].event_date_utc}</p>
              <img src="./images/2015_-_01_crs6_hangar.jpg" alt="falcon9 in the hangar at space launch complex 40">
              <h3 class="card-title">${results[1].title}</h3>
              <p>
              ${results[1].details}
              </p>
            </div>
         
        </div>
      </li>
        `;
        cardContainer.innerHTML = html;
      }
        
    

    
    
function handleError(error) {
    console.log(error);
  }