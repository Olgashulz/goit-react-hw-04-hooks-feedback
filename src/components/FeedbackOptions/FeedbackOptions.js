import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  // console.log(options)
  return (
    <div className={styles.buttonsBox}>
      {options.map(option => (
        <Button
          key={option}
          textBtn={option}
          onLeaveFeedback={() => onLeaveFeedback(option)}
        />
      ))}
    </div>
  );
}

Button.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
