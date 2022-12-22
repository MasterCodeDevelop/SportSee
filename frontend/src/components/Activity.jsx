/* eslint-disable react/prop-types */
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function Activity({ userActivity }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="activity-tooltip">
          <p>
            {payload[0].value +
              (payload[0].name === 'kilogram' ? 'kg' : 'kCal')}
          </p>
          <p>
            {payload[1].value +
              (payload[1].name === 'kilogram' ? 'kg' : 'kCal')}
          </p>
        </div>
      );
    }
    return null;
  };
  const Graph = () => {
    return (
      <ResponsiveContainer>
        <BarChart data={userActivity} barGap={8} barSize={7}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={15}
          />
          <YAxis
            dataKey="kilogram"
            yAxisId="right"
            orientation="right"
            domain={['dataMin - 2', 'dataMax + 2']}
            axisLine={false}
            tickLine={false}
            tickMargin={15}
          />
          <YAxis dataKey="calories" yAxisId="left" hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid vertical={false} strokeDasharray="2" />
          <Bar
            className="bar bar-left"
            yAxisId="right"
            dataKey="kilogram"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            className="bar bar-right"
            yAxisId="left"
            dataKey="calories"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  return (
    <section className="activity">
      <div className="activity-header">
        <h2>Activité quotidienne</h2>
        <div>
          <p>Poid (kg)</p>
          <p>Calories brûlées (kCal)</p>
        </div>
      </div>
      <div className="activity-graph">
        <Graph />
      </div>
    </section>
  );
}
