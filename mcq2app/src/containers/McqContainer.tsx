import React, { useState } from "react";

import Questions from "../components/Questions";

import Button from "@mui/material/Button";
import { useHistory, useRouteMatch } from "react-router-dom";
import { EnglishjsonArray, defaultObj } from "./defaultJson";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { setAnswerWithID } from "../redux/action/Action"
// let questionJson = [...jsonArray];

const McqContainer = () => {
  let languageArray = useSelector(
    (state: RootState) => state.answerReducer.answerArray
  );
  const [questionJson, setQuestionJson] = useState<any>([
    ...languageArray,
  ]);

  const [questionObject, setQuestionObject] = useState<any>(questionJson[0]);
  const [indexNumber, setIndexNumber] = useState<number>(0);



  const history = useHistory();
  const dispatch = useDispatch()
  const handleCLickQuestion = (e: any, item: any, index: any) => {
    e.preventDefault();

    setQuestionObject(questionJson[index]);
    setIndexNumber(index);
  };

  const handleSetAnswer = (ans: any, id: any) => {

    dispatch(setAnswerWithID({ ans, id }))

  };

  const hadnlePreviousQuestion = () => {
    if (indexNumber > 0) {
      setQuestionObject(questionJson[indexNumber - 1]);
      setIndexNumber(indexNumber - 1);
    }
  };
  const hadnleNextQuestion = () => {
    if (indexNumber < questionJson.length - 1) {
      setQuestionObject(questionJson[indexNumber + 1]);
      setIndexNumber(indexNumber + 1);
    }
  };

  const handleFinishQuizz = () => {
    history.push("/resultPage")
  };
  console.log(questionJson)
  return (
    <div>
      <div>
        {questionJson.map((item: any, index: any) => (
          <Button
            variant="contained"
            onClick={(e: any) => handleCLickQuestion(e, item, index)}
            key={index}
            className={
              item.answer.length === 0
                ? "m-3 rounded-circle "
                : " bg-warning m-3 rounded-circle"
            }
          >
            {index + 1}
          </Button>
        ))}
      </div>

      <Questions
        questionObject={questionObject}
        handleSetAnswer={handleSetAnswer}
      />

      <div>
        <Button
          variant="contained"
          color="secondary"
          className="m-2"
          onClick={hadnlePreviousQuestion}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="success"
          className="m-2"
          onClick={hadnleNextQuestion}
        >
          Next
        </Button>
      </div>

      <Button variant="contained" color="info" onClick={handleFinishQuizz}>
        Finish Quizz
      </Button>
    </div>
  );
};

export default McqContainer;
