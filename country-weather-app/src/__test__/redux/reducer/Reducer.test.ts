import { reducer } from "../../../redux/reducers/Reducer";

test("set the english question json", () => {
  const state = reducer(
    { data: [], loading: false },
    {
      type: "LOADING",
    }
  );
  expect(state.loading).toEqual(true);
});
