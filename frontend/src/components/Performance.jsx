import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

function Performance({ userPerformance }) {
  return (
    <section className="performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={userPerformance}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar dataKey="value" dot={false} fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}
Performance.propTypes = { userPerformance: PropTypes.array };

export default Performance;
