import React, { useState } from "react";

import QUESTIONS from "../questions.js";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  return <div>quiz</div>;
}

export default Quiz;
