import React from 'react';
import Completion from '../Completion/Completion';
import AnswerQuestions from '../AnswerQuestions/AnswerQuestions';
import ChoiceQuestion from '../ChoiceQuestion/ChoiceQuestion';
import { QUESTIONTYPES } from '../../StaticAttr';

const Question = ({ type, ...others }) => {
  switch (type) {
    case QUESTIONTYPES.CHOICE:
      return <ChoiceQuestion {...others} />;
    case QUESTIONTYPES.COMPLETE:
      return <Completion {...others} />;
    case QUESTIONTYPES.ANSWER:
      return <AnswerQuestions {...others} />;
    default:
      return null;
  }
};

export default Question;
