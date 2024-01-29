import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import highchartsTreemap from 'highcharts/modules/treemap';
import HighchartsReact from 'highcharts-react-official';

// Initialize the treemap module
highchartsTreemap(Highcharts);

const TreeMapChart: React.FC = () => {
  const chartRef = useRef<Highcharts.Chart | null>(null);

  useEffect(() => {
    const fetchDataAndCreateChart = async () => {
      try {
        const response = await fetch(
          'https://www.highcharts.com/samples/data/world-mortality.json'
        );
        const data = await response.json();

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
            'Communicable & other Group I': 'Communicable diseases',
            'Noncommunicable diseases': 'Non-communicable diseases',
            Injuries: 'Injuries'
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
            text: 'Dummy Data',
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

  return <div id="treemap" className="w-full md:w-1/3 p-4 card h-full"></div>;
};

export default TreeMapChart;
