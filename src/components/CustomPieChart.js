import React from 'react'
import { PieChart, Pie, Sector, Cell, Tooltip, Legend } from "recharts";

const data = [
    { name: "Direct", value: 55 },
    { name: "Social", value: 15 },
    { name: "Referral", value: 30 }
  ];

const COLORS = ["#4E73DF", "#36B9CC", "#1BC88A"];

const CustomTooltip = ({active, payload, label}) => {
    {console.log(payload)}
    if(!payload[0]) return null;
    else {
      return (
          <div className="custom-tooltip" style={{ textAlign: 'left', padding: '0.75em'}}>
            <p className="payload" style={{fontSize:'0.75em', color:'#9495A2', margin:'0'}}>{ payload[0].name + ':' + new Intl.NumberFormat().format(payload[0].value)}</p>
          </div>
        )
      }
  }

export default function CustomPieChart() {
  return (
    <PieChart width={460} height={350}>
    <Pie
      data={data}
      innerRadius={100}
      outerRadius={125}
      fill="#8884d8"
      paddingAngle={1}
      dataKey="value"
      startAngle={-100}
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip content={<CustomTooltip/>} wrapperStyle={{backgroundColor: 'white', border: '1px solid #d5d5d5', borderRadius: 3}} cursor={false}/>
    <Legend verticalAlign="bottom" height={36} iconSize={10} iconType='circle' formatter={(value, entry) =>{return <span style={{color:'#848796', fontSize:'0.85em'}}>{value}</span>}}/>
    </PieChart>
  )
}
