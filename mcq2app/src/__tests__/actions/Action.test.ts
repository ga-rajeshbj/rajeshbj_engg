import {
  addName,
  setGender,
  setLanguage,
  setAnswerWithID,
} from "../../redux/action/Action";
import "@testing-library/jest-dom/extend-expect";

test("add the name ", async () => {
  const action = await addName("rajesh B J");
  await expect(action).toEqual({
    type: "NAME",
    payload: "rajesh B J",
  });
});

test("add the name ", async () => {
  const action = await setGender("male");
  await expect(action).toEqual({
    type: "GENDER",
    payload: "male",
  });
});

test("add the name ", async () => {
  const action = await setLanguage("english");
  await expect(action).toEqual({
    type: "LANGUAGE",
    payload: "english",
  });
});
