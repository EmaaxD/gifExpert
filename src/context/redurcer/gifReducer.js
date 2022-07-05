import { LOADING_GIFS, SET_GIFS, ERROR_GIFS, REMOVE_GIFS } from "../types";

export const initialState = {
  firstLoading: true,
  loading: true,
  gifs: [],
  error: null,
};

export const gifReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case LOADING_GIFS:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SET_GIFS:
      return {
        ...state,
        firstLoading: false,
        loading: false,
        gifs: [actions.payload, ...state.gifs],
        error: null,
      };

    case ERROR_GIFS:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };

    case REMOVE_GIFS:
      return {
        ...state,
        gifs: state.gifs.filter((item) => item.id !== actions.payload),
      };

    default:
      return state;
  }
};
