async function getAllCountries() {
    try {
        const countryAPI = await fetch("https://restcountries.com/v3.1/all");
        const response = await countryAPI.json();
        return response;
    }
    catch (err) {
        console.error("We got a problem to fetch the information", err);
    };
};

const countryContainerElement = document.getElementById("country-container");

const createElementCardOfCountry = (countryList) => {
    let unorderedList = document.createElement("ul");
    unorderedList.classList.add("container__section-display")
    countryList.map((country) => {
        let list = document.createElement("li");
        list.classList.add('card');
        list.innerHTML = `
            <div class="card__flip card--${verifyContinents(country.continents || [])}">
                <figure class="card__flip__front">
                    <img class="card__flip__front--img" src="${country.flags.png}" alt="${country.name.common}">
                </figure>
                <aside class="card__flip__back card--${verifyContinents(country.continents || [])}">
                    <h5>${country.name.common}<h5>
                    <p>Nome nativo: ${country.name?.official || '--'}<p>
                    <p>Capital: ${country.capital ? country.capital.join(', ') : '--'}<p>
                    <p>Região: ${country?.region || '--'}<p>
                    <p>Sub-região: ${country?.subregion || '--'}<p>
                <aside>
            </div>
        `;
        unorderedList.appendChild(list);
    })
    countryContainerElement.appendChild(unorderedList);
};

const verifyContinents = (continentList) => {
    if (continentList[0] === 'Europe') {
        return 'europe';
    } else if (continentList[0] === 'America') {
        return 'americas';
    } else if (continentList[0] === 'Africa') {
        return 'africa';
    } else if (continentList[0] === 'Oceania') {
        return 'oceania';
    } else if (continentList[0] === 'Asia') {
        return 'asia';
    } else {
        return 'default';
    };
};

const renderCountries = async () => {
    const data = await getAllCountries();

    createElementCardOfCountry(data);
};

renderCountries();