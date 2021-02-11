/*API fetch Company info */

const companyInfo = "https://api.spacexdata.com/v3/info";


fetch(companyInfo)
.then(handleResponse)
.then(handleJson)
.catch(handleError);

function handleResponse(response) {
    return response.json();
}

function handleJson(json) {
    const results = json;
    


    const companyInfoContainer = document.querySelector(".company-info");;

    let html = "";
    
    html += `
    <li> <span class="info-title">FOUNDED:</span> ${results.founded} </li>
    <li> <span class="info-title">VECHICLES:</span> ${results.vehicles} </li>
    <li> <span class="info-title">EMPLOYEES:</span> ${results.employees}</li>
    <li> <span class="info-title">VALUATION:</span> $${results.valuation} </li>
    
    `;

    
   companyInfoContainer.innerHTML = html;
}






function handleError(error) {
    console.log(error);
  }

 