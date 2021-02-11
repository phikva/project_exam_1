
const history = "https://api.spacexdata.com/v3/rockets";

fetch(history)
.then(handleResponse)
.then(handleJson)
.catch(handleError);

function handleResponse(response) {
    return response.json();
}

function handleJson(json) {
    const results = json;
    console.log(results)

    const rocketContainer = document.querySelector(".rocket-fetch");

    let html = "";

    for (let i = 0; i < results.length; i++) {
        
        html += `
     <li class="rocket-card">
        <div class="card">
          <h2 class="rocket-name">${results[i].rocket_name} </h2>
            <div class="card-content">
              
              <img src="${results[i].flickr_images[0]}" alt="">
              <h2 class="card-title">${results[i].description} </h2>
              <ul class="rocket-spec">
              <li><span>Engine type:</span> ${results[i].engines.type} </li>
              <li><span>Company:</span> ${results[i].company} </li>
              <li><span>Country:</span> ${results[i].country} </li>
              <li><span>First flight:</span> ${results[i].first_flight} </li>
              <li><span>Cost per launch:</span> $${results[i].cost_per_launch} </li>
              </ul>
            </div>
         
        </div>
      </li>
      
        `;
    }
    rocketContainer.innerHTML = html;

    }
    
function handleError(error) {
    console.log(error);
  }