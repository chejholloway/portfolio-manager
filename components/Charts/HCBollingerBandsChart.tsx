import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import accessibility from 'highcharts/modules/accessibility';
import { darkTheme } from "../../app/constants/themeOptions";
import { rangeData } from '../../app/data/range.ts';

// Initialize the module
highchartsMore(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
accessibility(Highcharts);

const HCBollingerBandsChart: React.FC = () => {
  const chartRef = useRef<HighchartsReact.Props>(null);
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.highcharts.com/samples/data/range.json');
        // const data = response.data;
        const data = rangeData;

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
            valueSuffix: '%',
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
    <div className="w-full md:w-1/3 p-4 card h-[503px]">
      <HighchartsReact
        name="bollinger"
        highcharts={Highcharts}
        options={chartOptions}
        ref={chartRef as React.MutableRefObject<HighchartsReact.Props>}
      />
    </div>
  );
};

export default HCBollingerBandsChart;
