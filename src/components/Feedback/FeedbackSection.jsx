import css from '../App.module.css';
import PropTypes from 'prop-types';

function FeedbackSection({ title, children }) {
  return (
    <section>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
}

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default FeedbackSection;
