import Head from 'next/head';
import { useEffect } from 'react';
import { acme_corp_data } from '../../app/constants/index';
import anychart from 'anychart';
import useLoadHandler from '../hooks/useLoadHandler';

const BollingerBandsChart: React.FC = () => {
  useEffect(() => {
    anychart.onDocumentReady(function () {
      // anychart.theme('darkBlue');
      let data = acme_corp_data();
      let stage = anychart.graphics.create('container');
      let dataSet = anychart.data.set(data);
      let firstSeriesData = dataSet.mapAs({ x: 0, low: 1, high: 2 });
      // map data for the candlestick series
      let secondSeriesData = dataSet.mapAs({
        x: 0,
        open: 3,
        high: 4,
        low: 5,
        close: 6
      });
      // map data for the spline series
      let thirdSeriesData = dataSet.mapAs({ x: 0, value: 7 });

      // create chart
      let chart = anychart.area();
      // set title
      chart.title('Stock Prices:  05.11.21 - 07.08.21');
      // set position for the first stage
      chart.bounds(0, 0, '100%', '70%');
      // create range spline area series
      chart.rangeSplineArea(firstSeriesData).name('Volume');
      // create candlestick series
      chart.candlestick(secondSeriesData).name('Candlestick');
      // create spline series
      chart.spline(thirdSeriesData).markers(null).name('Frequency');

      // set xScale settings
      let xScale = chart.xScale();
      xScale.inverted(true);

      // set xTicks settings
      xScale.ticks().interval(7);

      // set xAxis settings
      chart
        .xAxis()
        .drawFirstLabel(false)
        .labels()
        .format(function () {
          let options = { year: 'numeric', month: 'long', day: 'numeric' };
          return new Date(this.value).toLocaleDateString('en-US', options);
        });

      // set tooltip settings
      chart
        .tooltip()
        .displayMode('union')
        .titleFormat(function () {
          return anychart.format.dateTime(
            this.points[0].x,
            'MM/dd/yyyy',
            null,
            null
          );
        })
        .unionFormat(function () {
          return (
            this.points[0].seriesName +
            '\nHigh: ' +
            this.points[0].high.toFixed(2) +
            '\nLow: ' +
            this.points[0].low.toFixed(2) +
            '\n\n' +
            this.points[1].seriesName +
            '\nOpen: ' +
            this.points[1].open +
            '\nHigh: ' +
            this.points[1].high +
            '\nLow: ' +
            this.points[1].low +
            '\nClose: ' +
            this.points[1].close +
            '\n\n' +
            this.points[2].seriesName +
            '\nValue: ' +
            this.points[2].value.toFixed(2)
          );
        });
      // set stage for the chart
      chart.container(stage);
      chart.background().enabled(true);
      chart.background().fill("#24303F 0.2");
      // initiate chart drawing
      chart.draw();

    });
  }, []);

  return (
    <>
      <style jsx global>{`
        #container {
          width: 100%;
          min-height: 505px;
          margin: 0;
          padding: 0;
          background-color: transparent;
        }

        #container > div {
          width: 100%;
          height: 100%;
        }
      `}</style>
      <div id="container" className="w-full p-4 card"></div>
    </>
  )
};

export default BollingerBandsChart;
