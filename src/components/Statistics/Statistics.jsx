import React from 'react';
import s from './Statistics.module.css';
import { PropTypes } from 'prop-types';
import { getRandomColor } from '../../helpers/getRandomColors';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            style={{
              backgroundColor: getRandomColor(),
            }}
            key={id}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
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
