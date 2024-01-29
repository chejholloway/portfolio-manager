import React, { useEffect, useRef } from 'react';
import { acme_corp_data } from '../../app/constants/index';

const BollingerBandsChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const renderChart = async () => {
      const anychart = await import('anychart');
      const data = acme_corp_data();
      const dataSet = anychart.data.set(data);
      const firstSeriesData = dataSet.mapAs({ x: 0, low: 1, high: 2 });
      const secondSeriesData = dataSet.mapAs({
        x: 0,
        open: 3,
        high: 4,
        low: 5,
        close: 6,
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
        return anychart.format.dateTime(
          this.points[0].x,
          'MM/dd/yyyy',
          null,
          null
        );
      }).unionFormat(function () {
        return `${this.points[0].seriesName}
          High: ${this.points[0].high.toFixed(2)}
          Low: ${this.points[0].low.toFixed(2)}

          ${this.points[1].seriesName}
          Open: ${this.points[1].open}
          High: ${this.points[1].high}
          Low: ${this.points[1].low}
          Close: ${this.points[1].close}

          ${this.points[2].seriesName}
          Value: ${this.points[2].value.toFixed(2)}`;
      });

      chart.container(containerRef.current!);
      chart.background().enabled(true);
      chart.background().fill('#24303F 0.2');
      chart.draw();
    };

    // Invoke the async function immediately
    renderChart();
  }, []); // Empty dependency array to ensure it runs only once on mount

  return (
    <>

      <div className="">
        <div
          id="container"
          ref={containerRef}
          style={{ height: '590px', width: '555px', position: 'absolute' }}
        />
      </div>
    </>
  );
};

export default BollingerBandsChart;
