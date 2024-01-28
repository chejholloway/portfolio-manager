import React, { useEffect, useRef } from 'react';
import { acme_corp_data } from '../../app/constants/index';

const BollingerBandsChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Dynamic import AnyChart to ensure it's only loaded on the client side
    import('anychart').then((anychart) => {
      const data = acme_corp_data();
      const dataSet = anychart.data.set(data);
      const firstSeriesData = dataSet.mapAs({ x: 0, low: 1, high: 2 });
      const secondSeriesData = dataSet.mapAs({
        x: 0,
        open: 3,
        high: 4,
        low: 5,
        close: 6
      });
      const thirdSeriesData = dataSet.mapAs({ x: 0, value: 7 });

      const chart = anychart.area();
      chart.title('Stock Prices: 05.11.21 - 07.08.21');
      chart.bounds(0, 0, '100%', '70%');
      chart.rangeSplineArea(firstSeriesData).name('Volume');
      chart.candlestick(secondSeriesData).name('Candlestick');
      chart.spline(thirdSeriesData).markers(null).name('Frequency');

      const xScale = chart.xScale();
      xScale.inverted(true);
      xScale.ticks().interval(7);

      const xAxis = chart.xAxis();
      xAxis.drawFirstLabel(false).labels().format(function () {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(this.value).toLocaleDateString('en-US', options);
      });

      chart.tooltip().displayMode('union').titleFormat(function () {
        return anychart.format.dateTime(this.points[0].x, 'MM/dd/yyyy', null, null);
      }).unionFormat(function () {
        return (
          this.points[0].seriesName +
          '\nHigh: ' + this.points[0].high.toFixed(2) +
          '\nLow: ' + this.points[0].low.toFixed(2) +
          '\n\n' +
          this.points[1].seriesName +
          '\nOpen: ' + this.points[1].open +
          '\nHigh: ' + this.points[1].high +
          '\nLow: ' + this.points[1].low +
          '\nClose: ' + this.points[1].close +
          '\n\n' +
          this.points[2].seriesName +
          '\nValue: ' + this.points[2].value.toFixed(2)
        );
      });

      chart.container(containerRef.current!);
      chart.background().enabled(true);
      chart.background().fill('#24303F 0.2');
      chart.draw();
    });
  }, []);

  return (
    <>

      <div className="w-full md:w-1/3 p-4 card">
        <div id="container" ref={containerRef} className="h-[450px]"></div>
      </div>

    </>
  );
};

export default BollingerBandsChart;
