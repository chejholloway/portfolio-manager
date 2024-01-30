import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import highchartsTreemap from 'highcharts/modules/treemap';
import HighchartsReact from 'highcharts-react-official';
import highchartsDarkBlue from 'highcharts/themes/dark-blue';
import { darkTheme } from "../../app/constants/themeOptions";
import { treeMapData } from '../../app/data/treemapData.ts';

// Initialize the treemap module
highchartsTreemap(Highcharts);
highchartsDarkBlue(Highcharts);

const HCTreeMapChart: React.FC = () => {
  const chartRef = useRef<Highcharts.Chart | null>(null);

  useEffect(() => {
    const fetchDataAndCreateChart = async () => {
      try {
        const response = await fetch(
          'https://www.highcharts.com/samples/data/world-mortality.json'
        );
        // const data = await response.json();
        const data = treeMapData;

        const targetRects = document.querySelectorAll('rect[fill="rgb(255,0,102)"]');
        console.log(targetRects);
        let regionP,
          regionVal,
          regionI = 0,
          countryP,
          countryI,
          causeP,
          causeI,
          region,
          country,
          cause;

        const points = [],
          causeName = {
            'Communicable & other Group I': 'Discretionary Spending',
            'Noncommunicable diseases': 'Non-Discretionary Spending',
            Injuries: 'Others'
          };

        for (region in data) {
          if (Object.hasOwnProperty.call(data, region)) {
            regionVal = 0;
            regionP = {
              id: 'id_' + regionI,
              name: region,
              color: Highcharts.getOptions().colors[regionI]
            };
            countryI = 0;
            for (country in data[region]) {
              if (Object.hasOwnProperty.call(data[region], country)) {
                countryP = {
                  id: regionP.id + '_' + countryI,
                  name: country,
                  parent: regionP.id
                };
                points.push(countryP);
                causeI = 0;
                for (cause in data[region][country]) {
                  if (Object.hasOwnProperty.call(data[region][country], cause)) {
                    causeP = {
                      id: countryP.id + '_' + causeI,
                      name: causeName[cause],
                      parent: countryP.id,
                      value: Math.round(+data[region][country][cause])
                    };
                    regionVal += causeP.value;
                    points.push(causeP);
                    causeI = causeI + 1;
                  }
                }
                countryI = countryI + 1;
              }
            }
            regionP.value = Math.round(regionVal / countryI);
            points.push(regionP);
            regionI = regionI + 1;
          }
        }

        const options: Highcharts.Options = {
          series: [
            {
              name: 'Regions',
              type: 'treemap',
              layoutAlgorithm: 'squarified',
              allowDrillToNode: true,
              animationLimit: 1000,
              dataLabels: {
                enabled: false
              },
              levels: [
                {
                  level: 1,
                  dataLabels: {
                    enabled: true
                  },
                  borderWidth: 3,
                  levelIsConstant: false
                },
                {
                  level: 1,
                  dataLabels: {
                    style: {
                      fontSize: '14px'
                    }
                  }
                }
              ],
              accessibility: {
                exposeAsGroupOnly: true
              },
              data: points
            }
          ],
          title: {
            text: 'Global Global Spending, per billion',
            align: 'left'
          }
        };

        if (chartRef.current) {
          chartRef.current.destroy();
          chartRef.current = null;
        }

        chartRef.current = Highcharts.chart('treemap', options);
      } catch (error) {
        console.error('Error fetching or creating treemap chart:', error);
      }
    };

    fetchDataAndCreateChart();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  return <div id="treemap" className="w-full md:w-1/3 p-4 card h-[485px]"></div>;
};

export default HCTreeMapChart;
