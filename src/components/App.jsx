import css from './App.module.css';
import { useState } from 'react';

import FeedbackOptions from './Feedback/FeedbackOptions';
import FeedbackSection from './Feedback/FeedbackSection';
import FeedbackStatistics from './Feedback/FeedbackStatistics';

import Notification from './Feedback/Notification ';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'Good':
        setGood(prevState => prevState + 1);
        break;
      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'Bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalValueVote = () => {
    return good + neutral + bad;
  };
  const total = totalValueVote();
  const positivePersentageVote = () => {
    const result = (good / totalValueVote()) * 100;
    return Math.round(result);
  };

  return (
    <div className={css.app}>
      <div className={css.container}>
        <FeedbackSection title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </FeedbackSection>
        <FeedbackSection title="Statistics">
          {total === 0 ? (
            <Notification title="There is no feedback" />
          ) : (
            <FeedbackStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalValue={total}
              positivePersentage={positivePersentageVote()}
            />
          )}
        </FeedbackSection>
      </div>
    </div>
  );
}

export default App;
