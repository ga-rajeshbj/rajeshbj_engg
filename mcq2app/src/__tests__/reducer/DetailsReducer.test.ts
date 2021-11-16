import { detailsReducer } from "../../redux/reducer/DetailsReducer";

test("Should set the name onlly", () => {
  const state = detailsReducer(
    { name: "", gender: "", language: "" },
    {
      type: "NAME",
      payload: "Rajesh",
    }
  );
  expect(state).toEqual({ name: "Rajesh", gender: "", language: "" });
});

test("Should set the gender onlly", () => {
  const state = detailsReducer(
    { name: "", gender: "", language: "" },
    {
      type: "GENDER",
      payload: "male",
    }
  );
  expect(state).toEqual({ name: "", gender: "male", language: "" });
});

test("Should set the language onlly", () => {
  const state = detailsReducer(
    { name: "", gender: "", language: "" },
    {
      type: "LANGUAGE",
      payload: "english",
    }
  );
  expect(state).toEqual({ name: "", gender: "", language: "english" });
});
