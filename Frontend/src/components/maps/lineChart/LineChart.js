import React, { useState, useEffect, useRef } from 'react';
import useResizeObserver from '../../../hooks/useResizeObserver';
import {
  select,
  line,
  scaleLinear,
  aaxisBottom,
  axisLeft,
  axisBottom,
} from 'd3';
// import { Line } from 'react-chartjs-2';
// const d3 = require('d3');

const state = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

function LineChart({ data }) {
  const wrapperRef = useRef();
  const svgRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  //   const [indiaData, setIndiaData] = useState([]);

  //   const data = [10, 20, 30, 40, 50];

  //   useEffect(() => {
  //     // console.log(data);

  //     if (!data) return;

  //     if (!data[0]) return;

  //     const yearsArray = Object.keys(data[0].Data);

  //     const indiaData = yearsArray.map((year) => {
  //       return { key: year, value: data[0].Data[year] };
  //     });
  //   }, [data]);

  return (
    <div>
      {/* <Line
        data={state}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      /> */}
    </div>
  );
}

export default LineChart;
