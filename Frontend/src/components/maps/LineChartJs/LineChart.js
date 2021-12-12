import React, { useState, useEffect } from 'react';
import { Line as LineJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const LineChart = ({ dataApi, forestCover, years }) => {
  //   const [dataApi, setDataApi] = useState([]);
  //   const [years, setYears] = useState([]);
  //   const [forestCover, setForestCover] = useState([]);
  //   let years = [];
  //   let forestCover = [];

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:5000/', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data.Data);

    // console.log(
    //   data['Data'].forEach((year) => year['Total Forest Cover Area'])
    // );

    // for( in data.Data){

    // }
    // Object.keys(data.Data).forEach((year) =>
    //   console.log(year['Total Forest Cover Area'])
    // );

    // setYears(Object.keys(data.Data));

    // years = Object.keys(data.Data);

    // setForestCover(
    //   years.map((item) => data.Data[item]['Total Forest Cover Area'])
    // );

    // forestCover = years.map(
    //   (item) => data.Data[item]['Total Forest Cover Area']
    // );

    // console.log(data.Data['2019']['Total Forest Cover Area']);

    console.log(years);
    console.log(forestCover);

    // setDataApi([data]);

    // setIndiaData([data]);
  };

  //   useEffect(() => {
  //     fetchData();
  //   }, [forestCover.length]);
  //   return (
  //     {
  //         forestCover ? (<>Loading</>) : (
  //
  //         )
  //     }
  //   )
  //     // return (

  //     // );

  return (
    <>
      <div>
        {dataApi.length !== 0 && (
          <Line
            data={{
              labels: years,
              datasets: [
                {
                  label: 'forestCover',
                  data: forestCover,
                  backgroundColor: ['rgb(255, 99, 132)'],
                  //   borderColor: [
                  //     'rgba(255, 99, 132, 1)',
                  //     'rgba(54, 162, 235, 1)',
                  //     'rgba(255, 206, 86, 1)',
                  //     'rgba(75, 192, 192, 1)',
                  //     'rgba(153, 102, 255, 1)',
                  //     'rgba(255, 159, 64, 1)',
                  //   ],
                  borderWidth: 1,
                },
              ],
            }}
            height={120}
            width={240}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        )}
      </div>
    </>
  );
};

export default LineChart;
