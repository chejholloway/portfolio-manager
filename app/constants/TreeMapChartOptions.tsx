import Highcharts from 'highcharts';

function getData() {
  // Create data
  const data = [
    {
      id: 'sectors',
      name: 'Sectors',
      data: [
        { id: 'agriculture', name: 'Agriculture', value: 3800 },
        { id: 'technology', name: 'Technology', value: 5150 },
        { id: 'textiles', name: 'Textiles', value: 4000 },
      ],
    },
    {
      id: 'agriculture',
      name: 'Agriculture',
      parent: 'sectors',
      data: [
        { name: 'Item 1-1', value: 1000 },
        { name: 'Item 1-2', value: 2300 },
        { name: 'Item 1-3', value: 1500 },
      ],
    },
    {
      id: 'technology',
      name: 'Technology',
      parent: 'sectors',
      data: [
        { name: 'Item 2-1', value: 2100 },
        { name: 'Item 2-2', value: 560 },
        { name: 'Item 2-3', value: 400 },
      ],
    },
    {
      id: 'textiles',
      name: 'Textiles',
      parent: 'sectors',
      data: [
        { name: 'Item 3-1', value: 850 },
        { name: 'Item 3-2', value: 1350 },
        { name: 'Item 3-3', value: 1300 },
        { name: 'Item 3-4', value: 1100 },
      ],
    },
  ];
  return data;
}

const data = getData();

export const TreeMapChartOptions: Highcharts.Options = {
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
    text: 'Treemap Dummy Data',
    align: 'left'
  }
};