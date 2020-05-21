console.log('Ready to code');

let apiData = []
let selectedRegionTitle = 'Europe';

function changeRegion() {
    console.log(event.target.value);
    selectedRegionTitle = (event.target.value);
    render();
}
// Display currency data in bar chart //
function render() {
    console.log('render function invoked');
    let barChart = document.querySelector('#bar-chart');
    barChart.innerHTML = '';
        
    let selectedRegion = {
        'Europe': ['BGN', 'CZK', 'DKK', 'GBP', 'HUF', 'PLN', 'RON', 'SEK', 'CHF', 'ISK', 'NOK', 'HRK', 'RUB'],
        'Asia': ['CNY', 'HKD', 'IDR', 'ILS', 'INR', 'KRW', 'MYR', 'PHP', 'SGD', 'THB', 'TRY'],
        'North America': ['USD', 'CAD', 'MXN'],
        'South America': ['BRL'],
        'Africa/Oceania': ['ZAR', 'AUD', 'NZD'],
    }


    for (country of apiData) {
        if (selectedRegion[selectedRegionTitle].includes(country[0])) {
            console.log(country[0]);
            console.log(selectedRegion[selectedRegionTitle].length);
            let width = 1/country[1] * 100;
            let bar = document.createElement("div");
            bar.textContent = country[0];
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
            console.log(apiData);
            render();
        });
}


doFetch()