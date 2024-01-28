import React, { useEffect, useRef } from 'react';
import anychart from 'anychart';

const TreeMapChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  let chart: any = null;

  useEffect(() => {
    const initializeChart = () => {
      if (!containerRef.current) return;

      const data = getData();
      const treeData = anychart.data.tree(data, 'as-tree');

      chart = anychart.treeMap(treeData);
      chart.hintDepth(2);
      chart.labels().format('{%name}');

      chart.listen('chartDraw', () => {
        const text = printPath(chart.getDrilldownPath());
        chart.title().useHtml(true);
        chart.title('All US Sectors ');
      });

      chart.container(containerRef.current);
      chart.draw();
    };

    initializeChart();

    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, []);

  const drillToItem = () => {
    const item = chart && chart.search('name', 'Item 3-4');
    if (item) {
      chart.drillTo(item);
    }
  };

  const drillUpALevel = () => {
    if (chart) {
      chart.drillUp();
    }
  };

  return (
    <div className="w-full md:w-1/3 p-4 card">
      <div id="treemap" ref={containerRef} className="h-full"></div>
    </div>
  );
};

function getData() {
  // create data
  const data = [
    { name: 'Sectors', children: [
      { name: 'Agriculture', children: [
        { name: 'Item 1-1', children: [
          { name: 'Item 1-1-1', value: 1000 },
          { name: 'Item 1-1-2', value: 600 },
          { name: 'Item 1-1-3', value: 550 },
          { name: 'Item 1-1-4', value: 300 },
          { name: 'Item 1-1-5', value: 150 }
        ]},
        { name: 'Item 1-2', value: 2300 },
        { name: 'Item 1-3', value: 1500 }
      ]},
      { name: 'Technology', children: [
        { name: 'Item 2-1', children: [
          { name: 'Item 2-1-1', value: 2100 },
          { name: 'Item 2-1-2', value: 1000 },
          { name: 'Item 2-1-3', value: 800 },
          { name: 'Item 2-1-4', value: 750 }
        ]},
        { name: 'Item 2-2', children: [
          { name: 'Item 2-2-1', value: 560 },
          { name: 'Item 2-2-2', value: 300 },
          { name: 'Item 2-2-3', value: 150 },
          { name: 'Item 2-2-4', value: 90 }
        ]},
        { name: 'Item 2-3', value: 400 }
      ]},
      { name: 'Textiles', children: [
        { name: 'Item 3-1', children: [
          { name: 'Item 3-1-1', value: 850 },
          { name: 'Item 3-1-2', value: 400 },
          { name: 'Item 3-1-3', value: 150 }
        ]},
        { name: 'Item 3-2', value: 1350 },
        { name: 'Item 3-3', value: 1300 },
        { name: 'Item 3-4', children: [
          { name: 'Item 3-4-1', value: 400 },
          { name: 'Item 3-4-2', value: 300 },
          { name: 'Item 3-4-3', value: 250 },
          { name: 'Item 3-4-4', value: 150 }
        ]}
      ]}
    ]}
  ];
  return data;
}

function printPath(path) {
  let text = '';
  if (path && path.length) {
    for (let i = 0; i < path.length; i++) {
      text += path[i].get('name') + '\\';
    }
  }
  return text;
}

export default TreeMapChart;
