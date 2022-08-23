import css from '../App.module.css';

import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.btnList}>
      {options.map(el => (
        <li key={nanoid()}>
          <button className={css.btn} name={el} onClick={onLeaveFeedback}>
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
