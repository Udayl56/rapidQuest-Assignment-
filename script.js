const slider = document.getElementById('slider');
const sliderAge = document.getElementById('sliderage');

const percentage = document.getElementById('value');
const ageValue = document.getElementById('valueage');

percentage.innerHTML = slider.value;




slider.addEventListener("mousemove", function () {
    let x = slider.value;
    let color = 'linear-gradient(90deg, rgb(56, 50, 143)' + x + '%, rgb(211, 211, 211)' + x + '%)';
    slider.style.background = color;
    percentage.innerHTML = this.value + '%';
});

ageValue.innerHTML = sliderAge.value;

sliderAge.addEventListener("mousemove", function () {
    const x = sliderAge.value;
    const color = 'linear-gradient(90deg, rgb(56, 50, 143)' + x + '%, rgb(211, 211, 211)' + x + '%)';
    sliderAge.style.background = color;
    ageValue.innerHTML = this.value;
});




let progressCircle1 = document.querySelector(".progress1");
let radius = progressCircle1.r.baseVal.value;
//circumference of a circle = 2πr;
let circumference = radius * 2 * Math.PI;
progressCircle1.style.strokeDasharray = circumference;

//0 to 100
setProgress1(75);

function setProgress1(percent) {
    progressCircle1.style.strokeDashoffset = circumference - (percent / 100) * circumference;
}

//
let progressCircle2 = document.querySelector(".progress2");
progressCircle2.style.strokeDasharray = circumference;
setProgress2(90);

function setProgress2(percent) {
    progressCircle2.style.strokeDashoffset = circumference - (percent / 100) * circumference;
}

let progressCircle3 = document.querySelector(".progress3");
progressCircle3.style.strokeDasharray = circumference;
setProgress3(60);

function setProgress3(percent) {
    progressCircle3.style.strokeDashoffset = circumference - (percent / 100) * circumference;
}


// bar chart


// // setup 
const data = {
    labels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 100],

    datasets: [{
        label: 'Employer K 73,500',
        barThickness: 20,
        data: [20, 22, 25, 27, 30, 33, 50, 50, 60, 70, 100, 96, 120],
        backgroundColor: '#00009c'

    }, {
        label: 'Employer K 53,500',
        barThickness: 20,
        data: [20, 22, 25, 27, 40, 45, 45, 70, 70, 80, 80, 102, 105],
        backgroundColor: '#3150cc'

    }, {
        label: 'Total Interest K 244,312',
        barThickness: 20,
        data: [20, 22, 25, 27, 30, 33, 35, 37, 60, 70, 70, 72, 95],
        backgroundColor: '#a7d2f2',



    }

    ]
};
// config
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: false,



        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]


        }
    }
};

//render
const barchart = new Chart(document.getElementById('barChart'), config);


