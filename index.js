const chartEl = document.querySelector('#chart');

//get day
const getCurrentDay = () =>{
    const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    const d = new Date();
    return weekdays[d.getDay()];
}

//Fetch data
const fetchData = async () => {
    const response = await fetch('./data.json');
    const chartData = await response.json();
    return chartData;
}

//generate graph
const renderGraph = async () => {
    const graphData = await fetchData();
    const maxAmount = Math.max(...(graphData.map(data => data.amount)));
    graphData.forEach(({day, amount}) => {
    const graph = chartEl.innerHTML += `<div class="spending-bar" style="height:${(amount / maxAmount) * 100}%" data-amount="$${amount}" data-day="${day}"></div>`
    })
    markCurrentDay();
}

//current day
const markCurrentDay = () => {
    const currentDay = getCurrentDay();
    const chartBars = document.querySelectorAll('.spending-bar');
    for(let bar of chartBars) {
        bar.classList.remove('current-day');
        if(bar.dataset.day === currentDay ) {
            bar.classList.add('current-day')
        }
    }
} 
fetchData();
renderGraph();