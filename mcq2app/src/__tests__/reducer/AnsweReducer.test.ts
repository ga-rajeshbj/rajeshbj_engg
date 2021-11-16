import { answerReducer } from "../../redux/reducer/AnswerReducer";
import { defaultObj } from "../../containers/defaultJson";
test("set the english question json", () => {
  const state = answerReducer(
    { answerArray: [] },
    {
      type: "SET_LANGUAGE_PREFERENCE",
      payload: "english",
    }
  );
  expect(state.answerArray).toEqual(defaultObj.english);
});

test("set the hindi question json", () => {
  const state = answerReducer(
    { answerArray: [] },
    {
      type: "SET_LANGUAGE_PREFERENCE",
      payload: "hindi",
    }
  );

  expect(state.answerArray).toEqual(defaultObj.hindi);
});

test("set the answer to question", () => {
  const state = answerReducer(
    { answerArray: [] },
    {
      type: "SET_LANGUAGE_PREFERENCE",
      payload: "hindi",
    }
  );
});
