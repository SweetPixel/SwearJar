/*globals Tabletop, Sheetsee */
'use strict';

function myData(data) {
    // var colors = ['#ff00ff', '#acacac'];
    var lineOptions = {
        Amount : 'Amount',
        labels: 'undefined',
        m: [80, 100, 120, 100],
        w: 800,
        h: 400,
        div: '#swears',
        yaxis: 'swears',
        hiColor: '#E4EB29'
    };

    Sheetsee.d3LineChart(data, lineOptions);

}


document.addEventListener('DOMContentLoaded', function () {
    var URL = '1e-3sj57TZfPxpO5LheHLyQyqjqf1W1jfLy0YYs8hbjw';
    Tabletop.init( { key: URL, callback: myData, simpleSheet: true } );
});
