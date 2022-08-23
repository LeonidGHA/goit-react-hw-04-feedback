import css from '../App.module.css';
import PropTypes from 'prop-types';

import Notiflix from 'notiflix';

function Notification({ title }) {
  Notiflix.Report.failure(
    'There is no feedback',
    'please leave vote',
    'confirm'
  );
  return <p className={css.errorMessage}>{title}</p>;
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Notification;
