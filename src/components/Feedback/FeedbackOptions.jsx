import css from '../App.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function FeedbackOptions({ options, onLeaveFeedback }) {
  // const [good, neutral, bad] = options;
  return (
    <ul className={css.btnList}>
      {options.map(el => (
        <li key={nanoid()}>
          <button
            className={css.btn}
            type="button"
            onClick={() => onLeaveFeedback(el)}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
  // return (
  //   <ul className={css.btnList}>
  //     <li>
  //       <button
  //         className={css.btn}
  //         type="button"
  //         onClick={() => onLeaveFeedback(good)}
  //       >
  //         Good
  //       </button>
  //     </li>
  //     <li>
  //       <button
  //         className={css.btn}
  //         type="button"
  //         onClick={() => onLeaveFeedback(neutral)}
  //       >
  //         Neutral
  //       </button>
  //     </li>
  //     <li>
  //       <button
  //         className={css.btn}
  //         type="button"
  //         onClick={() => onLeaveFeedback(bad)}
  //       >
  //         Bad
  //       </button>
  //     </li>
  //   </ul>
  // );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
