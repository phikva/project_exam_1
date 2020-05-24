
const falcon9Info = "https://api.spacexdata.com/v3/rockets/falcon9";

fetch(falcon9Info)
.then(handleResponse)
.then(handleJson)
.catch(handleError);

function handleResponse(response) {
    return response.json();
}

function handleJson(json) {
    const results = json;
    
    

const historyContainer = document.querySelector(".falcon9-container");

let html = "";

html +=`
<p>${results.description}</p>
<ul class="rocket-info">
<li><span>Company:</span> ${results.company}</li>
<li><span>Country:</span> ${results.country}</li>
<li><span>First Flight:</span> ${results.first_flight}</li>
<li><span>Cost Per Launch:</span> $${results.cost_per_launch}</li>
</ul>
`;

historyContainer.innerHTML = html;
}

function handleError(error) {
    console.log(error);
  }