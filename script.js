Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: '台灣111年入境觀光客人數統計圖'
    },
    tooltip: {
        valueSuffix: '人'
    },
    subtitle: {
        text:
        '資料來源: <a href="https://stat.taiwan.net.tw/" target="_blank">中華民國觀光署</a>'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: '亞洲地區',
                    y: 696792
                },
                {
                    name: '非洲地區',
                    sliced: true,
                    selected: true,
                    y: 3410
                },
                {
                    name: '美洲地區',
                    y: 108842
                },
                {
                    name: '大洋洲地區',
                    y: 14920
                },
                {
                    name: '歐洲地區',
                    y: 65990
                },
                {
                    name: '其他未列明',
                    y: 6008
                }
            ]
        }
    ]
});