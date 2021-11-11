import React, { useState } from "react";

import Questions from "../components/Questions";

import Button from "@mui/material/Button";
import { useHistory, useRouteMatch } from "react-router-dom";
import { EnglishjsonArray, defaultObj } from "./defaultJson";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducer";
// let questionJson = [...jsonArray];

const McqContainer = () => {
  let languagestate = useSelector(
    (state: RootState) => state.detailsReducer.language
  );
  const [questionJson, setQuestionJson] = useState<any>([
    ...defaultObj[languagestate],
  ]);

  const [questionObject, setQuestionObject] = useState<any>(questionJson[0]);
  const [indexNumber, setIndexNumber] = useState<number>(0);

  let { path, url } = useRouteMatch();

  const history = useHistory();
  let buttonArray = [1, 2, 3, 4, 5];
  const handleCLickQuestion = (e: any, item: any, index: any) => {
    e.preventDefault();

    setQuestionObject(questionJson[index]);
    setIndexNumber(index);
  };

  const handleSetAnswer = (ans: any, id: any) => {
    console.log("setting the naswer", ans);
    setQuestionJson(
      questionJson.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            answer: ans,
            isAnswered: item.answer.length === 0 ? false : true,
          };
        } else {
          return item;
        }
      })
    );
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
    history.push({
      pathname: "/resultPage",
      state: { questionJson },
    });
  };

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
          next
        </Button>
      </div>

      <Button variant="contained" color="info" onClick={handleFinishQuizz}>
        finish quizz
      </Button>
    </div>
  );
};

export default McqContainer;
