import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import highchartsMore from 'highcharts/highcharts-more';// Import the arearange module
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

// Initialize the module
highchartsMore(Highcharts);

const HCBollingerBandsChart: React.FC = () => {
  const chartRef = useRef<HighchartsReact.Props>(null);
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.highcharts.com/samples/data/range.json');
        const data = response.data;

        const newOptions: Highcharts.Options = {
          chart: {
            type: 'arearange',
          },
          rangeSelector: {
            selected: 2,
          },
          title: {
            text: 'Price variation by day',
          },
          tooltip: {
            valueSuffix: %C',
          },
          series: [
            {
              name: 'Prices',
              data: data,
            },
          ],
        };

        setChartOptions(newOptions);

        if (chartRef.current && chartRef.current.chart) {
          chartRef.current.chart.update(newOptions, true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full md:w-1/3 p-4 card">
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        ref={chartRef as React.MutableRefObject<HighchartsReact.Props>}
      />
    </div>
  );
};

export default HCBollingerBandsChart;
