// Sample data for the charts (replace with actual data from a backend)
const calorieData = {
    labels: ['Consumed', 'Remaining'],
    datasets: [{
        data: [1500, 500],
        backgroundColor: ['#36A2EB', '#FF6384']
    }]
};

const weightData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [{
        label: 'Weight (lbs)',
        data: [192, 191, 190, 189, 188],
        fill: false,
        borderColor: '#36A2EB',
        tension: 0.1
    }]
};

const macroData = {
    labels: ['Carbs', 'Protein', 'Fat'],
    datasets: [{
        label: 'Macros (grams)',
        data: [250, 120, 80],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
    }]
};

// Initialize charts on home page
const caloriePieChart = new Chart(document.getElementById('caloriePieChart'), {
    type: 'pie',
    data: calorieData
});

const weightLineChart = new Chart(document.getElementById('weightLineChart'), {
    type: 'line',
    data: weightData
});

const macroBarChart = new Chart(document.getElementById('macroBarChart'), {
    type: 'bar',
    data: macroData
});

// Initialize charts on tracking page
const calorieTrackingPieChart = new Chart(document.getElementById('calorieTrackingPieChart'), {
    type: 'pie',
    data: calorieData
});