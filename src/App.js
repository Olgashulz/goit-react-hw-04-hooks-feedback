import { useState } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';

export default function FeedBackForm() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const addFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(good => good + 1);

      case 'neutral':
        return setNeutral(neutral => neutral + 1);

      case 'bad':
        return setBad(bad => bad + 1);

      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.round((100 * good) / (good + bad));

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'bad', 'neutral']}
        onLeaveFeedback={addFeedback}
      />

      {total > 0 && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </Section>
  );
}
