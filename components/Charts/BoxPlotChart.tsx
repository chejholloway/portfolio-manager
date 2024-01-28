import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import accessibility from 'highcharts/modules/accessibility';

// Initialize the additional modules
highchartsMore(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
accessibility(Highcharts);

const BoxPlotChart = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const chartOptions = {
      chart: {
        type: 'boxplot',
      },
      title: {
        text: 'Experiment #243',
      },
      legend: {
        enabled: false,
      },
      xAxis: {
        categories: ['1', '2', '3', '4', '5'],
        title: {
          text: 'Experiment No.',
        },
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
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',
        data: [
          [0, 644],
          [4, 718],
          [4, 951],
          [4, 969],
        ],
        marker: {
          fillColor: 'white',
          lineWidth: 1,
          lineColor: Highcharts.getOptions().colors[0],
        },
        tooltip: {
          pointFormat: 'Observation: {point.y}',
        },
      }],
    };

    Highcharts.chart(containerRef.current, chartOptions);
  }, []);

  return (
    <div className="w-full md:w-1/3 p-4 card">
      <div ref={containerRef} />
    </div>
  );
};

export default BoxPlotChart;
