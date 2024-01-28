import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import StockTools from 'highcharts/modules/stock-tools';
import indicatorsAll from "highcharts/indicators/indicators-all";
import annotationsAdvanced from "highcharts/modules/annotations-advanced";
import priceIndicator from "highcharts/modules/price-indicator";
import fullScreen from "highcharts/modules/full-screen";
import "../../app/css/gui.css";
import "../../app/css/popup.css";

indicatorsAll(Highcharts);
annotationsAdvanced(Highcharts);
priceIndicator(Highcharts);
fullScreen(Highcharts);
StockTools(Highcharts);

interface StockChartProps {}

const StockChart: React.FC<StockChartProps> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const names = ['MSFT', 'AAPL', 'GOOG'];
    const options = {
      rangeSelector: {
        selected: 4,
      },
      yAxis: {
        labels: {
          formatter: function () {
            return (this.value > 0 ? ' + ' : '') + this.value + '%';
          },
        },
        plotLines: [
          {
            value: 0,
            width: 2,
            color: 'silver',
          },
        ],
      },
      plotOptions: {
        series: {
          compare: 'percent',
          showInNavigator: true,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
        valueDecimals: 2,
        split: true,
      },
      stockTools: {
        gui: {
          enabled: true,
          buttons: [
            'currentPriceIndicator',
            'crookedLines',
            'verticalLabels',
            'typeChange',
            'separator',
            'flags',
          ],
        },
      },
      series: [],
    };

    Highcharts.theme = {
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
                '#FF9655', '#FFF263', '#6AF9C4'],
        chart: {
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                ]
            },
        },
        title: {
            style: {
                color: '#000',
                font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        subtitle: {
            style: {
                color: '#666666',
                font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        legend: {
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: 'black'
            },
            itemHoverStyle:{
                color: 'gray'
            }
        }
    };

    Highcharts.setOptions(Highcharts.theme);

    const fetchData = async (url: string, name: string) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return { name, data };
      } catch (error) {
        console.error(`Error fetching data for ${name}:`, error);
        return { name, data: [] };
      }
    };

    const fetchAllData = async () => {
      const urls = [
        'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/msft-c.json',
        'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/aapl-c.json',
        'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/goog-c.json',
      ];

      try {
        const results = await Promise.all(urls.map((url, index) => fetchData(url, names[index])));

        const seriesOptions = results.map(({ name, data }) => ({
          name,
          data,
        }));

        options.series = seriesOptions;
        Highcharts.stockChart(containerRef.current!, options);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div className="w-full md:w-2/3 p-4 card">
      <div ref={containerRef} style={{ width: 'auto', height:'400px', }} />
    </div>
  );
};

export default StockChart;
