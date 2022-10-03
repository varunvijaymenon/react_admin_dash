import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './CustomAreaChart.css'

const data = [
    {
      "name": "Jan",
      "Earnings": '0'
    },
    {
      "name": "Feb",
      "Earnings": '10000'
    },
    {
      "name": "Mar",
      "Earnings": '5000'
    },
    {
      "name": "Apr",
      "Earnings": '15000'
    },
    {
      "name": "May",
      "Earnings": '10000'
    },
    {
      "name": "Jun",
      "Earnings": '20000'
    },
    {
      "name": "Jul",
      "Earnings": '15000'
    },
    {
        "name": "Aug",
        "Earnings": '25000'
      },
      {
        "name": "Sep",
        "Earnings": '20000'
      },
      {
        "name": "Oct",
        "Earnings": '30000'
      },
      {
        "name": "Nov",
        "Earnings": '25000'
      },
      {
        "name": "Dec",
        "Earnings": '35000'
      },
  ]

  const formatYaxis = (tickItem) => {
    return '$'+ new Intl.NumberFormat().format(tickItem);
  }

  const CustomTooltip = ({active, payload, label}) => {
    if(!payload[0]) return null;
    else {
      return (
          <div className="custom-tooltip" style={{ textAlign: 'left', padding: '0.75em'}}>
            <p className='label' style={{display: 'inline', margin:'0', fontSize: '0.9em', color: '#848796', fontWeight: 'bold'}}>{label}</p>
            <p className="payload" style={{fontSize:'0.75em', color:'#9495A2', margin:'0'}}>{'Earnings : ' + '$'+ new Intl.NumberFormat().format(payload[0].value)}</p>
          </div>
        )
      }
  }

export default function CustomAreaChart() {
  return (
    <div>
        <AreaChart width={950} height={350} data={data}
            margin={{ top: 15, right: 50, left: 20, bottom: 15 }}>
            <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4E73DF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4E73DF" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12.75} interval={1}/>
            <YAxis type='number' axisLine={false} tickLine={false} domain={[0,40000]} tickFormatter={formatYaxis} fontSize={12.75}/>
            <CartesianGrid  vertical={false} strokeDasharray='1.5'/>
            <Tooltip content={<CustomTooltip/>} wrapperStyle={{backgroundColor: 'white', border: '1px solid #d5d5d5', borderRadius: 3}} cursor={false}/>
            <Area type="monotone" dataKey="Earnings" stroke="#4E73DF" fillOpacity={0.25} fill="url(#colorPv)" strokeWidth={3} dot={true}/>
        </AreaChart>
        </div>
  )
}
