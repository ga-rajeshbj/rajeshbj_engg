import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
const ResultPage = () => {

  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [wrongAnswersCount, setWrongAnswersCount] = useState<number>(0);
  const questionJson = useSelector((state: RootState) => state.answerReducer.answerArray)

  useEffect(() => {
    let correctCount = 0;
    let wrongCount = 0;
    console.log(questionJson)
    questionJson.map((item: any) => {
      if (item.ismultiselect) {
        item.correctanswer.length === item.answer.length
          ? item.correctanswer.every((val: any) => item.answer.includes(val)) &&
          correctCount++
          : wrongCount++;
      } else {
        if (item.answer === item.correctanswer) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    });
    setWrongAnswersCount(wrongCount);
    setCorrectAnswersCount(correctCount);
  }, []);

  console.log(correctAnswersCount);
  console.log(wrongAnswersCount);
  const data = [
    { title: "correct", value: correctAnswersCount, color: "green" },
    { title: "incorrect", value: wrongAnswersCount, color: "red" },
  ];
  return (
    <div data-testid="resultPage">
      <p>{correctAnswersCount}</p>
      {questionJson.map((item: any, index: any) => {
        return (
          <div key={index + 345}>
            <p>Q{index + 1}</p>
            <span>correct answer is {item.correctanswer}</span>
            <br />
            <span>your answer is {item.answer}</span>
          </div>
        );
      })}

      <div>
        <PieChart style={{ height: "100px" }} data={data} />
      </div>

      <div>
        percentage of result correct{" "}
        {(
          (correctAnswersCount / questionJson.length) *
          100
        ).toFixed(2)}
      </div>
      <div>
        percentage of result wrong{" "}
        {(
          (wrongAnswersCount / questionJson.length) *
          100
        ).toFixed(2)}
      </div>
    </div>
  );
};

export default ResultPage;
{
  /* <PieChart
style={{ height: "100px" }}
data={[
  { title: "One", value: 10, color: "#E38627" },
  { title: "Two", value: 15, color: "#C13C37" },
  { title: "Three", value: 20, color: "#6A2135" },
]}
/> */
}
