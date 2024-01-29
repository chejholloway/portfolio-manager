import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import accessibility from 'highcharts/modules/accessibility';
import { darkTheme } from "../../app/constants/themeOptions";
import { BoxPlotChartOptions } from "../../app/constants/BoxPlotChartOptions";
// Initialize the additional modules
highchartsMore(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
accessibility(Highcharts);

const BoxPlotChart = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const chartOptions = BoxPlotChartOptions;


    Highcharts.theme = darkTheme;
    Highcharts.setOptions(Highcharts.theme);
    Highcharts.chart(containerRef.current, chartOptions);
  }, []);

  return (
    <div className="w-full md:w-1/3 p-4 card">
      <div ref={containerRef} />
    </div>
  );
};

export default BoxPlotChart;
