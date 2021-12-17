import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

// const stats = data;

const Statistics = ({ title, stats }) => {
  return (
    <div>
      {title ? (
        <section className={styles.statistics}>
          <h2 className={styles.title}>Upload stats</h2>

          <ul className={styles.statList}>
            {stats.map(el => (
              <li
                key={el.id}
                className={styles.item}
                style={{
                  backgroundColor: randColor(),
                }}
              >
                <span className={styles.label}>{el.label}</span>
                <span className={styles.percentage}>{el.percentage}%</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;

function randColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}
