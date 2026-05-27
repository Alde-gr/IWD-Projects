   var currentPage = 0;

const searchTV = (value) => {

    event.preventDefault();
    const keyword = document.querySelector('#keyword').value;
    const url="https://api.tvmaze.com/search/shows?q=";
    const resultList = document.querySelector('#results');
    resultList.innerHTML="";
    if (keyword == "") {
        showShows();
    }

    fetch (url +  keyword)
        .then((response) => response.json())
        .then((data) => {
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
        const url="https://api.tvmaze.com/shows?page=1";
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
                    bg-sky-300 text-gray-800 px-4 py-2 rounded hover:bg-blue-600">
                    View Article
                    </a>
                </div>
            </div>`;
            resultList.insertAdjacentHTML('beforeend', articleElement);
        });
    });
};

showShows();