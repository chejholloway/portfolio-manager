// components/HorizontalBoxPlot.tsx
import React, { useEffect, useRef } from 'react';
import { scaleLinear } from 'd3-scale';
import { axisBottom, select } from 'd3-selection';
import { boxPlot, extentLinear, dataJoin } from 'd3fc';
import * as d3 from 'd3';

interface HorizontalBoxPlotProps {
  financialData?: { name: string; min: number; q1: number; median: number; q3: number; max: number }[];
}

const HorizontalBoxPlot: React.FC<HorizontalBoxPlotProps> = ({ financialData }) => {
  const containerRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !Array.isArray(financialData)) return;

    // Prepare the data for d3fc.boxPlot
    const boxes = financialData.map(({ name, min, q1, median, q3, max }) => ({
      name,
      low: min,
      q1,
      median,
      q3,
      high: max,
    }));

    // Create scales
    const xScale = scaleLinear().domain(extentLinear().accessors([d => d.low, d => d.high])(boxes)).range([0, width]);

    // Create axis using d3-axis
    const xAxis = d3.axisBottom(xScale);

    // Use d3-selection to render the box plot
    const join = dataJoin('g', 'box-plot');
    const svg = select(containerRef.current).datum(boxes);

    join(svg, boxes)
      .call(xAxis)
      .call(boxPlot());

  }, [financialData]);

  return (
    <div className="w-full md:w-1/3 p-4 card">
      <svg ref={containerRef} width="100%"height='100%' />
    </div>
  );
};

export default HorizontalBoxPlot;
