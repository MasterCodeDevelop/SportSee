/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getUserActivity } from '../functions/get';
import Loading from './Loading';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function Activity({ userId }) {
  const [userActivity, setUserActivity] = useState(null);
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
  useEffect(() => {
    if (userActivity === null) getUserActivity({ userId, setUserActivity });
  }, [userActivity]);

  return (
    <section className="activity">
      {userActivity === null ? (
        <Loading />
      ) : (
        <>
          <div className="activity-header">
            <h2>Activité quotidienne</h2>
            <div>
              <p>Poid (kg)</p>
              <p>Calories brûlées (kCal)</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="60%">
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
                yAxisId="right"
                dataKey="kilogram"
                fill={'#282D30'}
                radius={[5, 5, 0, 0]}
              />
              <Bar
                yAxisId="left"
                dataKey="calories"
                fill={'#E60000'}
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </section>
  );
}
