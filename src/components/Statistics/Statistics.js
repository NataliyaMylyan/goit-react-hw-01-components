import React from 'react';
// import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { PropTypes } from 'prop-types';
import getRandomColor from './getRandomColors';
const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            className={s.item}
            style={{
              backgroundColor: getRandomColor(),
              // '#' + Math.floor(Math.random() * 16777215).toString(16),
            }}
            key={stat.id}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
