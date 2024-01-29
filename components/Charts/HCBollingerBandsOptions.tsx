export const options: Highcharts.Options = {
    chart: {
      type: 'stock',
    },
    title: {
      text: 'Stock Prices: 05.11.21 - 07.08.21',
    },
    xAxis: {
      categories: categories,
    },
    yAxis: {
      opposite: false,
    },
    series: series,
    tooltip: {
      split: true,
      shared: true,
      xDateFormat: '%A, %b %e, %Y',
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
    },
  };