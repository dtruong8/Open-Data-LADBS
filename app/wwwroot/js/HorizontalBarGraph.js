﻿var ctx = document.getElementById('horizontalbargraph').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        label: ['Ready To Issue', 'Issued', 'Permit Finaled'],
        datasets: [{
            label: ['Ready To Issue', 'Issued', 'Permit Finaled'],
            backgroundColor: [  'rgba(245,230,99,1)',
                                'rgba(156,56,72,1)',
                                'rgba(23,96,135,1)'
            ],

            data: [ Math.random() * 10,
                    Math.random() * 10,
                    Math.random() * 10,
            ],
        }]
    },

    // Configuration options go here
    options: {
        title: {
            text: 'Status',
            position: 'top',
            display: true
        }
    }

});