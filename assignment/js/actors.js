var currentPage = 0;
const resultList = document.querySelector('#results');
document.getElementById('prev').disabled = true

const searchActors = (value) => {

    event.preventDefault();
    const keyword = document.querySelector('#keyword').value;
    const url="https://api.tvmaze.com/search/people?q=";
    resultList.innerHTML="";
    if (keyword == "") {
        showActors();
    }

    fetch (url +  keyword)
        .then((response) => response.json())
        .then((data) => {
            if (data.length === 0) {
                resultList.innerHTML = "<p class = 'col-span-full mx-auto text-grey-800 p-4'>No results found</p>"
            }
        data.forEach(function (value) {
        const articleElement = 
        `<div>
            <div class="bg-white rounded shadow border-2 p-4 mb-4">
                <img class="mx-auto" src="${value.person.image?.medium ?? "https://dummyimage.com/210x295/cccccc/000000&text=Image+Not+Found"}">
                <h5 class="text-lg font-semibold mb-2">${value.person.name}</h5>
                <p class="text-gray-600 mb-3">${value.person.country?.name ?? "N/A"}</p>
                <a target="_blank" href="${value.person.url}" class="inline-block
                bg-sky-300 text-gray-800 px-4 py-2 rounded hover:bg-blue-600">
                View Article
                </a>
            </div>
        </div>`;
        resultList.insertAdjacentHTML('beforeend', articleElement);
        });
    });
};

function showActors() {
        const url="https://api.tvmaze.com/people?page=" + currentPage.toString();
        const resultList = document.querySelector('#results');

        fetch (url)
            .then((response) => response.json())
            .then((data) => {
            data.forEach(function (value) {
            const articleElement = 
            `<div>
                <div class="bg-white rounded shadow border-2 p-4 mb-4">
                    <img class="mx-auto" src="${value.image?.medium ?? "https://dummyimage.com/210x295/cccccc/000000&text=Image+Not+Found"}">
                    <h5 class="text-lg font-semibold mb-2">${value.name}</h5>
                    <p class="text-gray-600 mb-3">${value.country?.name ?? "Unknown"}</p>
                    <a target="_blank" href="${value.url}" class="inline-block
                    bg-sky-200 text-gray-800 px-4 py-2 rounded hover:bg-sky-300">
                    View Article
                    </a>
                </div>
            </div>`;
            resultList.insertAdjacentHTML('beforeend', articleElement);
        });
    });
};

function previousButton() {
    currentPage -= 1;
    if (currentPage == 0) {
        document.getElementById('prev').disabled = true;
    }
    resultList.innerHTML="";
    showActors();
}

function nextButton() {
currentPage += 1;
    if (currentPage > 0) {
        document.getElementById('prev').disabled = false;
    }
    resultList.innerHTML="";
    showActors();
}

showActors();