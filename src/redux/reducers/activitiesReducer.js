import { ACTIVITIES_FETCH, ACTIVITIES_ERROR } from "../types/activitiesTypes";

const initialState = {
  activities: [
    { act_title: "Living and traveling abroad", act_descriptions: [] },
    { act_title: "Personal Activities", act_descriptions: [] }
  ],
  loading: true,
  error: null
};

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVITIES_FETCH:
      return {
        ...state,
        activities: action.payload.activities,
        loading: false,
        error: null
      };
    case ACTIVITIES_ERROR:
      return {
        activities: initialState.activities,
        loading: false,
        error: "Could not fetch data"
      };
    default:
      return { ...state };
  }
};

export default activitiesReducer;
