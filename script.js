// Get DOM elements
const labelInput = document.getElementById('label-input');
const valueInput = document.getElementById('value-input');
const addDataBtn = document.getElementById('add-data');

// Initial chart data
let labels = ['Jan', 'Feb', 'Mar'];
let dataValues = [10, 20, 30];

// Chart.js configs
const barCtx = document.getElementById('barChart').getContext('2d');
const lineCtx = document.getElementById('lineChart').getContext('2d');
const pieCtx = document.getElementById('pieChart').getContext('2d');

let barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Sales',
            data: dataValues,
            backgroundColor: '#007bff'
        }]
    },
    options: {
        responsive: true
    }
});

let lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Sales',
            data: dataValues,
            borderColor: '#28a745',
            backgroundColor: 'rgba(40, 167, 69, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true
    }
});

let pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: 'Sales',
            data: dataValues,
            backgroundColor: [
                '#007bff',
                '#28a745',
                '#ffc107',
                '#dc3545',
                '#6f42c1'
            ]
        }]
    },
    options: {
        responsive: true
    }
});

// Add new data dynamically
addDataBtn.addEventListener('click', () => {
    const label = labelInput.value.trim();
    const value = Number(valueInput.value);

    if(label === '' || isNaN(value)) {
        alert('Please enter valid label and value!');
        return;
    }

    // Add data
    labels.push(label);
    dataValues.push(value);

    // Update all charts
    barChart.update();
    lineChart.update();
    pieChart.update();

    // Clear inputs
    labelInput.value = '';
    valueInput.value = '';
});