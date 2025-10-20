import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../redux/actions';
import styles from './Filter.module.css';

function Filter({ filter, setFilter }) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filter,
});

export default connect(mapStateToProps, { setFilter })(Filter);
