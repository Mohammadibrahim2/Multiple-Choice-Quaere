import React from "react";
import { useLoaderData } from "react-router-dom";
import "./stat.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Stat=()=>{
 const dataForChart=useLoaderData();
 console.log(dataForChart.data)
 const data=dataForChart.data;



    return(

<div>
   
 <div className="Rechart">

    <AreaChart
          width={450}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="total" stackId="1" stroke="red" fill="#8884d8" />
          <Area type="monotone" dataKey="total" stackId="1" stroke="blue" fill="#82ca9d" />
          <Area type="monotone" dataKey="total" stackId="1" stroke="purple" fill="#ffc658" />
        </AreaChart>

        <h1 className="my-6 text-3xl">Fig : The Question Chart</h1>
       
        </div>
   
      </div>

    )



}
export default  Stat;