console.log("Hello World");

const resultList = document.querySelector('#results');
const url = "https://content.guardianapis.com/search?api-key=";
const apiKey = "5d407421-8eb8-42f5-91b9-66bdbe5c50a2";

fetch (url + apiKey)

.then((response) => response.json())
.then((data) => {
    data.response.results.forEach(function (value) {
        console.log(value);
        resultList.insertAdjacentHTML('beforeend', '<li>' + value.webTitle + '</li>');
    });
});