import React,{ useState} from 'react';
import {Chart as ChartJs, Tooltip, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(ArcElement, Tooltip, Legend);


const options = {
          tooltips: {enabled: true},
                    plugins: {
                        tooltip: {
                        callbacks: {
                         label: data => ` ${data.formattedValue} %`
                  },
                  titleFont:{weight: '20px'}
              },
              legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 20
                    }
                }
            }
        },
  };


const Chartgraph = () => {


    const [data, setData] = useState({
          datasets: [{
              data: [6.7, 20, 20,53.3],
              backgroundColor:[
                '#72C6EF',
                '#0AD7E4',
                '#6A2BBA',
                '#4E54C8'
              ],
              borderWidth: 0,
          },
          
        ],
    });

    return (
        <div>
            <Doughnut
            data={data}
            options={options}
             label= {'string'}
             />
        </div>  
    );
};

export default Chartgraph;