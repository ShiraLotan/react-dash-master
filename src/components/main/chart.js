import React from "react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import '../../style/chart.scss';

export default function Chart() {


  const data = [
    {
      name: '', Widget1: 33, Widget2: 39, amt: 2400,
    },
    {
      name: '', Widget1: 45, Widget2: 42, amt: 2210,
    }
  ];

  return (
    <div className="Chart">
      <h1>Check tour statistics:</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          barCategoryGap={2}
          margin={{
            top: 5, right: 10, left: 10, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="10 10" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Widget1" fill="#8884d8" />
          <Bar dataKey="Widget2" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}