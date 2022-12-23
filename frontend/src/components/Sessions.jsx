import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Rectangle,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className>{payload[0].value + ' min'}</p>
      </div>
    );
  }

  return null;
};
const CustomizedCursor = ({ width, points }) => {
  return (
    <Rectangle
      fill="rgba(0,0,0,0.1)"
      width={width}
      height={width}
      x={points[0].x}
    />
  );
};
const Graph = ({ userSessions }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={userSessions} margin={{ bottom: 15 }}>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          padding={{
            left: 14,
            right: 20,
          }}
        />
        <YAxis
          dataKey="sessionLength"
          hide={true}
          domain={['dataMin - 20', 'dataMax + 50']}
        />
        <Tooltip content={<CustomTooltip />} cursor={<CustomizedCursor />} />
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="white" stopOpacity={0.4} />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="url(#gradient)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: '#fff',
            strokeWidth: '0.15vw',
            r: 5,
            fill: '#fff',
          }}
          connectNulls={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default function Sessions({ userSessions }) {
  return (
    <section className="sessions">
      <div className="sessions-header">
        <h2>Durée moyenne des sessions</h2>
      </div>
      <Graph userSessions={userSessions} />
    </section>
  );
}
