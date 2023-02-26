import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.buttons}>
    <button type="button" name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
