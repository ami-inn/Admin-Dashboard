/* eslint-disable no-dupe-keys */
import React, { useState } from "react";
import Chart from 'react-apexcharts';

const SampleChart = () => {
  const [options, setOptions] = useState({
    chart: {
      height: 180, // Set the desired height here
      maxWidth: "100%",
      type: "line",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26,
      },
    },
    series: [
      {
        name: "Clicks",
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: "#1A56DB",
      },
      {
        name: "CPC",
        data: [6456, 6356, 6526, 6332, 6418, 6500],
        color: "#7E3AF2",
      },
    ],
    legend: {
      show: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul','aug'],
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {

        show: false,
      },
    },
    yaxis: {
        categories:['20k','15k','10k','0'],
        labels:{
            show:true,
            style: {
                fontFamily: "Inter, sans-serif",
                cssClass: 'text-xs font-normal fill-gray-500',
              },
        },
    },
  });

  return (
//     <div className="w-full h-72 bg-blue">
//     <Chart options={options} series={options.series} type="line" width={800} height={options.chart.height} />
//   </div>
<div className="max-w-full w-full bg-white  rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  p-4">
  <div className="flex justify-between">
    <div>
      <h5 className="leading-none text-3xl font-bold text-gray-900  pb-2">Revenue</h5>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">This Month</p>
    </div>
    <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      12%
      <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13V1m0 0L1 5m4-4 4 4" />
      </svg>
    </div>
  </div>
  <div className="mt-2">
  <Chart options={options} series={options.series} type="line" width={800} height={options.chart.height} />
  </div>
 
</div>

  );
};

export default SampleChart;
