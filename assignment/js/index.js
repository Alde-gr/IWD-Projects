const TVurl="https://api.tvmaze.com/shows";
const TVresultList = document.querySelector('#TVResults');

fetch (TVurl)
    .then((response) => response.json())
    .then((data) => {
        const topShows = data
            .sort((a, b) => {
                return (b.rating.average ?? 0) - (a.rating.average ?? 0);
            })

            .slice(0, 10);
        topShows.forEach(function (value) {
            const articleElement = 
            `<div>
                <div class="bg-white rounded shadow border-2 p-3 mb-4">
                    <img class="mx-auto" src="${value.image?.medium ?? "https://dummyimage.com/210x295/cccccc/000000&text=No+Image"}">
                    <h5 class="text-lg font-semibold mb-2">${value.name}</h5>
                    <p class="text-gray-600 mb-3">${value.rating.average ?? "N/A"}</p>
                    <a target="_blank" href="${value.url}" class="inline-block
                    bg-sky-300 text-gray-800 px-4 py-2 rounded hover:bg-blue-600">
                    View Article
                    </a>
                </div>
            </div>`;
        TVresultList.insertAdjacentHTML('beforeend', articleElement);
    });
});

const Actorsurl="https://api.tvmaze.com/people";
const ActorsresultList = document.querySelector('#ActorResults');

    fetch (Actorsurl)
        .then((response) => response.json())
        .then((data) => {
            const randomActors = data
                .filter((actor) => {
                    return actor.image?.medium;
                })

                .sort(() => {
                    return Math.random() - 0.5;
                })

                .slice(0, 10);
        randomActors.forEach(function (value) {
        const articleElement = 
        `<div>
            <div class="bg-white rounded shadow border-2 p-3 mb-4">
                <img class="mx-auto" src="${value.image?.medium ?? "https://dummyimage.com/210x295/cccccc/000000&text=Image+Not+Found"}">
                <h5 class="text-lg font-semibold mb-2">${value.name}</h5>
                <p class="text-gray-600 mb-3">${value.country?.name ?? "Unknown"}</p>
                <a target="_blank" href="${value.url}" class="inline-block
                bg-sky-300 text-gray-800 px-4 py-2 rounded hover:bg-blue-600">
                View Article
                </a>
            </div>
        </div>`;
        ActorsresultList.insertAdjacentHTML('beforeend', articleElement);
    });
});
