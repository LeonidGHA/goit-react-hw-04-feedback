import css from '../App.module.css';
import PropTypes from 'prop-types';

function FeedbackStatistics({
  good,
  neutral,
  bad,
  totalValue,
  positivePersentage,
}) {
  return (
    <ul className={css.statisticsList}>
      <li className={css.statisticsItem}>Good: {good}</li>
      <li className={css.statisticsItem}>Neutral: {neutral}</li>
      <li className={css.statisticsItem}>Bad: {bad}</li>
      <li className={css.statisticsItem}>Total: {totalValue}</li>
      <li className={css.statisticsItem}>
        Positive feedback: {positivePersentage} %
      </li>
    </ul>
  );
}

FeedbackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalValue: PropTypes.number.isRequired,
  positivePersentage: PropTypes.number.isRequired,
};

export default FeedbackStatistics;
