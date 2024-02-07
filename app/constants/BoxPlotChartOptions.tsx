import Highcharts from 'highcharts';

export const BoxPlotChartOptions = {
      chart: {
        type: 'boxplot',
      },
      title: {
        text: '',
      },
      legend: {
        enabled: true,
      },
      xAxis: {
        categories: ['1', '2', '3', '4', '5'],
      },
      yAxis: {
        title: {
          text: 'Observations',
        },
        plotLines: [{
          value: 932,
          color: 'red',
          width: 1,
          label: {
            text: 'Theoretical mean: 932',
            align: 'center',
            style: {
              color: 'gray',
            },
          },
        }],
      },
      series: [{
        name: 'Observations',
        data: [
          [760, 801, 848, 895, 965],
          [733, 853, 939, 980, 1080],
          [714, 762, 817, 870, 918],
          [724, 802, 806, 871, 950],
          [834, 836, 864, 882, 910],
        ],
        tooltip: {
          headerFormat: '<em>Experiment No {point.key}</em><br/>',
        },
      }, {
        name: 'Outliers',
        type: 'scatter',
        data: [
          [0, 644],
          [4, 718],
          [4, 951],
          [4, 969],
        ],
        marker: {
          fillColor: 'white',
          lineWidth: 1
        },
        tooltip: {
          pointFormat: 'Observation: {point.y}',
        },
      }],
    };