const ctxSkills = document.getElementById('skillsRadar').getContext('2d');

const dataSkills = {
    labels: ['Redes de Computadores', 'Segurança da Infor.', 'Linux', 'Design', 'Windows', 'Hacking', 'Algoritmos'],
    datasets: [{
        label: 'Porcentagem',
        data: [79, 90, 60, 55, 88, 50, 85], // valores de 0 a 100
        backgroundColor: 'rgba(99, 102, 241, 0.5)', // roxo
        borderColor: 'rgba(99, 102, 241, 1)',
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgba(99, 102, 241, 1)',
        pointHoverRadius: 6
    }]
};

const optionsSkills = {
    responsive: true,
    layout: {
        padding: {
            top: 0,
            bottom: 0,
            left: 50,
            right: 50
        },
    },
    scales: {
        r: {
            angleLines: { color: '#ccc' },
            grid: { color: '#ddd' },
            pointLabels: {
                font: {
                    size: 13
                }
            },
            suggestedMin: 0,
            suggestedMax: 100,

        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

new Chart(ctxSkills, {
    type: 'radar',
    data: dataSkills,
    options: optionsSkills
});



const ctxTech = document.getElementById('technologiesRadar').getContext('2d');

const dataTech = {
    labels: ['Html', 'Css', 'Javascript', 'PHP', 'Java', 'Bootstrap', 'MySQL', 'Git & Github'],
    datasets: [{
        label: 'Porcentagem',
        data: [85, 87, 65, 89, 70, 80, 96, 80], // valores de 0 a 100
        backgroundColor: 'rgba(99, 102, 241, 0.5)', // roxo
        borderColor: 'rgba(99, 102, 241, 1)',
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgba(99, 102, 241, 1)',
        pointHoverRadius: 6
    }]
};

const optionsTech = {
    responsive: true,
    layout: {
        padding: {
            top: 0,
            bottom: 0,
            left: 50,
            right: 50
        },
    },
    scales: {
        r: {
            angleLines: { color: '#ccc' },
            grid: { color: '#ddd' },
            pointLabels: {
                font: {
                    size: 13
                }
            },
            suggestedMin: 0,
            suggestedMax: 100
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

new Chart(ctxTech, {
    type: 'radar',
    data: dataTech,
    options: optionsTech
});