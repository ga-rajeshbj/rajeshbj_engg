interface name {
  type: "NAME";
  payload: string;
}

interface gender {
  type: "GENDER";
  payload: string;
}

interface language {
  type: "LANGUAGE";
  payload: string;
}

interface addAnswer {
  type: "ADD_ANSWER_WITH_ID";
  payload: any;
}

interface languagePreference {
  type: "SET_LANGUAGE_PREFERENCE";
  payload: string;
}
export type DetailsAction =
  | name
  | gender
  | language
  | addAnswer
  | languagePreference;
