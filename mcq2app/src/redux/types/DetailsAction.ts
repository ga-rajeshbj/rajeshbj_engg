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
export type DetailsAction = name | gender | language | addAnswer;
