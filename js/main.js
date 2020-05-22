let apiData = []
let selectedRegionTitle = 'Europe';

function changeRegion() {
    selectedRegionTitle = (event.target.value);
    render();
}

// Render currency data from apiData //
function render() {
    let barChart = document.querySelector('#bar-chart');
    barChart.innerHTML = '';
    let countryRate = document.querySelector('#country-rate');
    countryRate.innerHTML = '';

    let selectedRegion = {
        'Europe': ['BGN', 'CZK', 'DKK', 'GBP', 'HUF', 'PLN', 'RON', 'SEK', 'CHF', 'ISK', 'NOK', 'HRK', 'RUB'],
        'Asia': ['CNY', 'HKD', 'IDR', 'ILS', 'INR', 'KRW', 'MYR', 'PHP', 'SGD', 'THB', 'TRY'],
        'North America': ['USD', 'CAD', 'MXN'],
        'South America': ['BRL'],
        'Africa/Oceania': ['ZAR', 'AUD', 'NZD'],
    }

// Loop through and display countries if found in selectedRegion
    for (country of apiData) {
        if (selectedRegion[selectedRegionTitle].includes(country[0])) {
            let width = 1/country[1] * 100;
            let bar = document.createElement("div");
            let text = document.createElement("div");
            text.textContent = country[0] + ', ' + country[1];
            text.classList.add("Graph-text");
            countryRate.append(text);
            bar.classList.add("Graph-bar");
            bar.style.width = width + "%";
            barChart.appendChild(bar);
        }
    }
}
// Fetch currency data from API //
function doFetch() {
    console.log('doFetch invoked');
    fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(data => {
            apiData = Object.entries(data.rates);
            apiData.sort();
            console.log(apiData);
            render();
        });
}


doFetch()