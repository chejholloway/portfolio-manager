// Import statements
import React, { useEffect } from 'react';
import anychart from 'anychart';

const TreeMapChart: React.FC = () => {
  useEffect(() => {
    // Use useEffect with an empty dependency array to ensure it runs only on mount
    anychart.onDocumentReady(() => {
      let data = getData();
      console.log('TreeMap Data: ', data);

      let treeData = anychart.data.tree(data, 'as-tree');
      let chart = anychart.treeMap(treeData);
      chart.hintDepth(2);
      chart.labels().format('{%name}');

      chart.listen('chartDraw', () => {
        let text = printPath(chart.getDrilldownPath());
        chart.title().useHtml(true);
        chart.title(
          'Treemap: Interactivity (Drilling Down and Up)<br><br>Path: ' +
            "<span style='color:#990000; font-style:italic'>" +
            text +
            '</span>'
        );
      });

      chart.container('treemap');
      chart.draw();

      // Disable Fast Refresh for development
      if (process.env.NODE_ENV === 'development') {
        module.hot.accept();
      }
    });
  }, []); // Empty dependency array to run only on mount

  // Corrected placement of the return statement
  return (
    <>
      <style jsx global>{`
        #treemap {
          width: 100%;
          min-height: 505px;
          margin: 0;
          padding: 0;
          background-color: transparent;
        }

        #treemap > div {
          width: 100%;
          height: auto;
        }
      `}</style>
      <div className="w-full md:w-1/3 p-4 card">
        <div id="treemap"></div>
      </div>
    </>
  );
};

function getData() {
  // create data
  let data = [
	{name:       "Root", children: [
	  {name:     "Item 1", children: [
		{name:   "Item 1-1", children: [
		  {name: "Item 1-1-1", value: 1000},
		  {name: "Item 1-1-2", value:  600},
		  {name: "Item 1-1-3", value:  550},
		  {name: "Item 1-1-4", value:  300},
		  {name: "Item 1-1-5", value:  150}
		]},
		{name:   "Item 1-2",   value: 2300},
		{name:   "Item 1-3",   value: 1500}
	  ]},
	  {name:     "Item 2", children: [
		{name:   "Item 2-1", children: [
		  {name: "Item 2-1-1", value: 2100},
		  {name: "Item 2-1-2", value: 1000},
		  {name: "Item 2-1-3", value:  800},
		  {name: "Item 2-1-4", value:  750}
		]},
		{name:   "Item 2-2", children: [
		  {name: "Item 2-2-1", value:  560},
		  {name: "Item 2-2-2", value:  300},
		  {name: "Item 2-2-3", value:  150},
		  {name: "Item 2-2-4", value:   90}
		]},
		{name:   "Item 2-3",   value:  400}
	  ]},
	  {name:     "Item 3", children: [
		{name:   "Item 3-1", children: [
		  {name: "Item 3-1-1", value:  850},
		  {name: "Item 3-1-2", value:  400},
		  {name: "Item 3-1-3", value:  150}
		]},
		{name:   "Item 3-2",   value: 1350},
		{name:   "Item 3-3",   value: 1300},
		{name:   "Item 3-4", children: [
		  {name: "Item 3-4-1", value:  400},
		  {name: "Item 3-4-2", value:  300},
		  {name: "Item 3-4-3", value:  250},
		  {name: "Item 3-4-4", value:  150}
		]}
	  ]}
	]}
  ];
  return data;
}

function printPath(path) {
  let text = "";
  for (let i = 0; i <  path.length; i++) {
	text += path[i].get("name") + "\\";
  }
  return text;
}

// drill down to a data item
function drillToItem() {
  let item = treeData.search("name", "Item 3-4");
  chart.drillTo(item);
}

function drillUpALevel() {
  chart.drillUp();
}

export default TreeMapChart;