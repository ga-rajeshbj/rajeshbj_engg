import React, { useEffect, useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
interface QuestionComponentProps {
  questionObject: any;
  handleSetAnswer: any;
}

const Questions = (props: QuestionComponentProps) => {
  const [checkedList, setCheckedList] = useState<any>([]);
  const [checkedState, setCheckedState] = useState(
    new Array(props.questionObject.answerOptions.length).fill(false)
  );

  useEffect(() => {
    setCheckedState(
      new Array(props.questionObject.answerOptions.length).fill(false)
    );
  }, [props.questionObject]);
  let { question, answerOptions, ismultiselect, id } = props.questionObject;

  useEffect(() => {
    props.handleSetAnswer(checkedList, id);
  }, [checkedList]);

  const handleChange = (e: any, position: any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    if (ismultiselect) {
      let checkingthelist = checkedList;

      if (e.target.checked) {
        checkingthelist = [...checkingthelist, e.target.value];
      } else {
        checkingthelist = checkingthelist.filter(
          (item: any) => item !== e.target.value
        );
      }
      setCheckedList(checkingthelist);
    } else {
      props.handleSetAnswer(e.target.value, id);
    }
  };

  return (
    <div>
      <h3>{question}</h3>

      {answerOptions.map((item: any, index: any) => {
        return (
          <div className="m-3" key={index + 85}>
            <FormControlLabel
              control={
                <Checkbox
                  name={item.answerText}
                  checked={checkedState[index]}
                  value={item.answerText}
                  onChange={(e) => handleChange(e, index)}
                />
              }
              label={item.answerText}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Questions;

// const handleChange = async (e: any) => {
//   let checkedValue = e.target.value;
//   if (e.target.checked) {
//     console.log(checkedValue);
//     multiselectArray1 = [...multiselectArray1, checkedValue];
//     console.log("multi slecet array1", multiselectArray1);
//   } else {
//     multiselectArray1 = multiselectArray1.filter(
//       (item: any) => item !== checkedValue
//     );
//   }

//   console.log("multi slecet array", multiselectArray1, exampleArray);
//   props.handleSetAnswer(multiselectArray1, id);
// };
