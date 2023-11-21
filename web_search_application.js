/*
let searchInputEle=document.getElementById("search-id");
let mainContainer=document.getElementById("searchResults");
let spinnerEle=document.getElementById("spinner");
function createAndAppendSerchResults(result){
    let{title,link,description}=result;                      // object de-structuring
    //creation of search result title container
    let titleContainer=document.createElement("div")
    titleContainer.classList.add("result-item")
    mainContainer.appendChild(titleContainer)
    //creation of search result title
    let Title=document.createElement("a")
    Title.classList.add("result-title")
    Title.href=link;
    Title.textContent=title;
    Title.target="_blank";
    titleContainer.appendChild(Title)
    //creation of search result break
    let breakEle=document.createElement("br")
    titleContainer.appendChild(breakEle)
    //creation of search result link
    let UrlLink=document.createElement("a")
    UrlLink.classList.add("result-url")
    UrlLink.href=link;
    UrlLink.text=link;
    UrlLink.target="_blank";
    titleContainer.appendChild(UrlLink)
    //creation of search result break
    let BreakEle=document.createElement("br")
    titleContainer.appendChild(BreakEle)
    //creation of search result description
    let Description=document.createElement("p")
    Description.classList.add("link-description")
    Description.textContent=description;
    titleContainer.appendChild(Description)
}
function displayResults(search_results){
    spinnerEle.classList.toggle("d-none")
    for(let result of search_results){
        createAndAppendSerchResults(result);
    }
    
}
function searchWebApplication(event){
    if(event.key === "Enter"){
        spinnerEle.classList.remove("d-none")
        searchInputEle.textContent=" "
        let inputvalue=searchInputEle.value;
        let url="https://apis.ccbp.in/wiki-search?search=" + inputvalue;
        let options={
            method:"GET"
        };
        fetch(url,options)
        .then(function (response){
            return response.json();
        })
        .then(function(jsonData){
            let{search_results}=jsonData;   //object de-structuring
            displayResults(search_results)
        })
    }
};
searchInputEle.addEventListener("keydown",searchWebApplication);
*/

let searchInputEl = document.getElementById("searchInput");

let searchResultsEl = document.getElementById("searchResults");

let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
  let { link, title, description } = result;                 //In the display we have title,link,description

  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");

  let titleEl = document.createElement("a");
  titleEl.href = link;
  titleEl.target = "_blank";
  titleEl.textContent = title;
  titleEl.classList.add("result-title");
  resultItemEl.appendChild(titleEl);

  let titleBreakEl = document.createElement("br");
  resultItemEl.appendChild(titleBreakEl);

  let urlEl = document.createElement("a");
  urlEl.classList.add("result-url");
  urlEl.href = link;
  urlEl.target = "_blank";
  urlEl.textContent = link;
  resultItemEl.appendChild(urlEl);

  let linkBreakEl = document.createElement("br");
  resultItemEl.appendChild(linkBreakEl);

  let descriptionEl = document.createElement("p");
  descriptionEl.classList.add("link-description");
  descriptionEl.textContent = description;
  resultItemEl.appendChild(descriptionEl);

  searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
  spinnerEl.classList.add("d-none");

  for (let result of searchResults) {
    createAndAppendSearchResult(result);
  }
}

function searchWikipedia(event) {
  if (event.key === "Enter") {

    spinnerEl.classList.remove("d-none");
    searchResultsEl.textContent = "";

    let searchInput = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let options = {
      method: "GET"
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;             //object de-structuring
        displayResults(search_results);       
      });
  }
};
searchInputEl.addEventListener("keydown", searchWikipedia);
