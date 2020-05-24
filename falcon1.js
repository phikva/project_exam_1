const falcon1 = "https://api.spacexdata.com/v3/history/1";

fetch(falcon1).then(handleResponse).then(handleJson).catch(handleError);

function handleResponse(response) {
  return response.json();
}

function handleJson(json) {
  const results = json;
  console.log(results);

  const historyContainer = document.querySelector(".history-container");

  let html = "";

  html += `
<h3>SEPTEMBER 2008</h3>
<h3>${results.title}</h3>
 <p>${results.details}</p>
`;

  historyContainer.innerHTML = html;
}
function handleError(error) {
  console.log(error);
}
