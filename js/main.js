console.log('Ready to code');

let apiData = []

// Display currency data in bar chart //
function render() {
    console.log('render function invoked');
    let barChart = document.querySelector('#bar-chart');
    barChart.innerHTML = '';
    
    for (let rate of Object.entries(apiData.rates)) {
        let chart = document.querySelector("#bar-chart");
        let width = 70;
        let bar = document.createElement("div");
        bar.textContent = rate;
        bar.classList.add("Graph-bar");
        bar.style.width = width + "%";
        chart.appendChild(bar);
    }
}
// Fetch currency data from API //
function doFetch() {
    console.log('doFetch function invoked');
    fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(data => {
            apiData = data;
            console.log(data);
            render();
        });
}


