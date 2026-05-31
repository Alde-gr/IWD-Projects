var currentPage = 0;
const resultList = document.querySelector('#results');
document.getElementById('prev').disabled = true

const searchTV = (value) => {

    event.preventDefault();
    const keyword = document.querySelector('#keyword').value;
    const url="https://api.tvmaze.com/search/shows?q=";
    resultList.innerHTML="";
    if (keyword == "") {
        showShows();
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
                <img class="mx-auto" src="${value.show.image?.medium ?? "https://dummyimage.com/210x295/cccccc/000000&text=No+Image"}">
                <h5 class="text-lg font-semibold mb-2">${value.show.name}</h5>
                <p class="text-gray-600 mb-3">${value.show.rating.average ?? "N/A"}</p>
                <a target="_blank" href="${value.show.url}" class="inline-block
                bg-sky-300 text-gray-800 px-4 py-2 rounded hover:bg-blue-600">
                View Article
                </a>
            </div>
        </div>`;
        resultList.insertAdjacentHTML('beforeend', articleElement);
        });
    });
};

function showShows() {
        const url="https://api.tvmaze.com/shows?page=" + currentPage.toString();
        const resultList = document.querySelector('#results');

        fetch (url)
            .then((response) => response.json())
            .then((data) => {
            data.forEach(function (value) {
            const articleElement = 
            `<div>
                <div class="bg-white rounded shadow border-2 p-4 mb-4">
                    <img class="mx-auto" src="${value.image?.medium ?? "https://dummyimage.com/210x295/cccccc/000000&text=No+Image"}">
                    <h5 class="text-lg font-semibold mb-2">${value.name}</h5>
                    <p class="text-gray-600 mb-3">${value.rating.average ?? "N/A"}</p>
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
    showShows();
}

function nextButton() {
currentPage += 1;
    if (currentPage > 0) {
        document.getElementById('prev').disabled = false;
    }
    resultList.innerHTML="";
    showShows();
}

showShows();